var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
browsersync = require('browser-sync').create();

gulp.task('default',function(){
  console.log("Hooray - you created a gulp task");
});

gulp.task('styles',function(){
  return gulp.src('./app/assets/style/style.css')
    .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/style/'))
});

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

  watch('./app/assets/style/**/*.css',function(){
    gulp.start('cssInject');
  });

});

gulp.task('cssInject',['styles'],function(){
  return gulp.src('./app/temp/style/style.css')
    .pipe(browsersync.stream());
});