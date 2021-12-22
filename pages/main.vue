<template>
  <div class="main">
    <div class="main__description">
      <div class="about">
        <h4 class="about__header">
          Hi, I'm fullstack JS developer based in Poland.<br />Want to know
          something more?
        </h4>
        <div class="about__buttons">
          <SecondaryButton>Projects</SecondaryButton>
          <PrimaryButton>About me</PrimaryButton>
        </div>
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
import PrimaryButton from '@/components/common/PrimaryButton'
import SecondaryButton from '@/components/common/SecondaryButton'

export default Vue.extend({
  name: 'MainPage',
  components: { SecondaryButton, PrimaryButton, AnimatedLogo },
})
</script>
