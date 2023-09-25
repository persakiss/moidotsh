// BrowserApp.tsx

import BrowserAppAddressBar from "./BrowserAppAddressBar";
import LoadingKirby from "./LoadingKirby";
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

  // Old function when I wanted to put the title in the browser top bar
  // wasn't really working so now rather than change the f'n im just
  // gonna use a function to strip it and pass it as prop to the AddressBar
  // This is a crazy way to do this but I don't wanna go 
  // fishing thorugh the store to find the original
  const getSubstringAfterFirstSlash = (str: string) => {
    const index = str.indexOf('/');
    return index !== -1 ? str.substring(index + 1) : '';
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white w-[19rem] pr-2">
          {" "}
          <BrowserAppAddressBar url={getSubstringAfterFirstSlash(title)}/>
        </div>

        <div className="w-full overflow-y-scroll scroll-m-0">
          <div className="pt-1 pr-2"> {loading ? <LoadingKirby /> : content || children} </div>
        </div>
      </div>
    </>
  );
};

const getDynamicTitle = (): JSX.Element => {
  const title = useVisibilityStore.getState().browserTitle;
  return <>{title}</>;
};

// const declaration, title, dynamic title, full size
export default withAppTemplate(BrowserApp, "Browser", getDynamicTitle, true);
