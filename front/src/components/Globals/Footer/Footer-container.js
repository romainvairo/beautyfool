import React from 'react';
import { connect } from 'react-redux';

import FooterView from './Footer-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

class FooterContainer extends React.PureComponent {

  onCopy = e => {
    e.preventDefault();

    const input = document.getElementById('empty-input');
    console.log(input.value);
    input.value = window.location.href;
    console.log(input.value);

    input.select();
    document.execCommand('copy');
  }

  render() {
    const { language } = this.props;

    return <FooterView
      onCopy={this.onCopy}
      translations={translations[language]}
    />;
  }
}
export default connect(mapStateToProps, null)(FooterContainer);
