// themes.ts

export const originalTheme = {
  backgroundGradient: { // covers 2/5 vh
    start: "#FFD700",  // Example color for amber-100
    middle: "#FFFFE0", // Example color for yellow-100
    end: "#FFC0CB",   // Example color for rose-300
  },
  lakeColors: { // top covers 1/5 vh, middle 1/5 vh, bottom 1/5 vh
    top: {
      gradientStart: "#b2dfdb", // Teal 200 color code
      gradientMid: "#b2dfdb",
      gradientEnd: "#d3d3d3"   // Neutral 100 color code
    },
    middle: {
      gradientStart: "#26a69a", // Teal 300 color code
      gradientMid: "#b2dfdb",
      gradientEnd: "#b2dfdb"
    },
    bottom: "#26a69a"
  },
  sunColor: "#FFD700", // Similar to amber-100, so using the same color
  mountainColors: {
    "top-left": ["#F4B56C", "#4A5C6A", "#708B92"],
    "top-right": ["#5D747D", "#415264", "#999485"],
    "bottom-right": ["#2C3B51", "#6C8588", "#3A4E5F"],
    "bottom-left": ["#445464", "#849C98", "#6D8387"],
  },
};

// themes.ts

export const theme = {
  backgroundGradient: {
    start: "#FFDEAD",  // Navajo White, a softer gold for the horizon
    middle: "#FFDAB9", // Peach Puff, a gentle transition color
    end: "#FFE4E1",    // Misty Rose, representing the higher sky
  },
  lakeColors: {
    top: {
      gradientStart: "#B0C4DE",  // Light Steel Blue, reflecting a bit of the sky
      gradientMid: "#ADD8E6",    // Light Blue, to mimic the softer reflection of the middle sky
      gradientEnd: "#B0E0E6",    // Powder Blue, for a serene water touch
    },
    middle: {
      gradientStart: "#87CEEB",  // Sky Blue, representing deeper yet calm waters
      gradientMid: "#B0C4DE",    // Back to Light Steel Blue for variety
      gradientEnd: "#B0C4DE",    // Repeat Sky Blue
    },
    bottom: { 
      gradientStart: "#4682B4",            // Steel Blue, representing the deepest water
      gradientMid: "#87CEEB",            // Steel Blue, representing the deepest water
      gradientEnd: "#87CEEB",            // Steel Blue, representing the deepest water
    }
  },
  sunColor: "#FFECB3",           // A softer, muted version of the sun color
  mountainColors: {
    "top-left": ["#A9A9A9", "#B0C4DE", "#D1EEEE"],     // Distant mountains: soft grays and muted blues
    "top-right": ["#A9A9A9", "#B0C4DE", "#D1EEEE"],    // Repeat for symmetry
    "bottom-right": ["#696969", "#778899", "#708090"], // Closer mountains: darker grays and slate grays
    "bottom-left": ["#696969", "#778899", "#708090"],  // Repeat for symmetry
  },
};

