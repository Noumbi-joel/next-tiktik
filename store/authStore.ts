import create from "zustand";
import { persist } from "zustand/middleware";

// net
import axios from "axios";
import { User } from "next-auth";

const authStore = (set: any) => ({
  userProfile: null,
  allUsers: [],

  addUser: (user: User) => set({ userProfile: user }),
  removeUser: (user: User) => set({ userProfile: null }),
  fetchAllUsers: async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`
    );

    set({ allUsers: response.data });
  },
});

const useAuthStore = create(persist(authStore, { name: "auth" }));

export default useAuthStore;
