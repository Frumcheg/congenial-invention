const gulp        = require('gulp');
const browserSync = require('browser-sync').create();

/* PostCSS Stuff */

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const rucksack = require('gulp-rucksack');
const cssMixins = require('postcss-mixins');
const simpleVars = require('postcss-simple-vars');
const cssNested = require('postcss-nested');
const svgstore = require('gulp-svgstore');
const svgo = require('gulp-svgo');

const cssConfig = [
  atImport(),
  cssMixins(),
  simpleVars(),
  cssNested()
];

/* End PostCSS Stuff */

gulp.task('serve', ['styles'], () => {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('src/css/**/*.css', ['styles']);
  gulp.watch('pages/*.html').on('change', browserSync.reload);
});

gulp.task('styles', () =>
    gulp.src('src/css/main.css')
      .pipe(postcss(cssConfig))
      .pipe(rucksack({
        autoprefixer: true
      }))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream())
);

gulp.task('svg', () =>
  gulp.src('src/svg/*.svg')
    .pipe(svgo())
    .pipe(svgstore())
    .pipe(gulp.dest('dist/img'))
);