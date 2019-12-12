const { app } = require('../../../config/server');
const getCategories = require('./getCategories');
const addCategory = require('./addCategory');
const getCategoryById = require('./getCategoryById');
const editCategoryById = require('./editCategoryById');
const deleteCategoryById = require('./deleteCategoryById');

app.get('/api/categories', getCategories);
app.post('/api/categories/add', addCategory);
app.get('/api/categories/:id', getCategoryById);
app.put('/api/categories/:id/edit', editCategoryById);
app.delete('/api/categories/:id/delete', deleteCategoryById);
