import React from "react";
function Video({
  title,
  width = 500,
  height = "auto",
  src,
  ...rest
}: {
  title: string;
  width: number | "100%";
  height: number | "auto";
  src: string | any;
  class: string | any;
  [key: string]: any;
}) {
  return (
    <video
      className="overflow-hidden rounded-none"
      width={width}
      height={height}
      controls
      {...rest}
    >
      <source
        src={src.match(/^http/) ? src : `/videos/${src}`}
        type="video/mp4"
      />
      {title}
    </video>
  );
}

export default Video;
