<template>
  <div class="main">
    <WordAnimation
      class="main__word-matrix"
      :word="'Grzegorz Brzęczyszczykiewicz'"
    />
    <MatrixAnimation class="main__matrix" />
  </div>
</template>

<script>
import Vue from 'vue'
import MatrixAnimation from '~/components/MatrixAnimation'
import WordAnimation from '~/components/WordAnimation'

export default Vue.extend({
  name: 'IndexPage',
  components: { MatrixAnimation, WordAnimation },
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

  position: relative;

  &__word-matrix {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
}
</style>
