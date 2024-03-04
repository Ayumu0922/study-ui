import Form from "@/components/Form";
import React from "react";

const Page = () => {
  return (
    <div className="flex  h-screen w-full">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="relative hidden lg:flex h-full items-center justify-center bg-gray-200 w-full lg:w-1/2">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="./background_movie.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10" />
        <div className="z-10">Content on top of the video and overlay</div>
      </div>
    </div>
  );
};

export default Page;
