import React from 'react';
import { connect } from 'react-redux';

import axios from '../../../axios';
import ConfirmationEmailView from './ConfirmationEmail-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
})

class ConfirmationEmailContainer extends React.PureComponent {

  state = {
    messageName: '',
  }

  componentDidMount() {
    const { match } = this.props

    axios.get(`api/users/${match.params.id}/email/confirm`)
      .then(() => {
        this.setState({ messageName: 'success' });
      })
      .catch(err => {
        this.setState({ messageName: 'error' });
        console.error(err);
      });
  }

  render(){

    const { language } = this.props;
    const { messageName } = this.state;

    return <ConfirmationEmailView
      translations={translations[language]}
      messageName={messageName}
    />;
  }
}

export default connect(mapStateToProps)(ConfirmationEmailContainer);
