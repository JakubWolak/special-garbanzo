<template>
  <div class="main">
    <div class="main__description">
      <div class="about">
        <h4 class="about__header">
          Hi, I'm fullstack JS developer based in Poland.<br />Want to know
          something more?
        </h4>
        <div class="about__buttons">
          <CommonSecondaryButton>Projects</CommonSecondaryButton>
          <CommonPrimaryButton>About me</CommonPrimaryButton>
        </div>
      </div>
    </div>
    <div class="main__logo">
      <MainAnimatedLogo />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'MainPage',
})
</script>
