const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const nunjucks     = require('gulp-nunjucks');
const del          = require('del');
const sourcemaps   = require('gulp-sourcemaps');
const openInEditor = require('open-in-editor');

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

// const editor = openInEditor.configure({
//   editor: 'code'
// }, err => {
//   console.error(`Something went wrong: ${err}`);
// });

gulp.task('html', () =>
  gulp.src('src/html/[^_]*.html')
    .pipe(nunjucks.compile())
    .pipe(gulp.dest('dist/pages'))
)

gulp.task('serve', ['clean', 'styles', 'html'], () => {

  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  });

  gulp.watch('src/css/**/*.css', ['styles']);
  gulp.watch('src/html/**/*.html', ['html']);
  gulp.watch('dist/pages/**/*.html', ['reload']);
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

gulp.task('reload', ['html'], done => {
  browserSync.reload();
  done();
});

gulp.task('clean', () =>
  del([
    'dist/pages/**/*',
    'dist/css/**/*'
  ])
);