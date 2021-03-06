import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import del from 'del';
import concat from 'gulp-concat';
import terse from 'gulp-terser';
import browSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import eslint from 'gulp-eslint';
import fileinclude from 'gulp-file-include';

const sass = gulpSass(dartSass);
const terser = terse.default;
const browserSync = browSync.create();

// Paths
const paths = {
  html: {
    src: {
      include: 'src/common.blocks/**/*.html',
      index: 'src/common.blocks/index.html',
  }
  },
  styles: {
    folder: 'src/styles/',
    src: {
      all: 'src/styles/**/*.scss',
      full: 'src/styles/scss/style.scss',
      min: 'src/styles/style.min.css',
    },
  },
  scripts: {
    folder: 'src/js/',
    src: {
      all: 'src/js/**/*.js',
      full: 'src/js/script.js',
      min: 'src/js/script.min.js',
    },
  },
  images: {
    src: 'src/images/**/*',
  },
  fonts: {
    src: 'src/fonts/**/*',
  },
};

// Browsersync
export const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: 'src',
    },
    notify: false,
    ui: false,
    browser: 'google chrome',
  });
};

// Scripts
export const scripts = () => {
  return gulp
    .src(paths.scripts.src.full)
    .pipe(concat('script.min.js'))
    .pipe(eslint('.eslintrc.json'))
    .pipe(eslint.format())
    .pipe(terser())
    .pipe(gulp.dest(paths.scripts.folder))
    .pipe(browserSync.stream());
};

// Styles
export const styles = () => {
  return gulp
    .src(paths.styles.src.full)
    .pipe(
      sass({
        outputStyle: 'compressed',
      })
    )
    .pipe(
      autoprefixer({
        grid: true,
      })
    )
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(paths.styles.folder))
    .pipe(browserSync.stream());
};

// HTML @@include
export const fileInclude = () => {
  return gulp
    .src([paths.html.src.index])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./src'));
};

// Clean dist folder
export const clean = () => {
  return del('dist');
};

// Clean common.blocks folder
export const cleanCommonBlocks = () => {
  return del('dist/common.blocks');
};

// Watching
export const watching = () => {
  gulp.watch([paths.html.src.include], fileInclude);
  gulp.watch([paths.styles.src.all, `!${paths.styles.src.min}`], styles);
  gulp.watch([paths.scripts.src.all, `!${paths.scripts.src.min}`], scripts);
  gulp.watch(paths.html.src.include).on('change', browserSync.reload);
};

// Build
export const build = () => {
  return gulp
    .src(
      [
        paths.styles.src.min,
        paths.images.src,
        paths.fonts.src,
        paths.scripts.src.min,
      ],
      {
        base: 'src',
      }
    )
    .pipe(gulp.dest('dist'));
};

// Default
const parallel = gulp.parallel(fileInclude, styles, scripts, browsersync, watching);
export default parallel;
