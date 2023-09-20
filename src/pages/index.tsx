// index.tsx

import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { forwardRef } from "react";
import MountainContainer from "@/components/MountainContainer";
import Background from "@/components/Background";
import Sun from "@/components/Sun";
import { theme } from "@/styles/themes";

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {
  const [topRightMountainDetails, setTopRightMountainDetails] = useState<any[]>(
    []
  );
  const [bottomRightMountainDetails, setBottomRightMountainDetails] = useState<
    any[]
  >([]);
  const [topLeftMountainDetails, setTopLeftMountainDetails] = useState<any[]>(
    []
  );
  const [bottomLeftMountainDetails, setBottomLeftMountainDetails] = useState<
    any[]
  >([]);

  return (
    <PageTransition ref={ref}>
      <div className="page1 h-screen overflow-x-hidden overflow-y-hidden">
        <Background>
          <MountainContainer
            setMountainDetails={setTopRightMountainDetails}
            className={"row-start-2 col-start-7 col-span-5 -mr-36"}
            colorGroup="top-right"
          />
          <Sun className={"row-start-2 col-start-6 col-span-2"} />
          <MountainContainer
            setMountainDetails={setTopLeftMountainDetails}
            className={"row-start-2 col-span-5 -ml-36"}
            colorGroup="top-left"
          />
        </Background>

        {/* Using style here because can't interpolate js to tailwind util classes. But it's only bg colours so it's not a big deal */}
        <div style={{
          background: `linear-gradient(to top, ${theme.lakeColors.top.gradientStart}, ${theme.lakeColors.top.gradientMid}, ${theme.lakeColors.top.gradientEnd})`,
        }}
          className="h-1/5 grid grid-rows-2 grid-cols-11">
          <div className="row-start-1 col-span-5 opacity-25 relative scale-x-150 w-[80%]">
            {topLeftMountainDetails.map((detail, index) => {
              const reflectedMountainStyle = {
                clipPath: `polygon(${detail.peaks.join(", ")})`,
                zIndex: 100 - index * 10,
                backgroundColor: detail.color,
                width: "100%",
                transform: "scaleY(-1)", 
              };

              return (
                <div
                  key={index}
                  className=" h-32 absolute w-fit"
                  style={reflectedMountainStyle}
                ></div>
              );
            })}
          </div>


          <div className="col-start-8 col-span-4 row-start-1 opacity-25 relative scale-x-150 ml-1">

            {topRightMountainDetails.map((detail, index) => {
              const reflectedMountainStyle = {
                clipPath: `polygon(${detail.peaks.join(", ")})`,
                zIndex: 100 - index * 10,
                backgroundColor: detail.color,
                width: "100%",
                transform: "scaleY(-1) scaleX(1)", // Flip both vertically and horizontally
              };

              return (
                <div
                  key={index}
                  className="absolute h-32 w-fit"
                  style={reflectedMountainStyle}
                ></div>
              );
            })}
          </div>


          <MountainContainer
            setMountainDetails={setBottomRightMountainDetails}
            className={
              "row-start-2 col-start-8 col-span-4  bottom-[400%] w-3/12 scale-[600%] z-[100] ml-96"
            }
            colorGroup="bottom-right"
          />
          <MountainContainer
            setMountainDetails={setBottomLeftMountainDetails}
            className={
              "row-start-2 col-star-1 col-span-3 bottom-[400%] w-3/12 scale-[600%] z-[100]"
            }
            colorGroup="bottom-left"
          />
        </div>


        <div style={{
          background: `linear-gradient(to top, ${theme.lakeColors.middle.gradientStart}, ${theme.lakeColors.middle.gradientMid}, ${theme.lakeColors.middle.gradientEnd})`}}
          className="h-1/5 grid grid-rows-2 grid-cols-11 overflow-x-hidden" >
          <div className="row-start-1 col-span-7 opacity-25 w-[11%] scale-x-[600%]">
            {bottomLeftMountainDetails.map((detail, index) => {
              const reflectedMountainStyle = {
                clipPath: `polygon(${detail.peaks.join(", ")})`,
                zIndex: 100 - index * 10,
                backgroundColor: detail.color,
                width: "100%",
                transform: "scaleY(-1) scaleX(-1)",
              };

              return (
                <div
                  key={index}
                  className=" h-32 absolute w-fit"
                  style={reflectedMountainStyle}
                ></div>
              );
            })}
          </div>

          <div className="col-start-8 col-span-3 row-start-1 opacity-25 w-4/12 scale-x-[600%] ml-96 ">
            {bottomRightMountainDetails.map((detail, index) => {

              const reflectedMountainStyle = {
                clipPath: `polygon(${detail.peaks.join(", ")})`,
                zIndex: 100 - index * 10,
                backgroundColor: detail.color,
                width: "100%",

                transform: "scaleY(-1) ",

              };

              return (
                <div
                  key={index}
                  className="absolute h-32 w-fit"
                  style={reflectedMountainStyle}
                ></div>
              );
            })}
          </div>

        </div>

      <div
      style={{ backgroundColor: theme.lakeColors.bottom}}
      className="h-1/5"></div>
    </div>
    </PageTransition >
  );
}

export default forwardRef(IndexPage);
