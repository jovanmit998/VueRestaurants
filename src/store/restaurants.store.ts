import { defineStore } from "pinia";
import { useAuthStore } from "./auth.store";
import { getSearchId, getSearchRequest } from "../resource/api";
import { mapRequestBody } from "../resource/api.mapper";
import { useSearchFormStore } from "./search-form.store";
import { ApiError, Restaurant } from "../resource/api.dto";

interface RestaurantsStore {
  restaurants: Restaurant[];
  searchId: string;
  isLoading: boolean;
}

export const useRestaurantsStore = defineStore("restaurantsStore", {
  state: (): RestaurantsStore => ({
    restaurants: [],
    searchId: "",
    isLoading: false,
  }),
  actions: {
    async submitForm(
      dateForm: Date | null,
      timeForm: string | null,
      guestSizeForm: number | null
    ) {
      const searchForm = useSearchFormStore();
      const authStore = useAuthStore();

      searchForm.validateForm(dateForm, timeForm, guestSizeForm);
      if (searchForm.isErrorPresent()) {
        return;
      }
      const requestBody = mapRequestBody(dateForm!, timeForm!, guestSizeForm!);
      if (!authStore.token) {
        try {
          this.$patch({ isLoading: true });
          await authStore.getAndSetAuthToken();
        } catch (err) {
          console.log(err);
          this.$patch({ isLoading: false });
        }
        try {
          const searchId = await getSearchId(authStore.token, requestBody);
          this.$patch({ searchId: searchId.data.search_id });
          console.log(this.searchId);
        } catch (err) {
          this.$patch({ isLoading: false });
          return;
        }
      } else {
        try {
          this.$patch({ isLoading: true });
          const searchId = await getSearchId(authStore.token, requestBody);
          this.$patch({ searchId: searchId.data.search_id });
        } catch (err: unknown) {
          const errResponse = err as ApiError;
          if (errResponse.response?.data.message.includes("Token expired")) {
            try {
              await authStore.getAndSetAuthToken();
            } catch (err) {
              console.error(err);
            }
            try {
              const searchId = await getSearchId(authStore.token, requestBody);
              this.$patch({ searchId: searchId.data.search_id });
            } catch (err) {
              console.error(err);
            }
          } else {
            this.$patch({ isLoading: false });
          }
        }
      }

      try {
        const searchResponse = await getSearchRequest(
          authStore.token,
          this.searchId
        );
        this.$patch({
          isLoading: false,
          restaurants: searchResponse.data.posts,
        });
      } catch (err) {
        console.log(err);
        this.$patch({ isLoading: false });
      }
    },
  },
});
