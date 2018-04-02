 var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins'),
rename = require('gulp-rename');


gulp.task('styles',function(){
  return gulp.src('./app/assets/styles/style.pcss')
    .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
    .on('error',function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(gulp.dest('./app/temp/styles/'))
});