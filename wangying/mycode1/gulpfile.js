//定义 依赖项
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    less = require('gulp-less'),
    coffee = require('gulp-coffee');

//定义 webserver 任务
gulp.task('webserver',function() {
	connect.server({
		livereload:true,
        root: ['.', '.tmp']
	});
});

//定义 livereload 任务
gulp.task('livereload',function() {
	gulp.src(['styles/*.less','scripts/*.js'])
	    .pipe(watch())
	    .pipe(connect.reload());
});

//定义 less 任务
gulp.task('less',function() {
	gulp.src('styles/main.less')
	    .pipe(less())
	    .pipe(gulp.dest('styles/css'));
});

//定义 coffee 任务
gulp.task('coffee', function() {
  gulp.src('scripts/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('scripts'));
});

//定义 watch 任务
gulp.task('watch',function() {
	gulp.watch('styles/*.less',['less']);
	gulp.watch('styles/*.coffee',['coffee']);
});

//定义默认任务
gulp.task('default',['webserver','livereload','less','coffee','watch']);