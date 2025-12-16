import React from 'react';

interface MediaProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export function Media({ src, alt = '', className = '', style = {}, videoProps = {}, imgProps = {} }: MediaProps) {
  const isVideo = /\.(mp4|webm|ogg|avi|mov)$/i.test(src);

  if (isVideo) {
    return (
      <video
        src={src}
        className={className}
        style={style}
        autoPlay
        muted
        loop
        playsInline
        {...videoProps}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...imgProps}
    />
  );
}
