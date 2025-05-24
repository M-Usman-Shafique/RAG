import express from "express";
import cors from "cors";
import { upload } from "./configs/multer.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => res.status(200).send(`Express server is listening at port ${port}`));

app.post('/api/upload', upload.single('pdf'), function (req, res) {
    console.log(req.file, req.body)
    return res.status(200).json({ message: 'File uploaded successfully' });
 });

app.listen(port, () => console.warn(`Server is listening at http://localhost:${port}`));