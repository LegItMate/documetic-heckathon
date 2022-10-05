# Introduction
Moment-extras is a extender for the [moment](https://momentjs.com) package which simplifies using moment as well as add a bit of utility features that may not be seen in the near future.

*This package was made for a hackthon by [Documatic](https://documatic.com)*

# Installation
```sh
# With npm
npm install https://github.com/LegItMate/documetic-heckathon.git
# With yarn
yarn add https://github.com/LegItMate/documetic-heckathon.git
```

# Usage
```js
// Import moment-extras and configure the module
require('moment-extras')({ throwOnInvalidDate: true });

// Import moment
const moment = require('moment');

/*
    moment.parse(inp, format, fn);
    inp: Your Date String
    format: The format to read the time
    fn: Allows using different functions that can parse time
        `utc`, `tz`, `parseZone`, `parseTwoDigitYear`
*/
moment.parse('1996-09-01', 'YYYY-MM-DD', 'utc');
```

# Contribution
If you wish to add any new features or implement any other simplification for using moment, feel free to fork the [repository](https://github.com/LegItMate/documetic-heckathon) and create a Pull Request with your suitable changes! Any feature requests and bug reports are also welcomed.