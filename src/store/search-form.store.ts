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

export const useSearchFormStore = defineStore("searchFormStore", {
  state: (): RestaurantsStore => ({
    validationErrors: {
      dateError: false,
      timeError: false,
      guestSizeError: false,
    },
  }),
  actions: {
    validateForm(
      dateForm: Date | null,
      timeForm: string | null,
      guestSizeForm: number | null
    ) {
      validateDate(dateForm, this);
      validateTime(timeForm, this);
      validateGuestSize(guestSizeForm, this);
    },
    isErrorPresent() {
      return Object.keys(this.validationErrors).some(
        (value) => this.validationErrors[value as keyof ValidationErrors]
      );
    },
    updateGuestSizeValidity(guestSize: number | null) {
      if (guestSize)
        this.$patch({
          validationErrors: { ...this.validationErrors, guestSizeError: false },
        });
    },
    updateDatePickerValidity(datePicker: Date | null) {
      const today = new Date();
      if (datePicker && datePicker > today)
        this.$patch({
          validationErrors: { ...this.validationErrors, dateError: false },
        });
    },
    updateTimePickerValidity(timePicker: string | null) {
      if (timePicker)
        this.$patch({
          validationErrors: { ...this.validationErrors, timeError: false },
        });
    },
  },
});

const validateDate = (date: Date | null, store: RestaurantsStoreState) => {
  const today = new Date();
  if (!date || date < today)
    store.$patch({
      validationErrors: { ...store.validationErrors, dateError: true },
    });
  else
    store.$patch({
      validationErrors: { ...store.validationErrors, dateError: false },
    });
};

const validateTime = (time: string | null, store: RestaurantsStoreState) => {
  if (!time)
    store.$patch({
      validationErrors: { ...store.validationErrors, timeError: true },
    });
  else
    store.$patch({
      validationErrors: { ...store.validationErrors, timeError: false },
    });
};

const validateGuestSize = (
  guestSize: number | null,
  store: RestaurantsStoreState
) => {
  if (!guestSize)
    store.$patch({
      validationErrors: { ...store.validationErrors, guestSizeError: true },
    });
  else
    store.$patch({
      validationErrors: { ...store.validationErrors, guestSizeError: false },
    });
};
