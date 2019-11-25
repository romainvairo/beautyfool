export const overrideValue = (value, overrideValue) => {
  return overrideValue !== undefined
    ? overrideValue
    : value;
}
