const clear = require('./_clear');
const populate = require('./_populate');

(async () => {
  await clear();
  await populate();
  process.exit(0);
})();
