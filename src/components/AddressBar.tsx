// AddressBar.tsx
import React from 'react';
import { useRouter } from "next/router";
import { X } from 'react-feather';

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
            <div className="absolute mt-2 h-[2rem] w-[20rem] flex self-center bg-white font rounded-t address-bar">
                <p className="self-center flex-auto">{textMaker(router.pathname)}</p>{" "}
                <p className="mr-3 my-auto " onClick={toggleHidden}>
                    <X size={"1rem"} />
                </p>
            </div>
            <div
                className="absolute mt-[2rem] h-[7rem] w-[20rem] flex self-center bg-white rounded-b opacity-30"
                style={{ display: hidden ? "none" : "" }}
            >
                {" "}
            </div>
        </>
    );
};

export default AddressBar;
