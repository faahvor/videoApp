import React from "react";

const ThumbNail = ({ video }) => {
  return (
    <video
      className="h-20 w-36 rounded-lg md:rounded-xl  object-cover"
      src={video.url}
      type="video/mp4"
      controls
      autoPlay
      loop
    ></video>
  );
};
export default ThumbNail;
