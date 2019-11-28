/**
 * @param {Object} res express' response
 * @param {Object} data data to send to the user
 * @param {Boolean} success say if the request succeeded
 */
module.exports = (res, data, success = false) => {
  data = data || {};
  res.end(JSON.stringify({ ...data, success }));
}
