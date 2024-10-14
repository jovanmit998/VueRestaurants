<script setup lang="ts">
import {ElInputNumber} from 'element-plus'

defineProps<{
 currentValue: number | null,
}>()
</script>

<template>
  <el-input-number :min="1" :size="'large'" style="width: 12rem;">
    <template #suffix>
      <span>Guest{{ currentValue !== 1 && currentValue ? 's' : '' }}</span>
    </template>
  </el-input-number>
</template>

<style scoped lang="scss"></style>
