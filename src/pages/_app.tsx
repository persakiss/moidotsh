import AppDock from "@/components/AppDock";
import Nav from "@/components/Nav";
import TerminalContainer from "@/components/TerminalContainer";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  };

  const [explorerHidden, setExplorerHidden] = useState(false);


  return (
    <>
        <Nav explorerHidden={explorerHidden} setExplorerHidden={setExplorerHidden} />
        <TerminalContainer />
        <AppDock  explorerHidden={explorerHidden} setExplorerHidden={setExplorerHidden} />


        <AnimatePresence
          onExitComplete={onExitComplete}
          initial={false}
          mode="popLayout"
          
        >
          <Component {...pageProps} />

        </AnimatePresence>

    </>
  );
}
