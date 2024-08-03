import React, { useEffect } from "react";
import { PrimaryButton } from "../atoms/Button";
import { VideoControls } from "@/hooks/useVideo";
import { formatTime } from "@/functions/timeConvert";

type VideoPlayerProps = {
  src: string;
  videoElement: React.RefObject<HTMLVideoElement>;
  videoControls: VideoControls;
  isPlay: boolean;
  currentTime: number;
  duration: number;
  handleTimeUpdate: () => void;
  handleLoadedData: () => void;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  videoElement,
  videoControls,
  isPlay,
  currentTime,
  duration,
  handleTimeUpdate,
  handleLoadedData,
}) => {
  const { play, pause, fastPlay } = videoControls;

  return (
    <div>
      <video
        src={src}
        ref={videoElement}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
        onLoadedMetadata={handleLoadedData}
      />
      <p>
        {formatTime(currentTime)}/{formatTime(duration)}
      </p>
      {isPlay ? (
        <PrimaryButton handleClick={pause}>停止</PrimaryButton>
      ) : (
        <PrimaryButton handleClick={play}>再生</PrimaryButton>
      )}
      <PrimaryButton handleClick={fastPlay}>早送り</PrimaryButton>
    </div>
  );
};

export default VideoPlayer;
