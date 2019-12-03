const { passwordGenerator } = require('../../../../services');

const moreUsers = [];
for (let i = 0; i < 100; i++) {
  moreUsers.push({
    username: passwordGenerator(),
    firstname: passwordGenerator(),
    lastname: passwordGenerator(),
    password: passwordGenerator(),
    email: passwordGenerator() + '@gmail.com',
  });
}

module.exports = [
  {
    username: 'zougui',
    firstname: 'zougui',
    lastname: 'something',
    password: 'mypassword',
    email: 'zouguidu91@gmail.com',
  },
  {
    username: 'rokxis',
    firstname: 'romain',
    lastname: 'lerow',
    password: 'raclack',
    email: 'moneycash@gmail.com',
  },
  {
    username: 'leicko',
    firstname: 'rino',
    lastname: 'bidocrak',
    password: 'menola',
    email: 'kalamita@gmail.com',
  },
  {
    username: 'konishiuah',
    firstname: 'cliko',
    lastname: 'banality',
    password: 'mokado',
    email: 'mirola@gmail.com',
  },
  {
    username: 'blablana',
    firstname: 'kokinoa',
    lastname: 'kaniglou',
    password: 'dofus',
    email: 'ankamah@gmail.com',
  },
  ...moreUsers,
];
