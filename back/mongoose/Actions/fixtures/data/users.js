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
    username: 'admintest',
    firstname: 'Admin',
    lastname: 'Test',
    password: 'admin',
    email: 'admin@gmail.com',
    roles: ['user', 'admin'],
  },
  {
    username: 'zougui',
    firstname: 'Zougui',
    lastname: 'Something',
    password: 'mypassword',
    email: 'zouguidu91@gmail.com',
    roles: ['user', 'admin'],
    newsletterSubscribed: true,
  },
  {
    username: 'rokxis',
    firstname: 'Romain',
    lastname: 'Lerow',
    password: 'raclack',
    email: 'moneycash@gmail.com',
    roles: ['user', 'admin'],
  },
  {
    username: 'max51guitare',
    firstname: 'François',
    lastname: 'Maxiguitare',
    password: 'oclock',
    email: 'maxiguitare.francois@gmail.com',
    roles: ['user', 'admin'],
  },
  {
    username: 'usertest',
    firstname: 'User',
    lastname: 'Test',
    password: 'user',
    email: 'user@gmail.com',
    roles: ['user'],
  },
  {
    username: 'leicko',
    firstname: 'rino',
    lastname: 'Bidocrak',
    password: 'menola',
    email: 'kalamita@gmail.com',
    roles: ['user'],
  },
  {
    username: 'zujaduda',
    firstname: 'Cliko',
    lastname: 'Banality',
    password: 'mokado',
    email: 'mirola@gmail.com',
    roles: ['user'],
  },
  {
    username: 'riberadi',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'anamah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'bahihuzo',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankamh@gmail.com',
    roles: ['user'],
  },
  {
    username: 'jixovir',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankama@gmail.com',
    roles: ['user'],
  },
  {
    username: 'lodoconu',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'nkamah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'rusutal',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankhghamah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'fablahy',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'anjfkamah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'ghecanu',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankamghjh@gmail.com',
    roles: ['user'],
  },
  {
    username: 'bexumod',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankafghmah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'tesoobi',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankjghkamah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'quridus',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'afghnkamah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'boklutu',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankamjkhjah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'honnor',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankahkgkmah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'heluin',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankautrsmah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'centira',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankdfgdfamah@gmail.com',
    roles: ['user'],
  },
  {
    username: 'dortas',
    firstname: 'Kokinoa',
    lastname: 'Kaniglou',
    password: 'dofus',
    email: 'ankamsdfgah@gmail.com',
    roles: ['user'],
  },
  ...moreUsers,
];
