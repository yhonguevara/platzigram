let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let babel = require('babelify');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let watchify = require('watchify');

gulp.task('styles', () => {
  gulp
    .src('./sass/index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('assets', () => {
  gulp
    .src('assets/**/*')
    .pipe(gulp.dest('public'));
});

function compile(watch) {
  let bundle = watchify(browserify('./src/index.js'));

  if (watch) {
    bundle.on('update', () => {
      console.log();
    });
  }
}

gulp.task('scripts',() => {
  browserify('./src/index.js')
    .transform(babel, {presets: ['env']})
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('build', () => {

});

gulp.task('watch', () => {

});

gulp.task('default', ['styles', 'assets', 'scripts']);