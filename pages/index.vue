<template>
  <div class="main">
    <WordAnimation v-once class="main__word-matrix" :word="'Jakub Wolak'" />
    <MatrixAnimation v-once class="main__matrix" />
    <div class="text">
      <div class="collapse" />
      <p>Fullstack JS Developer</p>
    </div>

    <ArrowButton class="main__button" />
  </div>
</template>

<script>
import Vue from 'vue'
import MatrixAnimation from '~/components/main/MatrixAnimation'
import WordAnimation from '~/components/main/WordAnimation'
import ArrowButton from '~/components/main/ArrowButton'

export default Vue.extend({
  name: 'IndexPage',
  components: { ArrowButton, MatrixAnimation, WordAnimation },
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

  &__button {
    position: absolute;

    top: 75vh;
    left: 50vw;

    transform: translateX(-50%);
  }
}

.text {
  position: absolute;
  width: max-content;

  background: transparent;

  > p {
    color: white;
    margin: 0;
  }

  > .collapse {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: rgb(229, 92, 92);

    animation: ease-out disappear 1s forwards;
    animation-delay: 3.6s;

    @keyframes disappear {
      0% {
        width: 100%;
      }
      30% {
        opacity: 1;
      }
      100% {
        width: 0;
        opacity: 0;
      }
    }
  }

  top: 40vh;
  left: -100%;

  transform: translate(-50%, -50%);
  animation: ease-out appear 1s forwards;
  animation-delay: 2.2s;

  @keyframes appear {
    from {
      left: -100%;
    }
    to {
      left: 50vw;
    }
  }
}
</style>
