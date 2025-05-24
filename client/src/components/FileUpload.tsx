"use client"
import { FaFileArrowUp } from 'react-icons/fa6';
import { FileUploader } from "react-drag-drop-files";
import axios from 'axios';
import { useState } from 'react';

const fileTypes = ["PDF"];
const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default function FileUpload() {

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handlePdfUpload = async (file: File | null) => {
    if (!file) return;

    setUploading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      await axios.post(`${apiURL}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);
    } catch (err) {
      console.warn(err)
      setError("Failed to upload file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full">
        <FileUploader handleChange={handlePdfUpload} name="file" types={fileTypes} />
      {/* <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-400 hover:bg-gray-750 transition-all duration-300 cursor-pointer group">
        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 bg-white/10 rounded-full transition-colors duration-300">
            <FaFileArrowUp className="text-3xl text-gray-300 group-hover:text-white" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
              Upload Files
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Drag and drop files here or click to browse
            </p>
          </div>
          
          <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
            PDF, DOC, DOCX, TXT
          </div>
        </div>
      </div> */}

      <div className="mt-1 text-sm">
        {uploading && <p className="text-blue-500">Uploading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">File uploaded successfully!</p>}
      </div>
    </div>
  );
}