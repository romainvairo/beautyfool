import express from 'express';

import { app } from '../../config/server';

const build = express.static('../front/build');

app.use('/', build);
app.use('*', build);
