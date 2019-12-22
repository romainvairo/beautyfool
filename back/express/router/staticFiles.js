const express = require('express');
const path = require('path');

const { app } = require('../../config/server');

const build = express.static('../front/build');
const filesPath = path.join(__dirname, '/../../../files');

app.use('/', build);
app.use('*', build);

app.get('/api/files/:fileType/:fileName', (req, res) => {
  const { fileType, fileName } = req.params;

  res.sendFile(path.join(filesPath, '/', fileType, '/', fileName), err => {
    if (err) {
      console.error(err);
      return res.status(err.status || 404);
    }

    res.end();
  });
});
