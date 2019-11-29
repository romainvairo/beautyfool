const fs = require('fs');

// write the fixtures in the files
module.exports = async (name, fixtures) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  // write in the file the data returned by fixtures
  fs.writeFileSync(__dirname + '/' + name + '.json', JSON.stringify(await fixtures(), null, 2));
}
