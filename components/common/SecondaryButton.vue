<template>
  <button class="secondary-button">
    <slot />
  </button>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SecondaryButton',
})
</script>
