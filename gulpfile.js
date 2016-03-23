/*eslint-env node */
var gulp=require('gulp');
var babel=require('gulp-babel');
var sourcemaps=require('gulp-sourcemaps');
var rename=require('gulp-rename');
var path=require('path');
var gutil =require('gulp-util');


gulp.task('server',function() {
  return stdGulpTrans('src/server','dst/server');
});

gulp.task('common',function(){
  return stdGulpTrans('src/common','dst/common');
});

gulp.task('all',['common','server'],function(){
  gutil.log('all...............');
  webWebpackRun();
  webCpHTML();
});

gulp.task('web',function(){
  webWebpackRun();
  webCpHTML();
});

gulp.task('web-w',function(){
  webWebpackWatch();
});

// ........functions .......
function stdGulpTrans(src, dst) {
  var sourceRoot = path.join(__dirname,src);
  var srcPath = [src+'/**/*.js'];
  return gulp
    .src(srcPath)
    .pipe(sourcemaps.init())
    .pipe(babel({
      'presets': ['es2015','stage-0'],
      'plugins': ['transform-flow-strip-types']
    }) )
    .pipe(sourcemaps.write('.',{
      includeContent: true, sourceRoot: sourceRoot,debug:true
    }))
    .pipe(gulp.dest(dst));
}

var webpack=require('webpack');
var webpackConfig = require('./webpack.config.js');
var webCompiler=webpack(webpackConfig);

function webWebpackRun(){
  gutil.log('[webpack]', 'compile client ...');
  webCompiler.run(function (err,stats) {
    if(err) throw new gutil.PluginError('[webpack]', err);
    gutil.log('[webpack]', stats.toString());
  });
}

function webWebpackWatch(){
  gutil.log('watching client ~~~~~~~~');
  webCompiler.watch({
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
  },function(err,stats){
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString());
  });
}

function webCpHTML(){
  gutil.log('[HTML]', 'copy html ...');
  gulp.src('src/client/**/*.html')
  .pipe(gulp.dest('dst/client/'));
}
