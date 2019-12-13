const urlSlug = require('url-slug');

/**
 * @typedef {import('mongoose').Query<Number>} MongoQueryNumber
 */

/**
 * makes unique slug, ? not required
 * @param {(query: Object) => MongoQueryNumber} counter
 * @returns {(name: String, id: ?String) => Promise<String>}
 */
module.exports = (counter) => async (name, id = null) => {
  let slug = urlSlug(name).toLowerCase();

  // { slug } = { slug: slug }
  const query = { slug };

  // excludes all document with the given `id`
  if (id) {
    query._id = { $ne: id };
  }

  const count = await counter(query);

  // if count is greater than 0, then we add its count at the end of the slug
  if (count > 0) {
    slug += '_' + count;
  }

  return slug;
}
