import { defineStore } from "pinia";

interface RestaurantsStore {
  validationErrors: {
    dateError: boolean;
    timeError: boolean;
    guestSizeError: boolean;
  };
}

interface RestaurantsStoreState {
  validationErrors: RestaurantsStore["validationErrors"];
  $patch: (partialState: Partial<RestaurantsStore>) => void;
}

interface ValidationErrors {
  dateError: boolean;
  timeError: boolean;
  guestSizeError: boolean;
}

export const useRestaurantsStore = defineStore("restaurantsStore", {
  state: (): RestaurantsStore => ({
    validationErrors: {
      dateError: false,
      timeError: false,
      guestSizeError: false,
    },
  }),
  actions: {
    submitForm(
      dateForm: Date | null,
      timeForm: string | null,
      guestSizeForm: number | null
    ) {
      resetForm(this);
      validateForm(this, dateForm, timeForm, guestSizeForm);
      if (
        Object.keys(this.validationErrors).some(
          (value) => this.validationErrors[value as keyof ValidationErrors]
        )
      ) {
        console.log("ERROR");
      }
    },
  },
});

const validateForm = (
  store: RestaurantsStoreState,
  dateForm: Date | null,
  timeForm: string | null,
  guestSizeForm: number | null
) => {
  if (!dateForm)
    store.$patch({
      validationErrors: { ...store.validationErrors, dateError: true },
    });
  if (!timeForm)
    store.$patch({
      validationErrors: { ...store.validationErrors, timeError: true },
    });
  if (!guestSizeForm)
    store.$patch({
      validationErrors: { ...store.validationErrors, guestSizeError: true },
    });
};

const resetForm = (store: RestaurantsStoreState) => {
  store.$patch({
    validationErrors: {
      dateError: false,
      guestSizeError: false,
      timeError: false,
    },
  });
};
