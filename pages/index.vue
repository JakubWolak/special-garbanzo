<template>
  <div class="main">
    <MatrixAnimation />
  </div>
</template>

<script>
import Vue from 'vue'
import MatrixAnimation from '~/components/MatrixAnimation'

export default Vue.extend({
  name: 'IndexPage',
  components: { MatrixAnimation },
  data() {
    return {
      streams: [],
      tick: 0,
      intervalId: null,
    }
  },
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;500;600&family=Poppins:wght@100;200;300;400;500;600;700&family=Roboto+Mono:wght@200;300;400;500&display=swap');

.main {
  font-family: Roboto Mono;
  width: 100vw;
  height: 100vh;
}
</style>
