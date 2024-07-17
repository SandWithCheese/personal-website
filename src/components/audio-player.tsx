import AudioProgressBar from "@/components/audio-progress-bar";
import IconButton from "@/components/icon-button";
import VolumeInput from "@/components/volume-input";
import * as React from "react";
import { CgSpinner } from "react-icons/cg";
import { MdPause, MdPlayArrow, MdVolumeOff, MdVolumeUp } from "react-icons/md";

function formatDurationDisplay(duration: number) {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration - min * 60);

  const formatted = [min, sec].map((n) => (n < 10 ? "0" + n : n)).join(":");

  return formatted;
}

interface AudioPlayerProps {
  currentSong?: { name: string; writer: string; src: string };
  songIndex: number;
}

export default function AudioPlayer({
  currentSong,
  songIndex,
}: AudioPlayerProps) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const [isReady, setIsReady] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currrentProgress, setCurrrentProgress] = React.useState(0);
  const [buffered, setBuffered] = React.useState(0);
  const [volume, setVolume] = React.useState(0.2);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const durationDisplay = formatDurationDisplay(duration);
  const elapsedDisplay = formatDurationDisplay(currrentProgress);

  React.useEffect(() => {
    audioRef.current?.pause();

    const timeout = setTimeout(() => {
      audioRef.current?.play();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [songIndex]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
    e,
  ) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i,
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  const handleMuteUnmute = () => {
    if (!audioRef.current) return;

    if (audioRef.current.volume !== 0) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    }
  };

  const handleVolumeChange = (volumeValue: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  return (
    <div className="relative bg-secondary p-3 font-inter text-foreground lg:px-8">
      {currentSong && (
        <audio
          autoPlay
          ref={audioRef}
          preload="metadata"
          onDurationChange={(e) => setDuration(e.currentTarget.duration)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onCanPlay={(e) => {
            e.currentTarget.volume = volume;
            setIsReady(true);
          }}
          onTimeUpdate={(e) => {
            setCurrrentProgress(e.currentTarget.currentTime);
            handleBufferProgress(e);
          }}
          onProgress={handleBufferProgress}
          onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
        >
          <source type="audio/mpeg" src={currentSong.src} />
        </audio>
      )}
      <AudioProgressBar
        duration={duration}
        currentProgress={currrentProgress}
        buffered={buffered}
        onChange={(e) => {
          if (!audioRef.current) return;

          audioRef.current.currentTime = e.currentTarget.valueAsNumber;

          setCurrrentProgress(e.currentTarget.valueAsNumber);
        }}
      />

      <div className="flex flex-col items-center justify-center">
        <div className="mb-1 text-center">
          <p className="font-bold">{currentSong?.name}</p>
          <p className="text-xs">{currentSong?.writer}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 items-center">
        <span className="text-sm">
          {elapsedDisplay} / {durationDisplay}
        </span>
        <div className="flex items-center gap-4 justify-self-center">
          <IconButton
            disabled={!isReady}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
            size="lg"
          >
            {!isReady && currentSong ? (
              <CgSpinner size={24} className="animate-spin" />
            ) : isPlaying ? (
              <MdPause size={30} />
            ) : (
              <MdPlayArrow size={30} />
            )}
          </IconButton>
        </div>

        <div className="flex items-center gap-3 justify-self-end">
          <IconButton
            size="sm"
            onClick={handleMuteUnmute}
            aria-label={volume === 0 ? "unmute" : "mute"}
            className="bg-primary"
          >
            {volume === 0 ? (
              <MdVolumeOff size={20} />
            ) : (
              <MdVolumeUp size={20} />
            )}
          </IconButton>
          <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
      </div>
    </div>
  );
}
