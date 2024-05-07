<template>
  <img src="@/scripts/assets/img/crater-logo.png" />
</template>

<script setup>
defineProps({
  darkColor: {
    type: String,
    default: 'rgba(var(--color-primary-500), var(--tw-text-opacity))',
  },
  lightColor: {
    type: String,
    default: 'rgba(var(--color-primary-400), var(--tw-text-opacity))',
  },
})
</script>
