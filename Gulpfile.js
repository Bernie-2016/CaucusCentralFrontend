fs   = require('fs');
gulp = require('gulp');
s3   = require('gulp-s3-upload')(JSON.parse(fs.readFileSync('aws_credentials.json')));

gulp.task('s3', function() {
  gulp.src('dist/**/*').pipe(s3({Bucket: 'caucuscentral.berniesanders.com', ACL: 'public-read'}));
});
