import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "@material-ui/core/Button";
import request from "superagent"; // TODO probably replace with axios

const CLOUDINARY_UPLOAD_PRESET = "ylgmpdvo";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/irevdev/upload";

interface Props {
  onImageUpload: (image: { previewUrl: string}) => void;
}

export default function ImageUploader({ onImageUpload }: Props) {
  const [uploadedFileUrl, setUploadedFileUrl] = useState('')
  console.log(uploadedFileUrl)
  function handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        // TODO send to DB. 
        onImageUpload({previewUrl: response.body.secure_url})
      }
    });
  }
  // Drag and Drop
  const onDrop = useCallback(acceptedFiles => {
    handleImageUpload(acceptedFiles[0])
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="w-full" {...getRootProps()}>
      <input {...getInputProps()} />
      <Button variant="outlined">Upload</Button>
      {!!isDragActive && (
        <div className="mt-3 text-gray-200 border-dashed border border-gray-200 py-8 text-center rounded-lg w-full">
          Drop files here ...
        </div>
      )}
    </div>
  );
}
