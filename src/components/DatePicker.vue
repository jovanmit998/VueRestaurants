<script setup lang="ts">
import {ElDatePicker} from 'element-plus'

//   function test(selectedDate: Date) {
//     // if(!selectedDate) return;
//     // const year = selectedDate.getFullYear();
//     // const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
//     // const day = String(selectedDate.getDate()).padStart(2, '0');
//     // const date = `${year}${month}${day}`;
//     // console.log(date)
//   }
</script>

<template>
  <el-date-picker
    style="width: 12rem;"
    type="date"
    placeholder="Pick a day"
    :size="'large'"
  />
</template>

<style scoped lang="scss"></style>
