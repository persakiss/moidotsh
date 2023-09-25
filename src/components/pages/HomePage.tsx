import React from "react";
import Image from 'next/image';
import my_portrait from '../../../public/pages/arman.jpg';

type Props = {};

export default function HomePage({}: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 h-full pr-2 pl-2 pt-2 bg-gray-100">
        {/* Top Left Column */}
        <div className="col-span-1 bg-white p-2 rounded-lg flex flex-col items-center justify-center">
          <Image src={my_portrait} alt="Arman&apos;s Portrait" width={100} height={100} />
          <p className="text-xs text-gray-600">That&apos;s Me!</p>
        </div>

        {/* Top Right Column */}
        <div className="col-span-1 bg-white p-2 rounded-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">Hi, I&apos;m Arman!</h1>
          <p className="text-xs text-gray-600"></p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 h-full pl-2 pr-2 pt-2 pb-2 bg-gray-100">
        {/* Bottom Left Column */}
        <div className="col-span-1 bg-white p-2 rounded-lg flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-gray-800">🚀</div>
          <p className="text-xs text-gray-600">Let&apos;s Build Together!</p>
        </div>

        {/* Bottom Right Column */}
        <div className="col-span-1 bg-white p-2 rounded-lg flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-gray-800">🛠️</div>
          <p className="text-xs text-gray-600">Tech Stack</p>
        </div>
      </div>
    </>
  );
}
