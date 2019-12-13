const urlSlug = require('url-slug');

/**
 * @typedef {import('mongoose').Document} Document
 * @typedef {import('mongoose').Model<Document, {}>} Model
 */

/**
 * makes unique slug, ? not required
 * @param {Model} model
 * @returns {(name: String, id: ?String) => Promise<String>}
 */
module.exports = (model) => async (name, id = null) => {
  let slug = urlSlug(name).toLowerCase();

  // { slug } = { slug: slug }
  const query = { slug };

  // excludes all document with the given `id`
  if (id) {
    query._id = { $ne: id };
  }

  const count = await model.countDocuments(query);

  // if count is greater than 0, then we add its count at the end of the slug
  if (count > 0) {
    slug += '_' + count;
  }

  return slug;
}
