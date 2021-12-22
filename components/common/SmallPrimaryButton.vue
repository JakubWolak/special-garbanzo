<template>
  <button class="primary-button primary-button--small">
    <div class="primary-button__top primary-button__top--small">
      <div class="primary-button__label primary-button__label--small">
        <slot />
      </div>
      <div class="primary-button__border primary-button__border--left" />
      <div class="primary-button__border primary-button__border--top" />
      <div class="primary-button__border primary-button__border--right" />
      <div class="primary-button__border primary-button__border--left" />
    </div>
  </button>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'PrimaryButton',
})
</script>
