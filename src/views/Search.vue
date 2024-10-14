<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRestaurantsStore } from '../store/restaurants.store';
import DatePicker from '../components/DatePicker.vue';
import { ref } from 'vue';
import Size from '../components/Size.vue';
import TimePicker from '../components/TimePicker.vue';

  const restaurantsStore = useRestaurantsStore();
  //const {isTrue} = storeToRefs(restaurantsStore);
  const test = ref<Date | null>(null);
  const test2 = ref<number | null>(null)
    const test3 = ref<string | null>(null)
  function checkForm() {
    console.log(test.value)
  }
</script>

<template>
  <header>
    <div class="img-container">
      <img
        src="/restaurant-background.jpg"
        alt="restaurant-background"
        width="200"
        height="200"
      />
    </div>
    <article class="header-content">
      <div class="title">
        <h1>Belgrade Restaurants</h1>
        <h2>Find restaurant to your liking</h2>
      </div>
      <form>
        <Size v-model="test2" :current-value="test2" />
        <TimePicker v-model="test3" />
        <DatePicker v-model="test" />
        <button @click="checkForm" type="button">Search</button>
      </form>
    </article>
  </header>
  <div class="restaurants-list">
    <h3>Restaurants</h3>
    Content
  </div>
</template>

<style scoped lang="scss">

header {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .header-content {
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  .title {
    color: #FFFFFF;
    text-align: center;
    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      @media (max-width: 768px) {
      font-size: 3rem;
    }
    }
    h2 {
      font-size: 2rem;
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }

  form {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    align-self: flex-end;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .img-container {
  position: absolute;
  width: inherit;
  height: inherit;
  z-index: -1;

  img {
    width: inherit;
    height: inherit;
    position: relative;
    z-index: -2;
  }
}

.img-container::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
}

.restaurants-list {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1.5rem;
  }
}
</style>
