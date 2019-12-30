import React from 'react';
import { connect } from 'react-redux';

import axios from '../../../axios';
import FAQView from './FAQ-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class FAQContainer extends React.PureComponent{

  state = {
    faq: [],
  }

  componentDidMount(){
    axios.get(`api/questions/page/1`)
    .then(({ data }) => {
      this.setState({ faq: data.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    const { language } = this.props;
    const { faq } = this.state;

    return <FAQView translations={translations[language]} faq={faq} />;
  }
}

export default connect(mapStateToProps)(FAQContainer);
