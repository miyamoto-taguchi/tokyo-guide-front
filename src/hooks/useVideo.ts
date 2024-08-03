"use client";
import { useEffect, useRef, useState } from "react";

export type VideoControls = {
  play: () => void;
  pause: () => void;
  fastPlay: () => void;
};

/**
 * ビデオ再生に関するカスタムフック
 */
export const useVideo = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoElement = useRef<HTMLVideoElement>(null);
  const video = videoElement.current;

  /**
   * 標準の再生倍率
   */
  const defaultPlaybackRate = 1;

  /**
   * 最初のロード後の関数
   */
  const handleLoadedData = () => {
    if (!video) return;
    setDuration(video.duration);
  };

  /**
   * 再生する関数
   */
  const play = () => {
    if (!video) return;
    video.playbackRate = defaultPlaybackRate;
    video.play();
    setIsPlay(true);
  };

  /**
   * 停止する関数
   */
  const pause = () => {
    if (!video) return;
    video.pause();
    setIsPlay(false);
  };

  /**
   * 早送り
   */
  const fastPlay = () => {
    if (!video) return;
    video.playbackRate = 2;
    video.play();
    setIsPlay(true);
  };

  /**
   * 再生時間が更新された時の関数
   */
  const handleTimeUpdate = () => {
    if (!video) return;
    setCurrentTime(video.currentTime);
  };

  const videoControls = {
    play: play,
    pause: pause,
    fastPlay: fastPlay,
  };

  return {
    videoElement,
    videoControls,
    isPlay,
    currentTime,
    duration,
    handleTimeUpdate,
    handleLoadedData,
  };
};
