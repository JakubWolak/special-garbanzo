<template>
  <div class="layout-default">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '../components/common/Header'

export default Vue.extend({
  name: 'LayoutDefault',
  components: {
    Header,
  },
})
</script>
