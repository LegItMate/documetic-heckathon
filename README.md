# Introduction
Moment-extras is a extender for the [moment](https://momentjs.com) package which simplifies using moment as well as add a bit of utility features that may not be seen in the near future.

<hr>

*This package was made for a hackthon by [Documatic](https://documatic.com)*
<br><br>
Documatic is a search engine for your codebase; Ask documatic a question and find relevant code snippets and insights in seconds.

https://www.documatic.com/
Documatic acts as a search engine for your codebase; once you describe what you're looking for, Documatic pulls up related code or documentation making it easier to find what you're looking for in seconds!

Not sitting next to each other? No problem. Ask Documatic questions of your codebase to learn and understand your code in seconds. Documatic is the team member you wish you had

Our Visual studio Code extension: https://marketplace.visualstudio.com/items?itemName=Documatic.documatic
https://cdn.discordapp.com/attachments/926110059782615071/1037404343470661713/Documatic_sh6hrz.gif

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
