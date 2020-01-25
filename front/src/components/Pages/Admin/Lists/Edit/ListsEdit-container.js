import React from 'react';
import { camelCase, upperFirst, isFunction } from 'lodash';
import { connect } from 'react-redux';

import ListsEditView from './ListsEdit-view';
import translations from './translations';
import PageNotFound from '../../../PageNotFound';
import User from './Childrens/User';
import Feedback from './Childrens/Feedback';
import Actuality from './Childrens/Actuality';
import Appointment from './Childrens/Appointment';
import BeautyTip from './Childrens/BeautyTip';
import Category from './Childrens/Category';
import Comment from './Childrens/Comment';
import Image from './Childrens/Image';
import Question from './Childrens/Question';
import Schedule from './Childrens/Schedule';
import Service from './Childrens/Service';
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
  data: state.adminReducer.data,
});

class ListsEditContainer extends React.PureComponent {

  getSnackbar = new GetSnackbar(this);
  editSnackbar = new EditSnackbar(this);
  ChildrenComponent;
  potientalChildrens = {
    User,
    Feedback,
    Actuality,
    Appointment,
    BeautyTip,
    Category,
    Comment,
    Image,
    Question,
    Schedule,
    Service,
  }

  getCorrectDataName = () => {
    const { match } = this.props;
    const { category } = match.params;

    return camelCase(singularify(category));
  }

  getCorrectData = () => {
    /* const correctData = this.props[this.getCorrectDataName()] */
    const correctData = this.props.data;
    return correctData || {};
  }

  /* originalData = {
    ...this.getCorrectData()
  }; */

  state = {
    ...this.getCorrectData(),
  };

  componentDidMount() {
    this.callGetRequest();
    this.setChildrenComponent();
  }

  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      this.callGetRequest();
    }

    if (prevProps.match.params.category !== match.params.category) {
      this.setChildrenComponent();
    }
  }

  setChildrenComponent = () => {
    this.ChildrenComponent = this.potientalChildrens[this.getChildrenName()];
    this.forceUpdate();
  }

  getChildrenName = () => {
    const { match } = this.props;
    return upperFirst(camelCase(singularify(match.params.category)));
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

    if (!isFunction(this.ChildrenComponent.difference)) {
      throw new Error(`No "difference" function on children "${this.getChildrenName()}"`);
    }

    const differences = this.ChildrenComponent.difference(this.state, this.props.data);

    this.editSnackbar.caller(differences);
    console.log('changes', this.ChildrenComponent.difference(this.state, this.props.data));
  }

  onChange = onChange(this);

  render() {
    const { language } = this.props;
    if (!this.ChildrenComponent) {
      return <PageNotFound />;
    }

    return <ListsEditView
      translations={translations[language]}
      formData={this.state}
      ChildrenComponent={this.ChildrenComponent}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      GetSnackbar={this.getSnackbar.Snackbar}
      EditSnackbar={this.editSnackbar.Snackbar}
    />;
  }
}

export default connect(mapStateToProps)(ListsEditContainer);
