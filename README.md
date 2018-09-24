## Description

Code is written in Javascript using Jasmine as BDD.

## Application Stack

- To run automation project, you will need [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

- [WebdriverIO](https://github.com/webdriverio/webdriverio) - install globally to be able to use wdio test runner
- [Selenium Server](http://www.seleniumhq.org/download/) is just needed if webdriverIO was not installed globally.  
-  [Selenium GitHub repo](https://github.com/vvo/selenium-standalone),  
-  [Selenium NPM repo](https://www.npmjs.com/package/selenium-standalone)
- After installing some dependencis manually, run 'npm install'

**BDD report**

- `npm install wdio-spec-reporter --save-dev`

### Troubleshooting

- if gulp does not work, try `npm install --global gulp-cli`   

**this doc is been updated as needed**

### Running

- Use: gulp test
