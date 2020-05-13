let gulp = require("gulp");
let htmlmin =require("gulp-htmlmin");
let uglify = require("gulp-uglify");
let babel = require("gulp-babel");
let sass = require("gulp-sass")

gulp.task("default",async ()=>{
    gulp.watch("./src/**/*",async ()=>{
        gulp.src("./src/**/*")
        // .pipe(htmlmin({
        //     collapseWhitespace:true
        // }))
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\nz2001taobao"))
    });

    gulp.watch(["./src/js/*.js","!./src/jquery-3.2.1.min.js"],async ()=>{
        gulp.src("./src/js/*.js")
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\nz2001taobao\\js"));
    })

    gulp.watch("./src/php/**/*",async ()=>{
        gulp.src("./src/php/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\nz2001taobao\\php"))
    });

    gulp.watch("./src/scss/*.scss",async ()=>{
        gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\nz2001taobao\\css"))
    })
})


