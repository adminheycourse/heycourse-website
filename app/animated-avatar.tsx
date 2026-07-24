"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import type { SyntheticEvent } from "react";

const LOOP_SECONDS = 5;

export function AnimatedAvatar() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const videoSource = isEnglish
    ? "/heycourse-avatar-sophia-en-loop.mp4"
    : "/heycourse-avatar-sophia-loop.mp4";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const restoreSilentLoop = useCallback((video: HTMLVideoElement) => {
    video.muted = true;
    video.loop = true;
    video.currentTime = 0;

    if (Number.isFinite(video.duration) && video.duration > 0) {
      video.playbackRate = video.duration / LOOP_SECONDS;
    }

    setIsSpeaking(false);
    void video.play().catch(() => undefined);
  }, []);

  const syncLoopDuration = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;

    if (Number.isFinite(video.duration) && video.duration > 0) {
      video.playbackRate = video.duration / LOOP_SECONDS;
    }
  };

  const toggleIntroduction = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isSpeaking) {
      restoreSilentLoop(video);
      return;
    }

    video.loop = false;
    video.muted = false;
    video.playbackRate = 1;
    video.currentTime = 0;
    setIsSpeaking(true);
    void video.play().catch(() => restoreSilentLoop(video));
  };

  return (
    <>
      <div className="avatar-video-frame">
        <Image
          className="avatar-person avatar-person-fallback"
          src="/heycourse-avatar-sophia.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 720px) 210px, 230px"
        />
        <video
          key={videoSource}
          ref={videoRef}
          className="avatar-person avatar-person-video"
          poster="/heycourse-avatar-sophia.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedMetadata={syncLoopDuration}
          onEnded={(event) => restoreSilentLoop(event.currentTarget)}
        >
          <source
            src={videoSource}
            type="video/mp4"
          />
        </video>
        <span className="avatar-camera-light" aria-hidden="true" />
      </div>
      <div className="avatar-caption">
        <i className="pulse-dot" />
        <span>
          <strong>Sophia</strong>
          {isEnglish ? "Active session · Leadership" : "Sesión activa · Liderazgo"}
        </span>
        <button
          className={`avatar-audio-control${isSpeaking ? " is-speaking" : ""}`}
          type="button"
          aria-pressed={isSpeaking}
          onClick={toggleIntroduction}
        >
          <span className="avatar-audio-wave" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          {isSpeaking
            ? isEnglish
              ? "Mute"
              : "Silenciar"
            : isEnglish
              ? "Listen to Sophia"
              : "Escuchar a Sophia"}
        </button>
      </div>
    </>
  );
}
