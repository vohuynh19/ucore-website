import { create } from "zustand";

interface AppState {
  isHiddenNav: boolean;
}

interface AppAction {
  toggleNav: () => void;
}

const useAppStore = create<AppState & AppAction>((set) => ({
  isHiddenNav: true,
  toggleNav: () => set((state) => ({ isHiddenNav: !state.isHiddenNav })),
}));

export default useAppStore;
