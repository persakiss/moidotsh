//commands.ts 

import { useRouter } from "next/router";

type CommandHandler = (args: string[], router: ReturnType<typeof useRouter>) => void;

export const cd: CommandHandler = (args, router) => {
    const targetDirectory = args[0];
    if (!targetDirectory) {
        // If no directory specified, go to the home/root directory (you can adjust this behavior)
        router.push('/');
        return;
    }
    // Navigate to the specified directory
    router.push(targetDirectory);
};

// ... Other command handlers
