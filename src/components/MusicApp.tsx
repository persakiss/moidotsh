// MusicApp.tsx
import withAppTemplate from './withAppTemplate';
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { X } from 'react-feather';
import { useVisibilityStore } from "@/stores/visibilityStore";
import { Play, Pause, SkipBack, SkipForward } from 'react-feather';

const MusicApp = () => {
  const musicVisible = useVisibilityStore((state) => state.musicVisible);
  const [player, setPlayer] = useState<any>(null);
  const [playing, setPlaying] = useState(false);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // New state variable f

  const [progress, setProgress] = useState(0);

  const opts = {
    height: '00', // You can adjust this to only show the controls
    width: '00',
    playerVars: {
      controls: 0, // Show player controls
      modestbranding: 1, // Hide YouTube branding
      enablejsapi: 1, // Enable JS API
      autoplay: 1, // Auto-play the video on load
      iv_load_policy: 3, // Hide video annotations
      showinfo: 0, // Hide video title and uploader
      list: 'PLoYklFrhjFDxEcECsVIj7W58zRQIpGlUN',
      listType: 'playlist'
    }
  };

  const onReady = (event: any) => {
    setPlayer(event.target);
    setIsLoading(false); // Set to false when the player is ready
  };

  const cleanTitle = (rawTitle: string): { artist: string | null, title: string | null } => {
    // Remove anything after and including "~", "Lo-Fi", or "Remix"
    const cleaned = rawTitle.split("~")[0].split("Lo-Fi")[0].split("Remix")[0].split("Lo-FI")[0].trim();


    // Split by ' - ' to separate artist and title
    const parts = cleaned.split('- ');

    if (parts.length === 1) {
      return { artist: null, title: parts[0].trim() };
    } else if (parts.length >= 2) {
      return { artist: parts[0].trim(), title: parts[1].trim() };
    }
    return { artist: null, title: null };
  };


  const onStateChange = (event: any) => {
    if (event.data === -1) {
      setIsLoading(true);
    }
    else if (event.data === 1) {
      setIsLoading(false);
      setPlaying(true);
      const rawTitle = event.target.getVideoData().title;
      const { artist, title } = cleanTitle(rawTitle);
      setTitle(title ?? '');  // 
      setArtist(artist);  //
    } else if (event.data === 2) {
      setPlaying(false);
    }
  };


  useEffect(() => {
  let interval: NodeJS.Timeout | null = null;  // Initialize to null
  if (playing && player) {
    interval = setInterval(() => {
      setProgress((player.getCurrentTime() / player.getDuration()) * 100);
    }, 1000);
  } else {
    if (interval) {  // Check if interval is not null before clearing
      clearInterval(interval);
    }
  }
  return () => {
    if (interval) {  // Check if interval is not null before clearing
      clearInterval(interval);
    }
  };
}, [playing, player]);




  const youTubePlayer = (
    <YouTube videoId="C4wwXZRgPWY" opts={opts} onReady={onReady} onStateChange={onStateChange} />
  );

  if (!musicVisible) {
    return youTubePlayer; // Return just the player when the app is not visible
  }

  return (
    <>
      <div>
      {youTubePlayer}
        <div className='pt-3'>
          <div className='relative block h-6 w-full'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='select-none cursor-default z-[100]'>
                {isLoading ? 'Loading...' : (artist ? `${artist} - ${title}` : title)}
              </span>
            </div>
            <div className='absolute inset-0 bg-white rounded bg-opacity-80' style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className='pt-5 flex justify-evenly w-[19rem]'>
          <button onClick={() => player.previousVideo()}>
            <SkipBack />
          </button>
          <button onClick={() => playing ? player.pauseVideo() : player.playVideo()}>
            {playing ? <Pause /> : <Play />}
          </button>
          <button onClick={() => player.nextVideo()}>
            <SkipForward />
          </button>
        </div>
      </div>
    </>
  );
};




export default withAppTemplate(MusicApp, 'Music');

