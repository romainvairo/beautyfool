import { CombineStates } from 'dynamic-redux';

import exampleState from './example';

// combine multiple states into one
export default new CombineStates([exampleState]);
