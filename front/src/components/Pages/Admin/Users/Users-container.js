import React from 'react';
import { connect } from 'react-redux';

import { getPage } from '../../../../utils';
import UsersView from './Users-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class UsersContainer extends React.PureComponent {

  onPageChange = newPage => {
    const { history, location } = this.props;

    const paramsLessLocation = location.pathname.split(/\/[0-9]*$/)[0];

    history.push(paramsLessLocation + '/' + newPage);
  }

  render() {
    const { match, language } = this.props;

    return <UsersView
      page={getPage(match)}
      translations={translations[language]}
      onPageChange={this.onPageChange}
    />;
  }
}

export default connect(mapStateToProps)(UsersContainer);
