const express = require('express');

const { app } = require('../../config/server');

const build = express.static('../front/build');

app.use('/', build);
app.use('*', build);
