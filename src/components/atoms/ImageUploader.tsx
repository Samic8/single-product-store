import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { reject } from "any-promise";

interface Props {
  onImageUpload: (image: { previewUrl: string; binaryString: string }) => void;
}

export default function ImageUploader({ onImageUpload }: Props) {
  // Drag and Drop
  const onDrop = useCallback(acceptedFiles => {
    const promise = new Promise<string>(resolve => {
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
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
