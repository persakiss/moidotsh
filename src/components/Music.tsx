import React from 'react';
import YouTube from 'react-youtube';
import { X } from 'react-feather';
import { useVisibilityStore } from "@/stores/visibilityStore";
import MusicBar from './MusicBar';

const Music: React.FC = () => {
  const musicVisible = useVisibilityStore((state) => state.musicVisible);
  const toggleMusic = useVisibilityStore((state) => state.toggleMusic);

  const opts = {
    height: '50', // You can adjust this to only show the controls
    width: '300',
    playerVars: {
      controls: 2, // Show player controls
      modestbranding: 1, // Hide YouTube branding
      enablejsapi: 1, // Enable JS API
      autoplay: 1, // Auto-play the video on load
      iv_load_policy: 3, // Hide video annotations
      showinfo: 0 // Hide video title and uploader
    }
  };

  if (!musicVisible) return null;

  return (
    <>
      <MusicBar />
      <div className="absolute top-full left-0 w-full rounded-b bg-white opacity-30">
        <YouTube videoId="XD08gqsqSYM" opts={opts} />
      </div>
    </>
  );
};

export default Music;

