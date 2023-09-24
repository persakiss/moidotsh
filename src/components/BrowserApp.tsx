// BrowserApp.tsx

import withAppTemplate from "./withAppTemplate";
import { useVisibilityStore } from "@/stores/visibilityStore";

type BrowserAppProps = {
  children?: JSX.Element;
};

const BrowserApp = ({ children }: BrowserAppProps) => {
  const content = useVisibilityStore((state) => state.browserContent);
  const loading = useVisibilityStore((state) => state.browserLoading);
  const title = useVisibilityStore((state) => state.browserTitle);

  const getDynamicTitle = (): JSX.Element => {
    return <>{title}</>;
  };

  return (
    <div className="w-full border-t-2">
      <div className="pt-1"> {loading ? "..." : content || children}</div>
    </div>
  );
};

const getDynamicTitle = (): JSX.Element => {
    const title = useVisibilityStore.getState().browserTitle;
    return <>{title}</>;
  };

// const declaration, title, dynamic title, full size
export default withAppTemplate(BrowserApp, "Browser", getDynamicTitle, true);
