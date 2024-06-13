import { useState } from "react";
import Image from "next/image";

const LoadVideoPlayer = ({
  thumbnailUrl,
  videoType,
  videoUrl,
  altText,
  showVideoProp = false,
}) => {
  const [showVideo, setShowVideo] = useState(showVideoProp);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="w-full bg-gray-900 rounded-lg">
      {!showVideo && (
        <div onClick={handleClick} className="cursor-pointer">
          <Image
            src={thumbnailUrl}
            alt={altText}
            width={1920}
            height={1080}
            layout="responsive"
            className="object-contain rounded-lg"
          />
        </div>
      )}
      {showVideo && videoType === "vimeo" && (
        <iframe
          className="w-full aspect-[16/9] rounded-lg shadow-xl"
          src={videoUrl}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title={altText}
        ></iframe>
      )}
      {showVideo && videoType === "youtube" && (
        <iframe
          className="w-full aspect-[16/9] rounded-lg"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default LoadVideoPlayer;
