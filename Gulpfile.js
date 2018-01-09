let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let babel = require('babelify');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let watchify = require('watchify');
let livereload = require('gulp-livereload');

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

  function rebundle() {
    bundle  
      .transform(babel, {presets: ['env']})
      .bundle()
      .on('error', (err) => { console.log(err); this.emit('end') })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./public/js'))
      .pipe(livereload());
  }

  if (watch) {
    bundle.on('update', () => {
      console.log('--> Bundling...');
      rebundle();
    });
  }

  rebundle();
}

gulp.task('build', () => {  return compile(); });

gulp.task('watch', () => {
  livereload.listen();
  return compile(true); 
});

gulp.task('default', ['styles', 'assets', 'build']);