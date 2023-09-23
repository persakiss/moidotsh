import React from 'react';
import YouTube from 'react-youtube';
import { X } from 'react-feather';
import { useVisibilityStore } from "@/stores/visibilityStore";

const Music: React.FC = () => {
  const musicVisible = useVisibilityStore((state) => state.musicVisible);

  const opts = {
    height: '0', // You can adjust this to only show the controls
    width: '0',
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
      <div className="p-4 hidden">
        <YouTube videoId="C4wwXZRgPWY" opts={opts} />
      </div>
    </>
  );
};

export default Music;

