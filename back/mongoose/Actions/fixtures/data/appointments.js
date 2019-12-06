const moment = require('moment');

module.exports = [
  {
    date: moment({ hour: 14, day: 27, month: 10, year: 2019 }).toDate(),
    customer: 'zougui',
    services: [
      'Makeup',
      'Body',
    ]
  },
  {
    date: moment({ hour: 10, day: 29, month: 10, year: 2019 }).toDate(),
    customer: 'rokxis',
    services: [
      'Nails',
    ]
  },
  {
    date: moment({ hour: 18, day: 25, month: 11, year: 2019 }).toDate(),
    customer: 'centira',
    services: [
      'Nails',
      'Makeup',
    ]
  },
];
