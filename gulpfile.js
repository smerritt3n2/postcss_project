var gulp = require('gulp');
var postcss = require('gulp-postcss');

// Plugins
var cssnext = require('postcss-cssnext');
var pxtorem = require('postcss-pxtorem');
var cssnano = require('cssnano');

gulp.task('css', function() {
    var processors = [
        cssnext({ browsers: ['last 2 versions', 'Firefox < 27'] }),
        pxtorem({
            propWhiteList: [],
            mediaQuery: true
        }),
        cssnano
    ];

    return gulp.src('./src/*.css')
        .pipe( postcss(processors) )
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', function() {
    gulp.watch('src/*.css', ['css']);
});
