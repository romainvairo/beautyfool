import React from 'react';
import { connect } from 'react-redux';

import DropdownInterfaceView from './DropdownInterface-view';
import { onChange } from '../../../../utils';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class DropdownInterfaceContainer extends React.PureComponent {

  state = {
    onClose: false,
  }

  render() {
    const { onClose, language } = this.props;

    return <DropdownInterfaceView
    translations={translations[language]}
    onClose={onClose}
    />
  }
}

export default connect(mapStateToProps)(DropdownInterfaceContainer);
