var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('default',function(){
  console.log("Hooray - you created a gulp task");
});

gulp.task('html',function(){
  console.log("Hey Called me iam html task how can i help you");
});

gulp.task('styles',function(){
  return gulp.src('./app/assets/style/style.css')
    .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/style/'))
});

gulp.task('watch',function(){

  watch('./app/index.html',function(){
    gulp.start('html');
  });

  watch('./app/assets/style/**/*.css',function(){
    gulp.start('styles');
  });

})