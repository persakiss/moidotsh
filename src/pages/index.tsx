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
  const [mountainDetails, setMountainDetails] = useState<any[]>([]);

  return (
    <PageTransition ref={ref}>
      <div className="page1 h-screen">
        <Background>
          <MountainContainer setMountainDetails={setMountainDetails} className={"row-start-2 col-start-7 col-span-5 -mr-36"} colorGroup="top-right" />
          <Sun className={"row-start-2 col-start-6 col-span-2"} />
          <MountainContainer setMountainDetails={setMountainDetails} className={"row-start-2 col-span-5 -ml-36"} colorGroup="top-left" />
        </Background>
        <div className="bg-gradient-to-t from-lime-100 via-lime-100 to-rose-100 h-96 overflow-x-hidden grid grid-rows-2 grid-cols-11">
          <MountainContainer setMountainDetails={setMountainDetails} className={"row-start-1 col-span-3 h-full -ml-36"} colorGroup="bottom-left" />
          <MountainContainer setMountainDetails={setMountainDetails} className={"row-start-1 col-start-8 col-span-4 h-full -mr-36"} colorGroup="bottom-right" />
        </div>
        <div className="grid grid-rows-1 grid-cols-11">
        </div>
      </div>
    </PageTransition>
  );
}

export default forwardRef(IndexPage);

