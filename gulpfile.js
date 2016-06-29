'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var rigger = require('gulp-rigger');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

var px2rem = require('gulp-px2rem');
var px2remOptions = {replace: false};
var postCssOptions = {map: true};

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var path = {
  build: {
    html: './dist',
    js: './dist/js',
    style: './dist/styles'
  },
  src: {
    html: './dev/html/*.html',
    js: './dev/js/*.js',
    style: './dev/scss/*.scss'
  },
  watch: {
    html: './dev/html/**/*.html',
    js: './dev/js/*.js',
    style: './dev/scss/*.scss'
  }
};

gulp.task('rem', function() {
    gulp.src('./dist/assets/css/**/*.css')
        .pipe(px2rem(px2remOptions, postCssOptions))
        .pipe(gulp.dest('css'));
});

// Browser Sync
var config = {
  server: {
    baseDir: 'dist'
  },
  tunnel: false,
  host: 'localhost',
  port: 9000,
  logPrefix: 'SmiteVils'
};

gulp.task('webserver', function() {
  browserSync(config);
});

// HTML
gulp.task('html', function() {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});

gulp.task('sass', function () {
  gulp.src(path.src.style)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(path.build.style))
    .pipe(reload({stream: true}));
});

gulp.task('notify', function () {
	gulp.src(path.src.style)
	.pipe(notify("Откомпилил и собрал!"));
});

// Watch
gulp.task('watch', function(cb){
    gulp.watch('./dev/scss/**/*.scss', ['sass']);
    gulp.watch('./dev/html/**/*.html', ['html']);
    //gulp.watch('./**/*', ['notify']);
});

gulp.task('default', ['sass', 'html', 'webserver', 'watch']);
