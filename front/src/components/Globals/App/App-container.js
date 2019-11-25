import React from 'react';
import { connect } from 'dynamic-redux';

import AppView from './App-view';

const mapDispatchToProps = 'client: setLanguage';

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
