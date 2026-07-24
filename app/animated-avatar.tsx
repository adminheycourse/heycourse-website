"use client";

import Image from "next/image";
import type { SyntheticEvent } from "react";

const LOOP_SECONDS = 5;

export function AnimatedAvatar() {
  const syncLoopDuration = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;

    if (Number.isFinite(video.duration) && video.duration > 0) {
      video.playbackRate = video.duration / LOOP_SECONDS;
    }
  };

  return (
    <>
      <Image
        className="avatar-person avatar-person-fallback"
        src="/heycourse-avatar-alma.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 720px) 210px, 230px"
      />
      <video
        className="avatar-person avatar-person-video"
        poster="/heycourse-avatar-alma.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onLoadedMetadata={syncLoopDuration}
      >
        <source
          src="/heycourse-avatar-alma-loop.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
