<script setup lang="ts">
import {ElInputNumber} from 'element-plus'
import { computed } from 'vue';

const props = defineProps<{
 currentValue: number | null,
 isValidationError: boolean
}>();

const emit = defineEmits<{
  (e: 'guestSizeChange', payload: number | null): void
}>()

const componentStyles = computed(() => ({
  width: '12rem',
  border: props.isValidationError ? '1px solid red' : 'none'
}))
</script>

<template>
  <el-input-number
    :min="1"
    :size="'large'"
    :style="componentStyles"
    @change="emit('guestSizeChange', currentValue)"
  >
    <template #suffix>
      <span>Guest{{ currentValue !== 1 && currentValue ? 's' : '' }}</span>
    </template>
  </el-input-number>
</template>

<style scoped lang="scss"></style>
