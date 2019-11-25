import { createProvider } from '../../../utils';

// an asynchronous router will optimize the first loading of the web site


// The provider is a function that will create a provider to render an asynchronous component
export const Home = createProvider(
  'Home',
  // import == dynamic asynchrone import
  // `webpackChunkName` will give an explicit name for the component's file
  () => import(/* webpackChunkName: "Home" */ '../../Pages/Home')
);
