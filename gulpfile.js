var gulp = require('gulp'),
	server = require('gulp-server-livereload'),
	sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
  return sass('app/.scss/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('app/css'));
});

gulp.task('server', function() {
  gulp.src('app')
    .pipe(server({
      port: 8085,
      livereload: true,
      directoryListing: false,
      open: true,
      defaultFile: 'index.html'
    }));
});

gulp.task('watch:sass', function(){
  gulp.watch('app/.scss/*.scss', ['sass'])
});
	
gulp.task('default', function() {
});
