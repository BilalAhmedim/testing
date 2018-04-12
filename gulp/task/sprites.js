var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite');

var config = {
  mode: {
    css: {
      render: {
        pcss: {
          template: './gulp/templates/sprites.pcss'
        }
      }
    }
  }
}

gulp.task('createSprite', function(){
  return gulp.src('./app/assets/images/icons/**/*.svg')
  .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprites'));
});