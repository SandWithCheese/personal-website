"use client";

import AudioPlayer from "@/components/audio-player";
import React from "react";

function Audio({
  song,
}: {
  song: {
    name: string;
    writer: string;
    src: string;
  };
}) {
  return (
    <div className="sticky">
      <AudioPlayer currentSong={song} songIndex={0} />
    </div>
  );
}

export default Audio;
