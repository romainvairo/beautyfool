import React from 'react';
import { connect } from 'react-redux';

import SearchOptionsPanelView from './SearchOptionsPanel-view';
import translations from './translations';
import { onChange } from '../../../../utils';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class SearchOptionsPanelContainer extends React.PureComponent {

  state = {
    search: '',
    order: '1',
  }

  onChange = onChange(this);

  render() {
    const { language } = this.props;
    const { search, order } = this.state;

    return <SearchOptionsPanelView
      translations={translations[language]}
      onChange={this.onChange}
      search={search}
      order={order}
    />;
  }
}

export default connect(mapStateToProps)(SearchOptionsPanelContainer);
