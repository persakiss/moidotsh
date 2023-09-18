import React from 'react';

function getRandomPeak(min: number, max: number) {
  const value = Math.floor(Math.random() * (max - min + 1) + min);
  return {
    percentage: value + "%",
    value: value
  };
}


// Group similar or adjacent colors together
const colorGroups: Record<string, string[]> = {
  "top-left": ['#F4B56C', '#4A5C6A', '#708B92'],
  "top-right": ['#5D747D', '#415264', '#999485'],
  "bottom-right": ['#2C3B51', '#6C8588', '#3A4E5F'],
  "bottom-left": ['#445464', '#849C98', '#6D8387']
};

interface MountainBackgroundProps {
  colorGroup: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
}

const MountainBackground = ({ colorGroup }: MountainBackgroundProps) => {
  const colors = colorGroups[colorGroup];
  const centralPeak = getRandomPeak(80, 90);

  const isWideScreen = typeof window !== "undefined" && window.innerWidth > 768;


const generatePeaks = () => {
  return isWideScreen ? 
  [
    '0% 100%',
    `10% ${getRandomPeak(60, 80).percentage}`,
    `20% ${getRandomPeak(50, 90).percentage}`,
    `30% ${getRandomPeak(65, 85).percentage}`,
    `40% ${getRandomPeak(60, 80).percentage}`,
    `50% ${getRandomPeak(75, 90).percentage}`,
    `60% ${getRandomPeak(60, 80).percentage}`,
    `70% ${getRandomPeak(65, 85).percentage}`,
    `80% ${getRandomPeak(50, 90).percentage}`,
    `90% ${getRandomPeak(60, 80).percentage}`,
    '100% 100%'
  ] : [
    '0% 100%',
    `25% ${getRandomPeak(50, 75).percentage}`,
    `50% ${getRandomPeak(80, 90).percentage}`,
    `75% ${getRandomPeak(50, 75).percentage}`,
    '100% 100%'
  ];
}


  const mountainPeaks = Array.from({ length: colors.length }, () => generatePeaks());

  return (
    <>
      {colors.map((color, index) => {
        const mountainStyle = {
          clipPath: `polygon(${mountainPeaks[index].join(", ")})`,
          zIndex: 100 - index * 10,  // adjusting zIndex based on position in the colors array
          backgroundColor: color,
          width: "100%",
        };
        return <div key={index} className="absolute h-64" style={mountainStyle}></div>;
      })}
    </>
  );

};

export default MountainBackground;
