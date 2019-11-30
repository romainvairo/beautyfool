const readline = require('readline');
const clear = require('./_clear');
const populate = require('./_populate');

if (process.env.NODE_ENV !== 'production') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', async line => {
    switch (line) {
      case 'run db:clear':
        await clear();
        break;
      case 'run db:populate':
        await populate();
        break;
      case 'run db:reset':
        await clear();
        await populate();
        break;
    }
  });
}
