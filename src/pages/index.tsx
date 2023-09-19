// index.tsx

import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { forwardRef } from "react";
import MountainContainer from "@/components/MountainContainer";
import Background from "@/components/Background";
import Sun from "@/components/Sun";


type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {
  const [topRightMountainDetails, setTopRightMountainDetails] = useState<any[]>([]);
  const [bottomRightMountainDetails, setBottomRightMountainDetails] = useState<any[]>([]);
  const [topLeftMountainDetails, setTopLeftMountainDetails] = useState<any[]>([]);
  const [bottomLeftMountainDetails, setBottomLeftMountainDetails] = useState<any[]>([]);

  return (
    <PageTransition ref={ref}>
      <div className="page1 h-screen">
        <Background>
          <MountainContainer setMountainDetails={setTopRightMountainDetails} className={"row-start-2 col-start-7 col-span-5 -mr-36"} colorGroup="top-right" />
          <Sun className={"row-start-2 col-start-6 col-span-2"} />
          <MountainContainer setMountainDetails={setTopLeftMountainDetails} className={"row-start-2 col-span-5 -ml-36"} colorGroup="top-left" />
        </Background>
        <div className="bg-gradient-to-t from-lime-100 via-lime-100 to-rose-100 h-36 grid grid-rows-2 grid-cols-11">
          
          <div className="row-start-1 col-span-5 opacity-25 relative">
            {topLeftMountainDetails.map((detail, index) => {
              const reflectedMountainStyle = {
                clipPath: `polygon(${detail.peaks.join(", ")})`,
                zIndex: 100 - index * 10,
                backgroundColor: detail.color,
                width: "100%",
                marginLeft: "", // - rem to get it to start mid-mountain. might be a better way to achieve this
                transform: "scaleY(-1)", // Flip both vertically and horizontally
              };

              return <div key={index} className=" h-32 absolute w-fit" style={reflectedMountainStyle}></div>;
            })}
          </div>

          <div className="reflectionContainer col-start-7 row-start-1 opacity-25">
            {topRightMountainDetails.map((detail, index) => {
              const reflectedMountainStyle = {
                clipPath: `polygon(${detail.peaks.join(", ")})`,
                zIndex: 100 - index * 10,
                backgroundColor: detail.color,
                width: "100%",
                transform: "scaleY(-1) scaleX(-1)", // Flip both vertically and horizontally
              };

              return <div key={index} className="absolute h-32" style={reflectedMountainStyle}></div>;
            })}
          </div>

          <MountainContainer setMountainDetails={setBottomLeftMountainDetails} className={"row-start-2 col-span-3 -ml-36 align-top"} colorGroup="bottom-left" />
          <MountainContainer setMountainDetails={setBottomRightMountainDetails} className={"row-start-2 col-start-8 col-span-4 h-full -mr-36"} colorGroup="bottom-right" />
        </div>
        <div className="grid grid-rows-1 grid-cols-11">
        </div>
      </div>
    </PageTransition>
  );
}

export default forwardRef(IndexPage);

