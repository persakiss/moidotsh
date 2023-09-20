// MountainReflection

type MountainReflectionProps = {
  details: any[],
  flipHorizontally?: boolean,
};

const MountainReflection: React.FC<MountainReflectionProps> = ({ details, flipHorizontally = false }) => {
  return (
    <>
      {details.map((detail, index) => {
        const reflectedMountainStyle = {
          clipPath: `polygon(${detail.peaks.join(", ")})`,
          zIndex: 100 - index * 10,
          backgroundColor: detail.color,
          width: "100%",
          transform: `scaleY(-1) ${flipHorizontally ? 'scaleX(-1)' : ''}`,
        };

        return (
          <div
            key={index}
            className="h-32 absolute w-fit"
            style={reflectedMountainStyle}
          ></div>
        );
      })}
    </>
  );
};

export default MountainReflection;
