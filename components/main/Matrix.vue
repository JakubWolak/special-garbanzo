<template>
  <div class="canvas">
    <canvas ref="canvas" class="matrix__display" />
  </div>
</template>

<script>
import Vue from 'vue'

class Point {
  constructor({ x, y, opacity, speed, color }) {
    this.x = x
    this.y = y
    this.opacity = opacity
    this.speed = speed
    this.color = color
    this.character = this.randomChar()
  }

  update() {
    this.y += this.speed

    if (Math.random() < 0.12) {
      this.character = this.randomChar()
    }
  }

  draw({ ctx }) {
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = this.color
    ctx.fillText(this.character, this.x, this.y)

    ctx.fill()
  }

  randomChar() {
    const code = this.randomNumber({ min: 48, max: 122 })
    return String.fromCharCode(code)
  }

  randomNumber({ min, max }) {
    return Math.round(Math.random() * (max - min) + min)
  }
}

class Stream {
  constructor({ fadeInterval, color, ctx, symbolSize }) {
    this.fadeInterval = fadeInterval
    this.pointCount = Stream.randomNumber({ min: 6, max: 30 })

    this.symbolSize = symbolSize
    this.speed = Stream.randomNumber({ min: 2, max: 5 })
    this.points = []
    this.color = color
    this.ctx = ctx

    this.space = 1
  }

  generatePoints(x, y) {
    let opacity = Math.random()

    for (let i = 0; i < this.pointCount; i++) {
      const point = new Point({
        x,
        y,
        opacity,
        speed: this.speed,
        color: this.color,
      })

      this.points.push(point)

      opacity = 1 / Math.sqrt(i + 2)
      y -= this.symbolSize
    }
  }

  update() {
    this.points.forEach((point) => point.update())
  }

  draw() {
    this.points.forEach((point) => point.draw({ ctx: this.ctx }))
  }

  static randomNumber({ min, max }) {
    return Math.round(Math.random() * (max - min) + min)
  }
}

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Matrix',
  data() {
    return {
      animationRequestId: null,
      streams: [],
      ctx: null,
      canvas: null,

      fadeInterval: 0.1,
      symbolSize: 17,

      streamsAmount: 100,
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas

    this.canvas.width = this.canvas.parentElement.clientWidth
    this.canvas.height = this.canvas.parentElement.clientHeight

    this.ctx = this.canvas.getContext('2d')
    this.ctx.font = this.symbolSize - 1 + 'px Roboto Mono, bold'

    // const streamsAmount = Math.floor(this.canvas.width / this.symbolSize)

    for (let x = 0; x < this.streamsAmount; x++) {
      const stream = new Stream({
        fadeInterval: this.fadeInterval,
        color: 'rgb(12,244,21)',
        ctx: this.ctx,
        symbolSize: this.symbolSize,
      })
      stream.generatePoints(
        Math.random() * this.canvas.width,
        Stream.randomNumber({ min: -600, max: 0 })
      )

      this.streams.push(stream)
    }

    this.animate()
  },
  beforeDestroy() {
    if (this.animationRequestId) {
      cancelAnimationFrame(this.animationRequestId)
    }
  },
  methods: {
    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.streams.forEach((stream) => {
        stream.update()
        stream.draw()
      })

      this.animationRequestId = requestAnimationFrame(() => this.animate())
    },
  },
})
</script>

<style lang="scss" scoped>
.canvas {
  width: 100%;
  height: 100%;

  background-color: #000;

  &__screen {
    width: 100%;
    height: 100%;
  }
}
</style>
