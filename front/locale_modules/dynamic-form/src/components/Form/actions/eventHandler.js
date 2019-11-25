import { isFunction } from 'lodash';

import { preventHandler } from '../../../utils';

export const eventHandler = (thisArg, eventName) => field => e => {
  const globalHandler = thisArg.props[eventName];
  const localHandler = field[eventName];

  if (isFunction(globalHandler) && !preventHandler(field, eventName)) {
    globalHandler(e);
  }

  if (isFunction(localHandler)) {
    localHandler(e);
  }
}
