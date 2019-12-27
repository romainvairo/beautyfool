import React from 'react';
import moment from 'moment';
import QS from 'uqs';
import { connect } from 'react-redux';
import axios from '../../../axios';

import BenefitsView from './Benefits-view';
import translations from './translations';
import { correctFormatDate } from '../../../utils';
import { setAppointment } from '../../../store/actions/client';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const mapDispatchToProps = dispatch => ({
  setAppointment: value => dispatch(setAppointment(value)),
});

class BenefitsContainer extends React.PureComponent {

  state = {
    categories: [],
    choosenServices: [],
  }

  componentDidMount() {
    axios.get('/api/categories')
      .then(({ data }) => {
        this.setState({ categories: data.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * get if the service has been choosen by the client
   * @returns {Boolean}
   */
  isServiceChoosen = service => {
    const { choosenServices } = this.state;

    // if the service is in `choosenServices` the index will be equal to 0 or greater
    // otherwise it will be -1
    const found = choosenServices.find(s => s._id === service._id);

    // cast the value into a boolean
    // same can be done using `!!found` in which:
    // found === null
    // (!found) === true
    // (!!found) === false
    return Boolean(found);
  }

  /**
   * get the total price of all choosen services
   * @returns {Number}
   */
  getTotalPrice = () => {
    const { choosenServices } = this.state;

    return choosenServices.length
      ? choosenServices
          .map(s => s.price)
          .reduce((total, value) => total + value)
      : 0;
  }

  /**
   * get the total duration of all choosen services
   * @returns {Number}
   */
  getTotalDuration = () => {
    const { choosenServices } = this.state;

    return choosenServices.length
      ? choosenServices
        .map(s => s.duration)
        .reduce((total, value) => new Date(total).getTime() + new Date(value).getTime())
      : 0;
  }

  /**
   * @param {Object} service
   * @param {String} service._id
   */
  onChange = service => () => {
    this.setState(state => {
      if (this.isServiceChoosen(service)) {
        // remove `service` from `choosenServices`
        return {
          choosenServices: state.choosenServices.filter(s => s._id !== service._id),
        };
      }

      // add `service` to `choosenServices`
      return {
        choosenServices: state.choosenServices.concat([service]),
      };
    });
  }

  onButtonClick = () => {
    const { setAppointment, history } = this.props;
    const { choosenServices } = this.state;

    const totalPrice = this.getTotalPrice();
    const totalDuration = this.getTotalDuration();

    setAppointment({
      services: choosenServices,
      totalPrice: totalPrice,
      totalDuration: moment(totalDuration),
      queryString: '?' + QS.stringify({
        duration: correctFormatDate(totalDuration) || '0 minute',
        price: totalPrice + ' €',
      }),
    });

    history.push('/calendar');
  }

  render() {
    const { language } = this.props;
    const { categories } = this.state;


    return <BenefitsView
      translations={translations[language]}
      categories={categories}
      onChange={this.onChange}
      isServiceChoosen={this.isServiceChoosen}
      totalPrice={this.getTotalPrice()}
      totalDuration={correctFormatDate(this.getTotalDuration()) || '0 minute'}
      onButtonClick={this.onButtonClick}
    />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BenefitsContainer);
