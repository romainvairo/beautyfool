import React from 'react';
import { connect } from 'react-redux';

import UserEditFormView from './UserEditForm-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class UserEditFormContainer extends React.PureComponent {

  render() {
    const { language } = this.props;

    return <UserEditFormView translation={translations[language]} />
  }
}

export default connect(mapStateToProps)(UserEditFormContainer);
