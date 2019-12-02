const readline = require('readline');
const clear = require('./_clear');
const populate = require('./_populate');

if (process.env.NODE_ENV !== 'production') {
  // create a readline interface to read what's being sent in the console
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // call the function for each line sent
  rl.on('line', async line => {
    switch (line) {
      // clear the DB
      case 'run db:clear':
        await clear();
        break;
      // populate the DB
      case 'run db:populate':
        await populate();
        break;
      // reset the DB
      case 'run db:reset':
        await clear();
        await populate();
        break;
    }
  });
}
