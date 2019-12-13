import React from 'react';
import { camelCase, upperFirst } from 'lodash';
import { connect } from 'react-redux';

import ListsEditView from './ListsEdit-view';
import translations from './translations';
import PageNotFound from '../../../PageNotFound';
import * as potientalChildrens from './Childrens';
import { singularify, onChange } from '../../../../../utils';
import { GetSnackbar, EditSnackbar } from './Snackbars';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.adminReducer.user,
  actuality: state.adminReducer.actuality,
  appointment: state.adminReducer.appointment,
  beautyTip: state.adminReducer.beautyTip,
  category: state.adminReducer.category,
  comment: state.adminReducer.comment,
  feedback: state.adminReducer.feedback,
  image: state.adminReducer.image,
  question: state.adminReducer.question,
  role: state.adminReducer.role,
  service: state.adminReducer.service,
});

class ListsEditContainer extends React.PureComponent {

  getSnackbar = new GetSnackbar(this);
  editSnackbar = new EditSnackbar(this);

  getCorrectDataName = () => {
    const { match } = this.props;
    const { category } = match.params;

    return camelCase(singularify(category));
  }

  state = {
    ...(this.props[this.getCorrectDataName()] || {}),
  };

  componentDidMount() {
    this.callGetRequest();
  }

  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      this.callGetRequest();
    }
  }

  /**
   * call get request if necessary
   */
  callGetRequest = () => {
    const objectData = this.props[this.getCorrectDataName()];

    if (!Object.keys(objectData).length) {
      this.getSnackbar.caller();
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.editSnackbar.caller(this.state);
    console.log('edit form data', this.state);
  }

  onChange = onChange(this);

  render() {
    const { language, match } = this.props;

    const ChildrenComponent = potientalChildrens[upperFirst(camelCase(singularify(match.params.category)))];

    if (!ChildrenComponent) {
      return <PageNotFound />;
    }

    return <ListsEditView
      translations={translations[language]}
      formData={this.state}
      ChildrenComponent={ChildrenComponent}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      GetSnackbar={this.getSnackbar.Snackbar}
      EditSnackbar={this.editSnackbar.Snackbar}
    />;
  }
}

export default connect(mapStateToProps)(ListsEditContainer);
