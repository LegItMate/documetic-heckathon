const fn = require('../src/index.js')
fn({ throwOnInvalidDate: true });
const moment = require('moment');

console.log('Test');
// console.log(moment.parse('1996-09-01', 'YYYY-MM-DD', 'tz'));
// console.log(moment.parse('1996-01', 'YYYY-mm', 'utc').format('YYYY-MM-DD hh:mm:ss:mm'));
// console.log(moment.parse('19', null, 'parseTwoDigitYear'));
// console.log(moment.parse('1996-09', 'YYYY-DD', 'utc').format('YYYY MM DD hh:mm:ss'));