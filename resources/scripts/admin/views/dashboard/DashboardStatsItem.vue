<template>
  <router-link
    v-if="!loading"
    class="
      relative
      flex
      justify-between
      p-3
      bg-white
      rounded
      shadow
      hover:bg-gray-50
      xl:p-4
      lg:col-span-2
    "
    :class="{ 'lg:!col-span-3': large }"
    :to="route"
  >
    <div>
      <span class="text-xl font-semibold leading-tight text-black xl:text-3xl">
        <slot />
      </span>
      <span class="block mt-1 text-sm leading-tight text-gray-500 xl:text-lg">
        {{ label }}
      </span>
    </div>
    <div class="flex items-center">
      <component :is="iconComponent" class="w-10 h-10 xl:w-12 xl:h-12" @change="emitChange" />
    </div>
  </router-link>

  <StatsCardPlaceholder v-else-if="large" />

  <StatsCardSmPlaceholder v-else />
</template>


<script setup>
import StatsCardPlaceholder from './DashboardStatsPlaceholder.vue'
import StatsCardSmPlaceholder from './DashboardStatsSmPlaceholder.vue'

const emit = defineEmits(['change'])
defineProps({
  iconComponent: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  route: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  switch:{
    type:Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
})
function emitChange(data){
  emit('change',data)
}
</script>
