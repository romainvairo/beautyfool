export const isNot = validationName => {
  let not = false;

  if (validationName[0] === '!') {
    not = true;
    validationName = validationName.substring(1);
  }

  return {
    not,
    validationName,
  };
}
