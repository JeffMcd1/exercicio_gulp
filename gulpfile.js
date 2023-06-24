const gulp = require('gulp');
const sourcemaps = require ('gulp-sourcemaps');
const unglify = require ('gulp-uglify');
const imagemin = require ('gulp-imagemin');

function comprimeImagens (){
    return gulp.src('./souce/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./bild/images'))
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(unglify()) 
    .pipe( gulp.dest('./bild/scripts'))
}

function funcaoPadrao() {
    console.log("Executando via Gulp");
}
const sass = require('gulp-sass') (require ('sass'));
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe (sourcemaps.init ())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./biuld/styles'))
}

exports.default = funcaoPadrao;

exports.sass = compilaSass;
exports.default = function (){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./souce/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}

exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;