<script setup lang="ts">
import {ElTimeSelect} from 'element-plus';
import { computed } from 'vue';

const props = defineProps<{
 isValidationError: boolean
}>();

const emit = defineEmits<{
  (e: 'timePickerChanged', payload: string | null): void
}>()

const componentStyles = computed(() => ({
  width: '12rem',
  border: props.isValidationError ? '1px solid red' : 'none'
}))
</script>

<template>
  <el-time-select
    :size="'large'"
    :style="componentStyles"
    placeholder="Select time"
    start="00:00"
    step="00:30"
    end="23:59"
    @change="emit('timePickerChanged', $event)"
  />
</template>

<style scoped lang="scss"></style>
