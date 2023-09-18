import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import React from "react";

type Props = {};

type AboutPageProps = {};
type AboutPageRef = React.ForwardedRef<HTMLDivElement>;

function Cart(props: AboutPageProps, ref: AboutPageRef) {
  return (
    <PageTransition ref={ref}>
      <div className="page4">
        <div className="text">
        </div>
      </div>
    </PageTransition>
  );
}

export default Cart;
