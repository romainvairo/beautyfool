const moment = require('moment');

module.exports = [
  {
    name: 'Nails',
    description: 'I cut your ugly nails',
    duration: new Date(moment.duration(15, 'minutes')),
    price: 9540,
  },
  {
    name: 'Blowjob',
    description: 'No description needed',
    duration: new Date(moment.duration(20, 'minutes')),
    price: 1,
  },
  {
    name: 'Draw',
    description: 'I can draw whatever the hell you want',
    duration: new Date(moment.duration(2, 'hours')),
    price: 90,
  },
];
