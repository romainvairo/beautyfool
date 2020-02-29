const path = require('path');

const { app } = require('../../config/server');

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '/../../public/build/index.html'));
  res.end();
});
