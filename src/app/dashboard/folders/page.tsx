"use client";
import React, { useRef, useState } from "react";

const FolderUploaders = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const viewerRef = useRef<HTMLDivElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      // @lunit/insight-viewerはこのURLからDICOMファイルを読み込んで表示する
      setFileUrl(`wadouri:${fileUrl}`);
    }
  };

  return (
    <div>
      <input type="file" accept=".dcm" onChange={handleFileChange} />
      <h1>file upload</h1>
    </div>
  );
};

export default FolderUploaders;
