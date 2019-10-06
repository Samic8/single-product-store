import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "@material-ui/core/Button";
import axios from 'axios'

const CLOUDINARY_UPLOAD_PRESET = "ylgmpdvo";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/irevdev/upload";

interface Props {
  onImageUpload: (image: { cloudinaryPublicId: string}) => void;
}

export default function ImageUploader({ onImageUpload }: Props) {
  async function handleImageUpload(file) {
    const imageData = new FormData();
    imageData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    imageData.append('file', file);
    let upload = axios.post(CLOUDINARY_UPLOAD_URL, imageData)
    try {
      const { data } = await upload
      if (data && data.public_id !== "") {
        onImageUpload({cloudinaryPublicId: data.public_id})
      }
    } catch (e) {
      console.error('ERROR', e)
    }
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
