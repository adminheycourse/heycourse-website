"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import type { SyntheticEvent } from "react";
import { localeFromPathname, type Locale } from "./locales";

const LOOP_SECONDS = 5;

const avatarCopy: Record<
  Locale,
  {
    video: string;
    session: string;
    listen: string;
    mute: string;
  }
> = {
  es: {
    video: "/heycourse-avatar-sophia-loop.mp4",
    session: "Sesión activa · Liderazgo",
    listen: "Escuchar a Sophia",
    mute: "Silenciar",
  },
  en: {
    video: "/heycourse-avatar-sophia-en-loop.mp4",
    session: "Active session · Leadership",
    listen: "Listen to Sophia",
    mute: "Mute",
  },
  pt: {
    video: "/heycourse-avatar-sophia-pt-loop.mp4",
    session: "Sessão ativa · Liderança",
    listen: "Ouvir Sophia",
    mute: "Silenciar",
  },
  fr: {
    video: "/heycourse-avatar-sophia-fr-loop.mp4",
    session: "Session active · Leadership",
    listen: "Écouter Sophia",
    mute: "Couper le son",
  },
};

export function AnimatedAvatar() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = avatarCopy[locale];
  const videoSource = copy.video;
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
          {copy.session}
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
          {isSpeaking ? copy.mute : copy.listen}
        </button>
      </div>
    </>
  );
}
