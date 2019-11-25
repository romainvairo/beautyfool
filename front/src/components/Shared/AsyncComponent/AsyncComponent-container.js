import React from 'react';
import i18n from 'i18next';
import { connect } from 'dynamic-redux';

import Loading from '../../Pages/Loading';
import AsyncComponentView from './AsyncComponent-view';

const mapStateToProps = 'router: cachedComponents';
const mapDispatchToProps = 'router: mergeCachedComponents';

class AsyncComponentContainer extends React.PureComponent {

  state = {
    Component: null,
  }

  componentDidMount() {
    const { Component } = this.state;
    let { moduleProvider, name, namespaces } = this.props;

    const cachedComponent = this.getComponent();

    namespaces = [...namespaces, name.toLowerCase()];

    // groups multiple promises into one
    // return lists of promises that will load namespaces
    Promise.all(namespaces.map(n => i18n.loadNamespaces(n)))
      .then(() => {
        if (cachedComponent) {
          this.setState({ Component: cachedComponent });
        } else if (!Component) {
          // is a provider of the asynchronous component which return a promise
          moduleProvider().then(this.componentSetter);
        }
      })
      .catch(err => {
        throw new Error(`A namespace couldn't be loaded. It is likely the file doesn't exist.\nNamespaces: ${namespaces.join(', ')} \n${err}`);
      });
  }

  /**
   * get the demanded component if it exists in the store
   * @returns {Object | Function}
   */
  getComponent = () => {
    const { name, cachedComponent } = this.props;
    return cachedComponent[name];
  }

  /**
  * set the component into the redux store and the state
  * @param {Object} data
  */
  componentSetter = data => {
    const _exports = Object.values(data);
    const Component = _exports[0];

    this.cacheComponent(Component);
    this.setState({ Component });
  }

  /**
   * will put the component into the redux store
   * @param {Object | Function} component
   */
  cacheComponent = component => {
    const { name, mergeCachedComponents } = this.props;
    mergeCachedComponents({ [name]: component });
  }

  /**
   * render the current component if it has finished to load
   * @returns {Object | Function}
   */
  renderComponentLoaded = () => {
    const { Component } = this.state;
    const { moduleProvider, name, fallback, namespaces, ...props } = this.props;

    return <Component {...props} />;
  }

  /**
   * render the loading page until the demanded component finish to load
   * @returns {Object | Function}
   */
  renderComponentLoading = () => {
    const { name } = this.props;
    return <Loading name={name} />;
  }

  /**
   * render the right component depending on the component in the state and the fallback in the props
   * @returns {Object | Function | undefined}
   */
  chooseRendering = () => {
    const { Component } = this.state;
    const { fallback } = this.props;

    return Component
      ? this.renderComponentLoaded()
      : fallback && this.renderComponentLoading();
  }

  render() {
    return <AsyncComponentView
      chooseRendering={this.chooseRendering}
    />;
  }
}

AsyncComponentContainer.defaultProps = {
  fallback: true,
  namespaces: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncComponentContainer);
