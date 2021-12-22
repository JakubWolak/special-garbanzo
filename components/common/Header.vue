<template>
  <header class="header">
    <div class="header__content">
      <figure class="header__logo">
        <img
          v-if="false"
          src="./../../static/logo.svg"
          alt="Jakub Wolak JavaScript Developer"
          class="header__logo__img"
        />
      </figure>

      <nav class="header__navigation">
        <div class="header__navigation__button">About me</div>
        <div class="header__navigation__button">Skills</div>
        <div class="header__navigation__button">Projects</div>
        <CommonSmallPrimaryButton>Contact</CommonSmallPrimaryButton>
      </nav>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderDefault',
  layout: 'default',
})
</script>
