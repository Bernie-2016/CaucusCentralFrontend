var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    webpack = require('gulp-webpack'),
    uglify = require('gulp-uglify');

gulp.task('styles', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(concat('production.min.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('scripts', function() {
  return gulp.src('js/**/*.js')
    .pipe(webpack({
      module: {
        loaders: [
          {
            exclude: /node_modules/,
            loader: 'babel',
            test: /\.js$/,
          }
        ]
      }
    }))
    .pipe(uglify())
    .pipe(concat('production.min.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['styles', 'scripts']);
