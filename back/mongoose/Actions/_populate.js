const fixture = require('./fixtures');
const { debug } = require('../../config');

// populate the DataBase easily

module.exports = () => new Promise(resolve => {
  debug.mongoose('populating the DB');
  fixture()
    .then(() => {
      debug.mongoose('DB has been populated');
      resolve();
    })
    .catch(error => {
      debug.mongoose('an error occured and the DB couldn\'t be populated');
      console.error(error);
      process.exit(1);
    });
});
