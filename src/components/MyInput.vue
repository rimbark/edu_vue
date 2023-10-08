<script lang="ts" setup="">
import {MyInputEmits, MyInputProps} from "./myImport.types.ts";

defineProps<MyInputProps>()
const emit = defineEmits<MyInputEmits>()
const updateValue = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).value
  emit('update:modelValue', newValue)
}
</script>

<template>
  <input
    :value="modelValue"
    type="text"
    @input="updateValue"
  >
</template>

<style scoped>

</style>