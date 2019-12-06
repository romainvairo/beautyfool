const { UserController, RoleController } = require('../../Controllers');
const { users } = require('./data');

module.exports = async () => {
  const requests = [];
    // find the role for the user
  const role = await RoleController.findByName('user');

    // pushes a request that will add a user into the DB, into the array
  for (let i = 0; i < users.length; i++) {
    // define default role for the user
    if (users[i].roles) {
      // @ts-ignore
      users[i].roles = (await Promise.all(users[i].roles.map(r => RoleController.findByName(r))));
    } else {
      users[i].roles = [role._id];
    }
    requests.push(UserController.add(users[i]));
  }

  return Promise.all(requests);
}
