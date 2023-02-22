/** @format */

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const webp = require('gulp-webp');
const sourcemaps = require('gulp-sourcemaps');

function compileSass() {
    return gulp
        .src('./scss/**/*.scss')
        .pipe(sourcemaps.init()) // inicializace generování sourcemaps
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.')) // zápis sourcemaps do souboru
        .pipe(gulp.dest('./css'));
}

function generateWebp() {
    return gulp
        .src('./image/**/*.{png,jpg}')
        .pipe(webp())
        .pipe(gulp.dest('./img'));
}

function watchFiles() {
    gulp.watch('./scss/**/*.scss', compileSass);
    gulp.watch('./image/**/*', gulp.series(generateWebp));
}

exports.default = gulp.series(
    compileSass,
    gulp.parallel(generateWebp),
    watchFiles
);
