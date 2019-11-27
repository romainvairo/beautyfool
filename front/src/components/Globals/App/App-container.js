import React from 'react';
import { connect } from 'react-redux';

import AppView from './App-view';
import { setLanguage } from '../../../store/actions/client';

// function that have an argument dispatch
const mapDispatchToProps = (dispatch) => ({

  // function that dispatch the action `setLanguage` into the middlewares and reducers
  setLanguage: value => dispatch(setLanguage(value))

});

// PureComponent avoid useless update
class AppContainer extends React.PureComponent {

  componentDidMount() {
    const { setLanguage } = this.props;
    // get the language of the navigator
    setLanguage(window.navigator.language);
  }

  render() {
    return <AppView />;
  }
}

export default connect(null, mapDispatchToProps)(AppContainer);
