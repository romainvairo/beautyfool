const fs = require('fs');

// write the fixtures in the files
module.exports = async (name, fixtures) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  const data = await fixtures();

  // write in the file the data returned by fixtures
  //fs.writeFileSync(__dirname + '/' + name + '.json', JSON.stringify(data, null, 2));
}
