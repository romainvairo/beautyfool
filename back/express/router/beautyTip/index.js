const { app } = require('../../../config/server');
const addBeautyTip = require('./addBeautyTip');
const getBeautyTips = require('./getBeautyTips');
const getBeautyTipById = require('./getBeautyTipById');
const editBeautyTipById = require('./editBeautyTipById');
const deleteBeautyTipById = require('./deleteBeautyTipById');
const getNewestBeautyTip = require('./getNewestBeautyTip');
const getBeautyTipsCount = require('./getBeautyTipsCount');

app.get('/api/beauty-tips/count', getBeautyTipsCount);
app.get('/api/beauty-tips/newest', getNewestBeautyTip)
app.get('/api/beauty-tips/page/:page', getBeautyTips);
app.post('/api/beauty-tips/add', addBeautyTip);
app.get('/api/beauty-tips/:id', getBeautyTipById);
app.put('/api/beauty-tips/:id/edit', editBeautyTipById);
app.delete('/api/beauty-tips/:id/delete', deleteBeautyTipById);
