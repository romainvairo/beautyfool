import React from 'react';
import { upperFirst, camelCase, uniqBy } from 'lodash';
import { connect } from 'react-redux';

import ListsGetAllView from './ListsGetAll-view';
import translations from './translations';
import { GetSnackbar, DeleteSnackbar } from './Snackbars';
import * as potientalChildrens from './Childrens';
import PageNotFound from '../../../PageNotFound';
import { getPage, singularify } from '../../../../../utils';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class ListsGetAllContainer extends React.PureComponent {

  getSnackbar = new GetSnackbar(this);
  deleteSnackbar = new DeleteSnackbar(this);
  getting = false;

  state = {
    list: [],
    lastPage: 10,
  };

  componentDidMount() {
    const { match } = this.props;

    this.getSnackbar.caller(+getPage(match), 'bottom');
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    const page = +getPage(match);

    if (page !== +getPage(prevProps.match)) {
      this.setState({ users: [] });
      this.getSnackbar.caller(page);
    }
  }

  /**
   * change the page of the browser's window
   * @param {Number} newPage
   */
  onPageChange = newPage => {
    const { history, location } = this.props;

    const paramsLessLocation = location.pathname.split(/\/[0-9]*$/)[0];

    history.push(paramsLessLocation + '/' + newPage);
  }

  /**
   * called when the user scrolls
   */
  onScroll = (page, type) => {
    if (this.getting) {
      return true;
    }

    this.getSnackbar.caller(page, type);
  }

  /**
   * @param {String} id
   */
  deleteItemById = id => {
    this.setState(state => {
      // delete a single user
      const list = state.list.filter(v => v._id !== id);

      // update the users in the state
      return { list };
    });
  }

  render() {
    const { language, match } = this.props;
    const { list, lastPage } = this.state;

    const ChildrenComponent = potientalChildrens[upperFirst(camelCase(singularify(match.params.category)))];

    if (!ChildrenComponent) {
      return <PageNotFound />;
    }

    return <ListsGetAllView
      translations={translations[language]}
      list={uniqBy(list.filter(v => v), v => v._id)}
      DeleteSnackbar={this.deleteSnackbar.Snackbar}
      GetSnackbar={this.getSnackbar.Snackbar}
      callDeleteRequest={this.deleteSnackbar.caller}
      onScroll={this.onScroll}
      onPageChange={this.onPageChange}
      page={+getPage(match)}
      lastPage={lastPage}
      ChildrenComponent={ChildrenComponent}
    />;
  }
}

export default connect(mapStateToProps)(ListsGetAllContainer);
