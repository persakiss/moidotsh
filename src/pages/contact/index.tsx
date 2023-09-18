import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import React from "react";

type Props = {};

type AboutPageProps = {};
type AboutPageRef = React.ForwardedRef<HTMLDivElement>;


function Contact(props: AboutPageProps, ref: AboutPageRef) {
    return (
    <PageTransition ref={ref}>
      <div className="page5"><div className="text"></div></div>
    </PageTransition>
  );
}

export default Contact;
