// LakeBackground.tsx

import { theme } from "@/styles/themes";

type ThemeType = typeof theme; // infer the type of theme from "@/styles/themes".

type LakeBackgroundProps = {
  layer: 'top' | 'middle' | 'bottom';
  children?: React.ReactNode;
  theme?: ThemeType;
};

const LakeBackground: React.FC<LakeBackgroundProps> = ({ layer, children, theme = theme }) => {
  const backgroundStyle = {
    background: `linear-gradient(to top, ${theme.lakeColors[layer].gradientStart}, ${theme.lakeColors[layer].gradientMid}, ${theme.lakeColors[layer].gradientEnd})`,
  };
  return (
    <div style={backgroundStyle} className="h-1/5">
      {children}
    </div>
  );
};

export default LakeBackground;
