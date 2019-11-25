import { forIn } from 'lodash';

import { eventHandler } from '.';

const rEventHandler = /^on[A-Z]/;

export const getEventHandlers = thisArg => field => {
  const eventHandlers = {};

  forIn(thisArg.props, (_, name) => {
    if (!rEventHandler.test(name)) {
      return;
    }

    eventHandlers[name] = eventHandler(thisArg, name)(field);
  });

  return eventHandlers;
}
