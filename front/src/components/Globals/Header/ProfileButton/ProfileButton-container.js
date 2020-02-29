import React from 'react';
import { connect } from 'react-redux';

import { Auth } from '../../../../services/Auth';
import ProfileButtonView from './ProfileButton-view';
import translations from './translations';

// All this is send into the props
const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
  user: state.clientReducer.user,
});

class ProfileButtonContainer extends React.PureComponent {

  render(){
    const { language } = this.props;

    return <ProfileButtonView
      translations={translations[language]}
      isLogged={Auth.isLogged()}
    />
  }
}

export default connect(mapStateToProps, null)(ProfileButtonContainer);
