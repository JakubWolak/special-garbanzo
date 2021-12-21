<template>
  <div class="animation">
    <svg class="animation__item">
      <g
        v-for="letter in matrix.characters"
        :key="letter.id"
        class="animation__item__word"
      >
        <text
          :x="leftMargin + letter.x * matrix.characters.indexOf(letter)"
          :y="letter.y"
          :fill-opacity="letter.opacity"
          text-anchor="middle"
          class="animation__item__character"
        >
          {{ letter.character }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import Vue from 'vue'
import { TextMatrix } from '~/classes/textMatrix'

export default Vue.extend({
  name: 'WordAnimation',
  props: {
    word: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      matrix: [],
      leftMargin: 0,

      intervalId: null,
    }
  },
  mounted() {
    setTimeout(() => {
      this.initMatrix()

      this.intervalId = setInterval(() => this.animation(), 40)
      window.onresize = () => this.initMatrix()
    }, 2500)
  },
  methods: {
    initMatrix() {
      this.matrix = new TextMatrix({
        text: this.word,
        screenHeight: window.innerHeight,
      })

      this.leftMargin =
        window.innerWidth / 2 -
        (this.matrix.characters[0].x * (this.matrix.characters.length - 0.8)) /
          2
    },
    animation() {
      this.matrix.animate()
    },
  },
})
</script>

<style lang="scss" scoped>
.animation {
  width: 100%;
  height: 100%;

  display: flex;
  place-content: center;

  &__item {
    width: 100%;
    height: 100%;
    max-width: 100%;

    display: flex;
    place-items: center;
    flex-wrap: nowrap;

    &__word {
      width: max-content;
      height: max-content;
    }

    &__character {
      fill: rgb(229, 92, 92);
      font-size: 28px;
      font-weight: lighter;
    }
  }
}
</style>
