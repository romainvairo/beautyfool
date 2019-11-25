export const fieldsEqual = state =>
  (confirmation, options) =>
    state[options.field] === confirmation;
