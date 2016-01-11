import cloudinary from './config.js';

exports.upload = (file) => {
  return new Promise((resolve, reject)=>{
    cloudinary.uploader.v2.upload(file, {}, function (data) {
      debugger;
      if (cloudinary) {
        resolve(data);
      } else {
        reject(':(');
      }
    });
  });
};

exports.uploadStream = () => {
  return new Promise((resolve, reject)=>{
    if (cloudinary) {
      resolve('hello');
    } else {
      reject(':(');
    }
  });
};
