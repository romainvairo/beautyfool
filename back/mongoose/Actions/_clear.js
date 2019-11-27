const _ = require('lodash');

const Models = require('../Models');
const { debug } = require('../../config');

// delete all the DataBase easily

module.exports = async () => {
  debug.mongoose('clearing the DB');

  let requests = [];

  // try to delete all the documents
  try {
    for (const modelName in Models) {
      const Model = Models[modelName][_.upperFirst(modelName) + 'Model'];
      requests.push(Model.deleteMany());
    }
  } catch (error) {
    // display an error and exit the process
    debug.mongoose('An error occured and the DB couldn\'t be cleared');
    console.error(error);
    process.exit(1);
  }
  // wait for the request finish
  await Promise.all(requests);
  debug.mongoose('the DB has been cleared');
};
