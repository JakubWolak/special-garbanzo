<template>
  <div class="main">
    <div class="main__description">
      <div class="about">
        <h4 class="about__header">
          Hi, I'm fullstack JS developer based in Poland.<br />Want to know
          something more?
        </h4>
      </div>
    </div>
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
