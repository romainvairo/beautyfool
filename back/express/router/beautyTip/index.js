const { app } = require('../../../config/server');
const addBeautyTip = require('./addBeautyTip');
const getBeautyTips = require('./getBeautyTips');
const getBeautyTipById = require('./getBeautyTipById');
const editBeautyTipById = require('./editBeautyTipById');
const deleteBeautyTipById = require('./deleteBeautyTipById');

app.get('/api/BeautyTips', getBeautyTips);
app.post('/api/BeautyTips/add', addBeautyTip);
app.get('/api/BeautyTips/:id', getBeautyTipById);
app.put('/api/BeautyTips/:id/edit', editBeautyTipById);
app.delete('/api/BeautyTips/:id/delete', deleteBeautyTipById);
