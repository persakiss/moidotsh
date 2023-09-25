import { useState, useEffect } from 'react';

function NotFoundKirby() {
  const [frame, setFrame] = useState(1);

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
    `
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame === 4 ? 1 : prevFrame + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <pre className='font-mono whitespace-pre'>
          ~* 404 Not Found *~
        </pre>
      </div>
      <div className="animate-fall flex justify-center">
        <pre className='font-mono whitespace-pre '>
          {frames[frame - 1]}
        </pre>
      </div>
    </div>
  );
}

export default NotFoundKirby;
