import React from 'react';
import { camelCase, upperFirst } from 'lodash';
import { connect } from 'react-redux';

import ListsAddView from './ListsAdd-view';
import translations from './translations';
import PageNotFound from '../../../PageNotFound';
import * as potientalChildrens from './Childrens';
import { onChange, singularify } from '../../../../../utils';
import { AddSnackbar } from './Snackbars';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class ListsAddContainer extends React.PureComponent {

  addSnackbar = new AddSnackbar(this);

  state = {

  };

  onSubmit = e => {
    e.preventDefault();
    this.addSnackbar.caller(this.state);
    console.log('add form data', this.state);
  }

  onChange = onChange(this);

  render() {
    const { language, match } = this.props;

    const ChildrenComponent = potientalChildrens[upperFirst(camelCase(singularify(match.params.category)))];

    if (!ChildrenComponent) {
      return <PageNotFound />;
    }

    return <ListsAddView
      translations={translations[language]}
      formData={this.state}
      ChildrenComponent={ChildrenComponent}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      AddSnackbar={this.addSnackbar.Snackbar}
    />;
  }
}

export default connect(mapStateToProps)(ListsAddContainer);
