var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        pcss: {
          template: './gulp/templates/sprites.pcss'
        }
      }
    }
  }
}

gulp.task('beginClean', function(){
  return del(['./app/temp/sprites','./app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function(){
  return gulp.src('./app/assets/images/icons/**/*.svg')
  .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprites'));
});

gulp.task('copySpriteGraphic', ['createSprite'] ,function(){
  return gulp.src('./app/temp/sprites/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpritesCss', ['createSprite'] , function(){
  return gulp.src('./app/temp/sprites/css/*.pcss')
  .pipe(rename('_sprites.pcss'))
  .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpritesCss'], function(){
  return del('./app/temp/sprites');
});

gulp.task('icons',['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpritesCss', 'endClean']);