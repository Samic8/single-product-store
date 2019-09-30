import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Button from "@material-ui/core/Button";

interface Props {
  onImageUpload: (image: { previewUrl: string; binaryString: string }) => void;
}

export default function ImageUploader({ onImageUpload }: Props) {
  // Drag and Drop
  const onDrop = useCallback(acceptedFiles => {
    const promise = new Promise<string>((resolve, reject) => {
      // URL
      const reader = new FileReader();
      reader.onabort = () => reject("file reading was aborted");
      reader.onerror = () => reject("file reading has failed");
      reader.onload = () => {
        resolve(reader.result as string);
      };
      acceptedFiles.forEach(file => reader.readAsDataURL(file));
    });

    const promise2 = new Promise<string>((resolve, reject) => {
      // Binary
      const readerBinary = new FileReader();
      readerBinary.onabort = () => reject("file reading was aborted");
      readerBinary.onerror = () => reject("file reading has failed");
      readerBinary.onload = () => {
        resolve(readerBinary.result as string);
      };
      acceptedFiles.forEach(file => readerBinary.readAsBinaryString(file));
    });

    const all = Promise.all([promise, promise2]);

    all.then(([previewUrl, binaryString]) => {
      onImageUpload({ previewUrl, binaryString });
    });
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
