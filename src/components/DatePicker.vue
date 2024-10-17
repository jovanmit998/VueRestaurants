<script setup lang="ts">
import {ElDatePicker} from 'element-plus'
import { computed } from 'vue';

//   function test(selectedDate: Date) {
//     // if(!selectedDate) return;
//     // const year = selectedDate.getFullYear();
//     // const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
//     // const day = String(selectedDate.getDate()).padStart(2, '0');
//     // const date = `${year}${month}${day}`;
//     // console.log(date)
//   }
const props = defineProps<{
 isValidationError: boolean
}>();

const componentStyles = computed(() => ({
  width: '12rem',
  border: props.isValidationError ? '1px solid red' : 'none'
}))
</script>

<template>
  <el-date-picker
    :style="componentStyles"
    type="date"
    placeholder="Pick a day"
    :size="'large'"
  />
</template>

<style scoped lang="scss"></style>
