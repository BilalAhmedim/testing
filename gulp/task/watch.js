var gulp = require('gulp'),
watch = require('gulp-watch'),
browsersync = require('browser-sync').create();


gulp.task('watch',function(){
  
  notify: false,
  browsersync.init({
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html',function(){
    browsersync.reload();
  });

  watch('./app/assets/styles/**/*.pcss',function(){
    gulp.start('cssInject');
  });

});


gulp.task('cssInject',['styles'],function(){
  return gulp.src('./app/temp/styles/style.css')
    .pipe(browsersync.stream());
});