require('dotenv').config({
  path: ".env." + process.env.NODE_ENV
})
const AWS = require("aws-sdk");
const fs = require("fs");

const aws = {
  accessKeyId: process.env.AWS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  bucket: process.env.AWS_BUCKET_NAME + "/" + process.env.AWS_BUCKET_FOLDER,
  acl: process.env.AWS_ACL,
};

AWS.config.credentials = {
  accessKeyId: aws.accessKeyId,
  secretAccessKey: aws.secretAccessKey,
};
AWS.config.region = "ap-southeast-1";
const s3Client = new AWS.S3();

/**
 * AWS S3 檔案儲存
 */
// export const saveToS3
const saveToS3 = async (tempPath, fileName, mimetype) => {
  return new Promise((resolve, reject) => {
    // 檔案讀取
    fs.readFile(tempPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const params = {
          Bucket: aws.bucket,
          Key: fileName,
          Body: data,
          ACL: aws.acl,
          ContentType: mimetype
        };
        s3Client.upload(params, null, (uploadErr, data) => {
          if (uploadErr) {
            reject(uploadErr);
          } else {
            resolve(data.Location);
          }
        });
      }
    });
  });
}

/**
 * AWS S3 上傳檔案
 */
// export const upload 
const upload = async (tempPath, fileName, mimetype) => {
  let result = null;
  try {
    result = await saveToS3(tempPath, fileName, mimetype);
  } catch (error) {
    result = error;
  } finally {
    // console.dir(result);
  }
  if (result) {
    result = "/" + process.env.AWS_BUCKET_FOLDER + "/" + fileName
  }
  return result
}


/**
 * AWS S3 檔案列表
 */

let allKeys = [];
let count = 1;
const params = {
  Bucket: "s3-bucket-web"
};

// export const getAllKeys = 
const getAllKeys = async () => {
  const response = await s3Client.listObjectsV2(params).promise();
  response.Contents.forEach((content) => {
    allKeys.push({
      key: content.Key,
    });
    console.log(`[${count++}] Key: ${content.Key}`)
  });

  if (response.IsTruncated) {
    params.ContinuationToken = response.NextContinuationToken;
    return getAllKeys();
  }
  return allKeys;
}

module.exports = { getAllKeys, upload }