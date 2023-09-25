import { useState, useEffect } from "react";

function LoadingKirby() {
  const [frame, setFrame] = useState(1);

  // The frames for Kirby's animation
  const frames = [
    `
     .--.
    /  -  \\
   |      |
    \\.--./
    `,
    `
      .--.
     /  -  \\
    |      |
     \\.--./
    `,
    `
       .-.
      / - \\
     |     |
      \\.-./
    `,
    `
      .--.
     /  -  \\
    |      |
     \\.--./
    `,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame === 4 ? 1 : prevFrame + 1));
    }, 500);

    // Cleanup: Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex mt-10 mr-10">
      {" "}
      <pre className="mx-auto font-mono, whitespace-pre">{frames[frame - 1]}</pre>
    </div>
  );
}

export default LoadingKirby;
