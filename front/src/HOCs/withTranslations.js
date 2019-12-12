import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

/**
 * @typedef {import('../types').FunctionComponent} FunctionComponent
 */

/**
 *
 * @param {Object} translations
 * @returns {(Component: FunctionComponent) => FunctionComponent}
 */
const withTranslations = translations => Component => {
  const ComponentWrapper = props => (
    <Component {...props} translations={translations[props.language]} />
  );

  return connect(mapStateToProps)(ComponentWrapper)
}

export default withTranslations;
