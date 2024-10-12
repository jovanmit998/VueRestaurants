<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRestaurantsStore } from '../store/restaurants.store';
import DatePicker from '../components/DatePicker.vue';
import { ref } from 'vue';

  const restaurantsStore = useRestaurantsStore();
  const {isTrue} = storeToRefs(restaurantsStore);
  const test = ref<Date | null>(null);
  function checkForm() {
    console.log(test.value)
  }
</script>

<template>
  <button class="test" @click="restaurantsStore.toggle()">
    Toggle {{ isTrue }}
  </button>
  <form>
    <DatePicker v-model="test" />
    <button @click="checkForm" type="button">Submit</button>
  </form>
  {{ test }}
</template>

<style scoped lang="scss"></style>
