const populate = require('./_populate');

// populate the DataBase easily

(async () => {
  await populate();
  process.exit(0);
})();
