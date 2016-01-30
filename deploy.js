var s3 = require('s3');

var client = s3.createClient({
  s3Options: require('./aws_credentials.json')
});

var params = {
  localDir: './dist',
  deleteRemoved: true,
  s3Params: {
    ACL: 'public-read',
    Bucket: 'caucuscentral.berniesanders.com'
  }
};

var uploader = client.uploadDir(params);

uploader.on('error', function(err) {
  console.error('Deployment failed:', err.stack);
});

uploader.on('end', function() {
  console.log('Done!');
});
