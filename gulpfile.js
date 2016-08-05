var gulp = require('gulp'),
	gulpSass = require('gulp-sass'),
	browserSync = require('browser-sync').create();   

gulp.task('sass',function(){
	gulp.src('css/*.scss')
	.pipe(gulpSass())
	.pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('watchstyle',['sass'],function(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	gulp.watch('./css/*.scss',['sass']);
});

gulp.task('serve',['sass'],function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	gulp.watch('./css/*.scss',['sass']);
	gulp.watch("./*.html").on('change', browserSync.reload);
	gulp.watch("./js/**").on('change', browserSync.reload);
});

gulp.task('default',['serve']);