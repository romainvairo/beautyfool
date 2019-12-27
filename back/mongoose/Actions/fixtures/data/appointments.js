const moment = require('moment');

module.exports = [
  {
    date: moment({ hour: 14, day: 27, month: 11, year: 2019 }).toDate(),
    customer: 'zougui',
    services: [
      'Pose Vernis Couleur',
      'Dépose seule',
    ]
  },
  {
    date: moment({ hour: 10, day: 29, month: 11, year: 2019 }).toDate(),
    customer: 'rokxis',
    services: [
      'Soin Saisonnier',
    ]
  },
  {
    date: moment({ hour: 18, day: 25, month: 11, year: 2019 }).toDate(),
    customer: 'centira',
    services: [
      'Gommage au Savons Noir',
      'Maillot Brésilien',
    ]
  },
];
