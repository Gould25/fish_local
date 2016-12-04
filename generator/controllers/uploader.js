/* Process image files for uploading */

var fs = require('fs');
var uuid = require('node-uuid');

/* 
 * "Class" to handle uploads
 */
var Uploader = new function() { }

/*
 * Parses the extension of a given path
 * pre: path is the file name to be parsed
 * post: returns a dot three extension (i.e .png) or an empty string 
 *    if none can be parsed
 */
uploader.parse_extension = function(path) {    
// Regex to get extension courtesy of Stack Overflow
  var regex = /\.(?=[^.]*$).*/;
    
  // File extension if we can parse it
  var ext = regex.exec(path);

  // Return the extension if we parsed it otherwise return empty string
  return ext != null ? ext[0] : '';
}

/*
 * Uploads a file to the file system from the request object
 * pre: 
 *    file: file to upload from request (req.files), should be a valid
 *    path: directory in file system where the upload should be stored
 * post: returns full path after upload
 */
uploader.upload = function(file, path) {
  // random id to ensure uniqueness
  var id = uuid.v4();
    
  // filename extension
  var ext = parse_extension(file.path);
    
  // place to write file
  var path = __dirname + path + id + ext;

  // Read data from file upload
  fs.readFile(file.path, function(err, data) {
    if (err)
      throw err;

    // Write data to new path 
    fs.writeFile(path, data, function (err) {
      throw err;
    });
  });
  return path;
}

/*
 * Uploads a fish image to the file system from the request object
 * pre: 
 *    file: file to upload from request (req.files), should be a valid 
 * post: returns full path after upload
 */
uploader.upload_fish = function(file) {
  return this.upload(file, '/images/fish_uploads/');
}

module.exports = uploader;