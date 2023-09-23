import create from 'zustand';

type VisibilityState = {
  explorerVisible: boolean;
  toggleExplorer: () => void;
  setExplorerVisible: (visible: boolean) => void;

  terminalVisible: boolean;
  toggleTerminal: () => void;
  setTerminalVisible: (visible: boolean) => void;
  
  musicVisible: boolean;
  toggleMusic: () => void;
  setMusicVisible: (visible: boolean) => void;
};

export const useVisibilityStore = create<VisibilityState>((set) => ({
  explorerVisible: true,
  toggleExplorer: () => set((state) => ({ explorerVisible: !state.explorerVisible })),
  setExplorerVisible: (visible: boolean) => set({ explorerVisible: visible }),

  terminalVisible: true, // Assuming terminal is initially visible
  toggleTerminal: () => set((state) => ({ terminalVisible: !state.terminalVisible })),
  setTerminalVisible: (visible: boolean) => set({ terminalVisible: visible }),

  musicVisible: true, 
  toggleMusic: () => set((state) => ({ musicVisible: !state.musicVisible })),
  setMusicVisible: (visible: boolean) => set({ musicVisible: visible }),

}));

