## Description

e2e/UI automation with WebdriverIO for new AC Superstars.  
Code is written in Javascript using Jasmine as BDD.

## Application Stack

- To run automation project, you will need [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

- [WebdriverIO](https://github.com/webdriverio/webdriverio) - install globally to be able to use wdio test runner
  
- [Selenium Server](http://www.seleniumhq.org/download/) is just needed if webdriverIO was not installed globally.  
  [Selenium GitHub repo](https://github.com/vvo/selenium-standalone),  
  [Selenium NPM repo](https://www.npmjs.com/package/selenium-standalone)

**BDD report**

- `npm install wdio-spec-reporter --save-dev`

## Test data:

Test data are settled on environment virables
- For user and password, set:  
  `USEREMAIL` and `USERPWD` for AC user  
  `NONUSEREMAIL` and `NONUSERPWD` for non AC user  
- For environment addresses set:  
`BASEURL_S` for staging env  
`BASEURL_H` for heroku env

**PS**: grab these values with Ralfi or Victor Fenner

## CI - Jenkins info

- install junit `npm install --save-dev wdio-junit-reporter`
- define `junit` as the test reporter
- make sure to save the `xunit` results at a place where Jenkins can pick them up
Further info [here](http://webdriver.io/guide/testrunner/jenkins.html)

### Troubleshooting

- if gulp does not work, try `npm install --global gulp-cli`   

**this doc is been updated as needed**
