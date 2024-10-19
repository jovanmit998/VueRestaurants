import { defineStore } from "pinia";
import { getAuthToken } from "../resource/api";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: "",
  }),
  actions: {
    async getAndSetAuthToken() {
      try {
        const token = await getAuthToken();
        this.$patch({ token: token.data.jwt_token });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
