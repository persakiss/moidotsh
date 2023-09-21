// AddressBar.tsx
import React from 'react';
import { useRouter } from "next/router";

type AddressBarProps = {
    hidden: boolean;
    toggleHidden: () => void;
};

const AddressBar = ({ hidden, toggleHidden }: AddressBarProps) => {
    const router = useRouter();

    const textMaker = (inputPath: string) => {
        const preface = "/home/arman";
        return preface + inputPath;
    };

    return (
        <>
            <div className="absolute mt-2 h-[5vh] w-[20rem] flex self-center bg-white font rounded-t">
                <p className="self-center flex-auto">{textMaker(router.pathname)}</p>{" "}
                <p className="mr-3 mt-1" onClick={toggleHidden}>
                    x
                </p>
            </div>
            <div
                className="absolute mt-[5vh] h-[7rem] w-[20rem] flex self-center bg-white rounded-b opacity-30"
                style={{ display: hidden ? "none" : "" }}
            >
                {" "}
            </div>
        </>
    );
};

export default AddressBar;
