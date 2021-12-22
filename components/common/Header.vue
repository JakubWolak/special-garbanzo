<template>
  <header class="header">
    <div class="header__content">
      <figure class="header__logo">
        <img
          src="./../../static/logo.svg"
          alt="Jakub Wolak JavaScript Developer"
          class="header__logo__img"
        />
      </figure>
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
