// MountainBackground.tsx

import React, { useEffect, useMemo } from "react";
import { theme } from "@/styles/themes";

function getRandomPeak(min: number, max: number) {
  const value = Math.floor(Math.random() * (max - min + 1) + min);
  return {
    percentage: value + "%",
    value: value,
  };
}


interface MountainBackgroundProps {
  colorGroup: "top-left" | "top-right" | "bottom-right" | "bottom-left";
  setMountainDetails: (details: any[]) => void;
}

const MountainBackground = ({
  colorGroup,
  setMountainDetails,
}: MountainBackgroundProps) => {
  const colors = theme.mountainColors[colorGroup];
  const centralPeak = getRandomPeak(80, 90);

  const isWideScreen = true;

  //
  //const isWideScreen = typeof window !== "undefined" && window.innerWidth > 768;

  const isTopLeft = colorGroup === "top-left";
  const isTopRight = colorGroup === "top-right";

  const generatePeaks = () => {
    if (isWideScreen) {
      return [
        "0% 100%",
        `10% ${getRandomPeak(85, 95).percentage}`,
        `20% ${isTopLeft
          ? getRandomPeak(50, 70).percentage
          : getRandomPeak(70, 85).percentage
        }`,
        `30% ${isTopLeft
          ? getRandomPeak(45, 65).percentage
          : getRandomPeak(75, 90).percentage
        }`,
        `40% ${isTopLeft
          ? getRandomPeak(40, 60).percentage
          : getRandomPeak(80, 95).percentage
        }`,
        `50% ${getRandomPeak(75, 90).percentage}`,
        `60% ${isTopRight
          ? getRandomPeak(40, 60).percentage
          : getRandomPeak(80, 95).percentage
        }`,
        `70% ${isTopRight
          ? getRandomPeak(45, 65).percentage
          : getRandomPeak(75, 90).percentage
        }`,
        `80% ${isTopRight
          ? getRandomPeak(50, 70).percentage
          : getRandomPeak(70, 85).percentage
        }`,
        `90% ${getRandomPeak(85, 95).percentage}`,
        "100% 100%",
      ];
    } else {
      return [
        "0% 100%",
        `25% ${isTopLeft
          ? getRandomPeak(45, 65).percentage
          : getRandomPeak(75, 90).percentage
        }`,
        `50% ${getRandomPeak(80, 90).percentage}`,
        `75% ${isTopRight
          ? getRandomPeak(45, 65).percentage
          : getRandomPeak(75, 90).percentage
        }`,
        "100% 100%",
      ];
    }
  };

  // useMemo saved the infinite loop here
  const mountainPeaks = useMemo(() => {
    return Array.from({ length: colors.length }, () => generatePeaks());
  }, [colors, isWideScreen]);

  useEffect(() => {
    const details = colors.map((color, index) => ({
      color,
      peaks: mountainPeaks[index],
    }));

    setMountainDetails(details);
  }, [colors, mountainPeaks]);

  return (
    <>
      {colors.map((color, index) => {
        const mountainStyle = {
          clipPath: `polygon(${mountainPeaks[index].join(", ")})`,
          zIndex: 100 - index * 10, // adjusting zIndex based on position in the colors array
          backgroundColor: color,
          width: "100%",
        };
        const heightAdjustment =
          colorGroup === "bottom-left" || colorGroup === "bottom-right"
            ? "scaleY(1.5)"
            : "scaleY(1)";
        return (
          <div
            key={index}
            className="absolute h-full transform will-change-transform"
            style={{ ...mountainStyle, transform: heightAdjustment }}
          ></div>
        );
      })}
    </>
  );
};

export default MountainBackground;
