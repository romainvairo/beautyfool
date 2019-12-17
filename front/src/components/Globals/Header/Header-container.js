import React from 'react';
import { connect } from 'react-redux';

import HeaderView from './Header-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

class HeaderContainer extends React.PureComponent {
  state = {
    isToggle: false,
  }
  setIsToggle = () => {
     this.setState(state => ({ isToggle: !state.isToggle }));
  }
  render() {
    const { language } = this.props;
    const { isToggle } = this.state;
  return <HeaderView
    translations={translations[language]}
    isToggle={isToggle}
    setIsToggle={this.setIsToggle}
  />;
  }
}

export default connect(mapStateToProps, null)(HeaderContainer);
