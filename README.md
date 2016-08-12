# AwesomeLibrary-JavaScript Library 
## Getting Started

Clone the file into your local 
```git clone git@github.com:yaseenagag/AwesomeLibrary-.git```

Install mocha, chai, should
```npm install --save mocha chai chai-as-promised should``

Install babel
```npm install --save-dev babel-core
```npm i --save-dev babel-cli```
```npm install --save babel-cli babel-preset-es2015```
```npm install --save babel-register```
```npm install --save-dev babel-watch```

Include the following script into your package.json file
```"scripts": {
    "build": "babel src -d dist",
    "build:watch": "npm run build -- --watch",
    "test": "mocha --recursive --watch --require babel-register "
  },```

Run the tests




Start Running Your Tests. Enjoy!
```npm run test```

## Description

_Create a library of commonly used JavaScript/Jquery/Lodash/Underscore methods with Documentation and commenting using ES2015, publish the code as a package to NPM.
## Context

_This goal is important in learning JavaScript and understanding how high level developer's write code for others to use and to understand ES2015.  This code will be used by other developers to make their jobs easier. The questions that this project will raise is how do we write packages that are easy to understand out of the box and simple to use right away. how to publish a package to NPM?._

## Specifications

_List of specifications (specs) for the completed goal. These are declarative sentences (statements) describing some quality or behavior of the final product._

### Required

- [x] Write 30 functions from scratch based on the UnderscoreJS library in ES6
- [x] Create a ReadMe that describes each method and provides an example of use. 
- [x] Write tests for those methods described.
- [x] Have fun!!!
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT

## Stack

- Mocha
- Chai
- Express.js
- Node.js
- Babel Watch
- ES6

