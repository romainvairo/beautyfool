/**
 * check if a field should prevent a global handler
 * @param {Object} field
 * @param {String} handlerName
 */
export const preventHandler = (field, handlerName) => {
  return field.preventGlobal && field.preventGlobal[handlerName];
}
