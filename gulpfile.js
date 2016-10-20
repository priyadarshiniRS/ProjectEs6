var gulp = require('gulp');
const babel = require('gulp-babel');
var babelify = require('babelify');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');

var plugins = require('gulp-load-plugins')();
gulp.task('html', function() {
	return gulp.src('app/**/*.html')
		.pipe(gulp.dest('build/'))
		.pipe(plugins.connect.reload());
});
gulp.task('css', function() {
	return gulp.src('app/**/*.css')
		.pipe(gulp.dest('build/'))
		.pipe(plugins.connect.reload());
});


gulp.task('libs', function() {
	return gulp.src(['./node_modules/bootstrap/js/tests/vendor/jquery.min.js','./node_modules/angular/angular.min.js','./node_modules/angular-route/angular-route.min.js','./node_modules/ngstorage/ngStorage.min.js','./node_modules/bootstrap/dist/js/bootstrap.min.js','./node_modules/bootstrap/dist/css/bootstrap.min.css'])
		.pipe(gulp.dest('build/libs/'))
		.pipe(plugins.connect.reload());
});

gulp.task('jshint', function() {
	return gulp.src('app/**/*.js')
		.pipe(plugins.jshint({
			esnext: true
		}))
		.pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', ['jshint'], function() {

var sources= browserify({
		entries: 'app/app.js',
	})
	.transform(babelify.configure({

		presets: ["es2015"]
	}))

	return sources.bundle()
		.pipe(vinylSourceStream('app.min.js'))
		.pipe(vinylBuffer())
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.uglify())
		.pipe(gulp.dest('build/'))
		.pipe(plugins.connect.reload());

});

gulp.task('serve', ['build', 'watch'], function() {
	plugins.connect.server({
		root: 'build/',
		port: 4242,
		livereload: true,
		fallback: 'build/index.html'
	});
});

gulp.task('watch', function() {
	gulp.watch('app/libs/**', ['libs']);
	gulp.watch('app/**/*.html', ['html']);
	gulp.watch('app/**/*.js', ['scripts']);
		gulp.watch('app/**/*.css', ['css']);
})

gulp.task('build', ['scripts', 'html', 'libs' ,'css']);
gulp.task('default', ['serve']);
