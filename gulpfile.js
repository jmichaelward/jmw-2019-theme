const gulp         = require( 'gulp' );
const autoprefixer = require( 'gulp-autoprefixer' );
const sass         = require( 'gulp-sass' );
const webpack      = require( 'webpack-stream' );

gulp.task( 'js', () => {
    return gulp.src( 'assets/src/js/app.js' )
        .pipe( webpack( require( './webpack.config.js' ) ) )
        .pipe( gulp.dest( 'assets/dist/js' ) );
} );

gulp.task( 'sass', () => {
    return gulp.src( 'assets/src/scss/**/*.scss' )
        .pipe( sass() )
        .pipe( gulp.dest( 'assets/dist/css' ) )
        .pipe(
            autoprefixer(
                {
                    browsers: [ 'last 4 versions', '> 5%', 'Firefox ESR' ]
                }
            )
        );
} );

gulp.task( 'default', [ 'sass', 'js' ] );
