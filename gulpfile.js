var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  console.log("Imagine Sass or PostCSS tasks running here.");
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    try{
      gulp.start('html');
    }catch(err){
      console.log(err);
    }

  });
});



// gulp.task('watch', gulp.parallel('watch', function(done) {
//
//   gulp.start('html');
//
//   done();
//
// }));
