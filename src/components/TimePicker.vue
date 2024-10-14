<script setup lang="ts">
import {ElTimeSelect} from 'element-plus'
</script>

<template>
  <el-time-select
    :size="'large'"
    style="width: 12rem"
    placeholder="Select time"
    start="00:00"
    step="00:30"
    end="23:59"
  />
</template>

<style scoped lang="scss"></style>
