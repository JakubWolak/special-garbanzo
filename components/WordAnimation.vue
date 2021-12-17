<template>
  <div class="animation">
    <div class="animation__item">
      <span
        v-for="character in matrix.characters"
        :key="character.id + character.character"
        class="animation__item__character"
        :style="{ opacity: character.opacity }"
      >
        {{ character.character }}
      </span>
    </div>
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
    }
  },
  mounted() {
    this.matrix = new TextMatrix({
      text: this.word,
    })
  },
})
</script>

<style lang="scss" scoped>
.animation {
  width: max-content;
  height: max-content;

  display: flex;
  place-content: center;

  &__item {
    width: max-content;
    height: min-content;
    max-width: 100%;

    display: flex;
    flex-wrap: nowrap;

    &__character {
      color: rgb(229, 92, 92);
      font-size: 20px;
      font-weight: bold;

      padding: 5px;

      display: flex;
      place-content: center;
    }
  }
}
</style>
