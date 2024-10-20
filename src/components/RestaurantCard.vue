<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
title: string;
score: string;
subCardTitle: string;
subCardSubtitle: string;
}>();

const isTextShown = ref(true);
</script>

<template>
  <div class="card">
    <div>
      <h2>{{title}}</h2>
      <p>Rating: {{ score }}</p>
    </div>
    <div class="right-side">
      <p>{{ isTextShown ? 'Show me less' : 'Show me more' }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
    display: flex;
    align-items: center;
    padding: 12px;
    border: 1px solid rgb(226, 223, 223);
    border-radius: 8px;
    width: 100%;
}

.right-side {
    margin-left: auto;
}
</style>
