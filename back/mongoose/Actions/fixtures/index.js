const fileWriter = require('./JSON/fileWriter');

// write the fixtures' results into JSON files
module.exports = async () => {
  await fileWriter('categories', require('./categories'));
  await fileWriter('roles', require('./roles'));
  await fileWriter('users', require('./users'));
  await fileWriter('questions', require('./questions'));
  await fileWriter('services', require('./services'));
  await fileWriter('beautyTips', require('./beautyTips'));
  await fileWriter('actualities', require('./actualities'));
  await fileWriter('images', require('./images'));
  await fileWriter('appointments', require('./appointments'));
  await fileWriter('feedbacks', require('./feedbacks'));
  await fileWriter('comments', require('./comments'));
}
