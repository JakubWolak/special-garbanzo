<template>
  <div class="animation">
    <svg class="animation__item">
      <g v-for="stream in streams" :key="stream.color">
        <text
          v-for="point in stream.points"
          :key="point.id"
          :x="point.x"
          :y="point.y"
          :fill-opacity="point.opacity"
          text-anchor="middle"
          class="animation__item__character"
        >
          {{ point.text }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import Vue from 'vue'
import { Stream } from '~/classes/stream'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      streams: [],
      intervalId: null,

      symbolSize: 18,
      fadeInterval: 1.6,
    }
  },
  mounted() {
    this.initStreams()
    this.intervalId = setInterval(
      () => this.animation(),
      window.innerWidth > 1200 ? 12 : 40
    )

    window.onresize = () => this.initStreams()
  },
  beforeDestroy() {
    if (this.intervalId) clearInterval(this.intervalId)
  },
  methods: {
    initStreams() {
      this.streams = []

      for (let x = 0; x < window.innerWidth / this.symbolSize - 1; x++) {
        const stream = new Stream({
          fadeInterval: this.fadeInterval,
          symbolSize: this.symbolSize,
        })
        stream.generatePoints(x * this.symbolSize, Stream.randomNumber(-600, 0))
        this.streams.push(stream)
      }
    },
    animation() {
      for (const stream of this.streams) {
        for (const point of stream.points) {
          point.animate({ windowHeight: window.innerHeight })
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.animation {
  width: 100%;
  height: 100%;

  background-color: #000;

  &__item {
    width: 100%;
    height: 100%;

    &__character {
      fill: rgb(229, 92, 92);
    }
  }
}
</style>
