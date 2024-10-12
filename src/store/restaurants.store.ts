import { defineStore } from "pinia";

export const useRestaurantsStore = defineStore("restaurantsStore", {
  state: () => ({
    isTrue: true,
  }),
  actions: {
    toggle() {
      this.$patch({
        isTrue: !this.isTrue,
      });
    },
  },
});
