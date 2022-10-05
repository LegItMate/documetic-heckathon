let moment;
const fns = ['utc', 'tz', 'parseZone', 'parseTwoDigitYear'];

const func = ((options = {}) => {
  if (typeof options.throwOnInvalidDate !== 'boolean') options.throwOnInvalidDate = false;

  moment.parse = (inp, format = '', fn) => {
    let parsed;

    // Allow using different parse methods
    if (fn && moment[fn] && fns.includes(fn)) {
      parsed = moment[fn](inp, format);
    }
    else {
      if (fn) console.log(new Error(`moment-extras: fn \`${fn}\` does not exist.`));
      parsed = moment(inp, format);
    }

    // Partially adds https://github.com/moment/moment/issues/4985
    if (options.throwOnInvalidDate === true) {
      if (fn === 'parseTwoDigitYear') {
        if (parsed === 2000 && inp != 0) throw Error('moment-extras: Invalid two digit year');
      }
      else {
        const out = parsed?.format();
        if (out === 'Invalid date') throw Error('moment-extras: Invalid date');
      }
    }

    return parsed;
  };

  return moment;
});

if (typeof module === 'object' && module.exports) {
  moment = require('moment');
  module.exports = func;
}
if (!moment.version && moment.default) {
  moment = moment.default;
}