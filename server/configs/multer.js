import multer from "multer";
import fs from "fs";

const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${uniqueSuffix}-${file.originalname}`)
    }
})

export const upload = multer({ storage });