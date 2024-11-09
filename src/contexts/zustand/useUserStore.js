import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  login: () => set({ user: { name: "pedro", email: "pedro@pedrotech.co" } }),
  logout: () => set({ user: null }),
}));
