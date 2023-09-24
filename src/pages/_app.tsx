//_app.tsx
import AppDock from "@/components/AppDock";
import MusicApp from "@/components/MusicApp";
import NavApp from "@/components/NavApp";
import TerminalApp from "@/components/TerminalApp";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="overflow-hidden">
      <NavApp />
      <TerminalApp />
      <MusicApp />
      <AppDock />

      <AnimatePresence
        onExitComplete={onExitComplete}
        initial={false}
        mode="popLayout"
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
