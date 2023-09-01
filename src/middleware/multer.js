const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/users');
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    const fileName = file.originalname;
    cb(null, `${timestamp}-${fileName}`);
  },
});

const upload = multer({storage: storage, limits: {fileSize: 2 * 1000 * 1000}});

module.exports = upload;
