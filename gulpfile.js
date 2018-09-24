var gulp = require('gulp');
var webdriver = require('gulp-webdriver');
gulp.task('test', function() {
    return gulp.src('wdio.conf.js').pipe(webdriver({
        waitforTimeout: 10000
    }));
});
