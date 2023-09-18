// index.tsx

import PageTransition from "@/components/PageTransition";
import { forwardRef } from "react";
import MountainContainer from "@/components/MountainContainer";
import Sun from "@/components/Sun";

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <PageTransition ref={ref}>
      <div className="page1 h-screen">
        <Sun>
          <div className="row-start-2 col-start-4 col-span-3">
            <MountainContainer className={"row-start-2 col-start-4 col-span-3"} colorGroup="top-right"/>
          </div>
          <div className="row-start-2 col-span-3">
            <div className="grid">
              <MountainContainer colorGroup="top-left" className="grid-rows-2"/>
            </div>
          </div>
        </Sun>
      </div>
    </PageTransition>
  );
}

export default forwardRef(IndexPage);

