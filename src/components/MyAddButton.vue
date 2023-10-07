<script lang="ts" setup>
defineEmits(['click'])
</script>

<template>
  <button
    class="addButton"
    @click="$emit('click')"
  >
    add in todo list
  </button>
</template>

<style scoped>
.addButton {
  margin-left: 10px;
}
</style>