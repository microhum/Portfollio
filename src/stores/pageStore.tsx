import { create } from "zustand";

interface StoreState {
  OnPage: string;
  setOnPage: (newPage: string) => void;
}

export const pageStore = create<StoreState>((set) => ({
  OnPage: "about-me",
  setOnPage: (newPage: string) => set({ OnPage: newPage })
}));
