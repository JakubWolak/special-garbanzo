<template>
  <div class="main">
    <div class="main__description"></div>
    <div class="main__logo">
      <AnimatedLogo />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import AnimatedLogo from '@/components/main/AnimatedLogo'

export default Vue.extend({
  name: 'MainPage',
  components: { AnimatedLogo },
})
</script>
