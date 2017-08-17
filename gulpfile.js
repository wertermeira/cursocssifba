'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');

gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});


gulp.task('serve', function() {
    //1. serve with default settings
    var server = gls.static('src'); //equals to gls.static('public', 3000);
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['src/**/*.css', 'src/*.html'], function (file) {
      server.notify.apply(server, [file]);
    });
    gulp.watch('./app/sass/**/*.scss', ['sass']);
  });
