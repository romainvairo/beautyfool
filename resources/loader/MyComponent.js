import React from 'react';

import { LoaderHandler } from '/services';

class MyComponent extends React.PureComponent {

  // need the context to remove the setTimeouts
  loader = new LoaderHandler(this);

  componentDidMount() {
    // all the statement function work the EXACT same way
    this.loader.setLoader.loading(); // set the loader to 'loading'
    this.loader.setLoader.success(); // set the loader to 'success'
    this.loader.setLoader.error(); // set the loader to 'error'
    this.loader.setLoader.info(); // set the loader to 'info'

    this.loader.setLoader.loading('loading...'); // set a message only when the loader is in loading mode, set the state to loading
    this.loader.setLoader.loading('loading...', 1000); // set a message only when the loader is in loading mode and for 1 second only, set the state to loading
  }

  render() {
    const { Loader } = this.loader;

    return <Loader />;
  }
}

export default MyComponent
