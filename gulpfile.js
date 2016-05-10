var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require("gulp-rename");
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var rsync       = require('gulp-rsync');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
 gulp.task('sass', function () {
     return gulp.src('_scss/main.scss')
         .pipe(sass({
             includePaths: ['scss'],
             onError: browserSync.notify
         }))
         .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
         .pipe(gulp.dest('_site/css')).pipe(gulp.dest('css'))
         .pipe(browserSync.reload({stream:true}))
 });

/**
 * Concatenate & Minify JS
 */
 gulp.task('js', function() {
     return gulp.src(['js/*.js'])
         //.pipe(concat('main.min.js'))
         //.pipe(gulp.dest('_site/js'))
         //.pipe(rename('main.min.js'))
         //.pipe(uglify())
         //.pipe(gulp.dest('_site/js')).pipe(gulp.dest('js'));
 });

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_scss/*.scss', '_scss/**/*.scss'], ['sass']);
    gulp.watch('js/*.js', ['js']);
    gulp.watch(['index.html', 'author-*.md', 'about.md', 'contact.md', '_includes/*.html', '_layouts/*.html', '_posts/*', 'css/*.scss', 'js/*.js'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

/**
 * Once you've tested your project, you can deploy the files using gulp deploy:production
 * Note: setup ssh keys to avoid having to enter the ssh pass each time. See the README for info.
 */
gulp.task('deploy:production', ['jekyll-build'], function() {
    return gulp.src('**/*', {cwd: '_site'})
    .pipe(rsync({
        root: '_site',
        username: '',
        hostname: '',
        destination: '',
        incremental: true,
        recursive: true,
        compress: true,
        times: true,
        progress: true
    }));
});
