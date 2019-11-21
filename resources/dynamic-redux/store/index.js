import { createStore } from 'dynamic-redux';

import combinedStates from './states';

// create a redux store with the given states
export default createStore(combinedStates);
