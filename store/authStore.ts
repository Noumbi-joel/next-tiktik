import create from "zustand";
import { persist } from "zustand/middleware";

// net
import axios from "axios";

// types
import { User } from "@/typing";

const authStore = (set: any) => ({
  userProfile: null,

  addUser: (user: User) => set({ userProfile: user }),
  removeUser: (user: User) => set({ userProfile: null }),
});

const useAuthStore = create(persist(authStore, { name: "auth" }));

export default useAuthStore;