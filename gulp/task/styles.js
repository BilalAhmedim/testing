 var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');


gulp.task('styles',function(){
  return gulp.src('./app/assets/style/style.css')
    .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
    .on('error',function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/style/'))
});