const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('./src/sass/**/*.scss')  // This will target all .scss files in the sass directory and its subdirectories
    .pipe(sass())
    .pipe(dest('dist/css'));
}

function watchTask() {
  watch(['./src/sass/**/*.scss'], buildStyles); // This will watch all .scss files
}

exports.default = series(buildStyles, watchTask);
