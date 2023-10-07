<script lang="ts" setup>
defineEmits(['click'])
defineProps<{
  hideCompleted: boolean
}>()
</script>

<template>
  <button @click="$emit('click')">
    {{ !hideCompleted ? 'Hide completed' : 'Show all' }}
  </button>
</template>

<style scoped>

</style>