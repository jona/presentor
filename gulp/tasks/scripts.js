'use strict';

var watchify = require('watchify'),
    browserify = require('browserify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = require('lodash.assign'),
    config = require('../config');

var customOpts = {
  entries: [config.src + 'js/app.jsx'],
  extensions: ['.jsx'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)); 

b.transform("babelify", {presets: ["es2015", "react"]});

gulp.task('scripts:watch', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
  return b.bundle()
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.dest));
}
