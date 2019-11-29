const clear = require('./_clear');

// delete all the DataBase easily

(async () => {
  await clear();
  process.exit(0);
})();
