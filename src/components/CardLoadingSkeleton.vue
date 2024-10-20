<script setup lang="ts">
import { ElSkeleton } from 'element-plus'
</script>

<template>
  <el-skeleton
    :rows="2"
    animated
    v-for="item in [0, 1, 2, 3, 4]"
    style="width: 40%; margin-bottom: 12px; border: 1px solid rgb(226, 223, 223); border-radius: 8px; padding: 12px;"
  />
</template>

<style scoped lang="scss"></style>
