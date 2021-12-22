<template>
  <div class="animated-logo">
    <canvas ref="canvas" />
  </div>
</template>

<script>
import Vue from 'vue'

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y

    this.size = 2
    this.baseX = this.x
    this.baseY = this.y

    this.density = Math.random() * 25 + 1
  }

  draw({ ctx }) {
    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fill()
  }

  update({ mouse }) {
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y

    const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))

    const forceDirectionX = dx / distance
    const forceDirectionY = dy / distance

    const maxDistance = mouse.radius
    const force = (maxDistance - distance) / maxDistance

    const directionX = forceDirectionX * force * this.density
    const directionY = forceDirectionY * force * this.density

    if (distance < mouse.radius) {
      this.size = 1.5 + (mouse.radius - distance) / 80
    } else {
      this.size = 1.5
    }

    if (distance < mouse.radius && mouse.active) {
      this.x -= directionX
      this.y -= directionY
    } else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX
        this.x -= dx / 4
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY
        this.y -= dy / 4
      }
    }
  }
}

export default Vue.extend({
  name: 'AnimatedLogo',
  data() {
    return {
      mouse: {
        active: false,
        x: null,
        y: null,
        radius: 120,
      },

      maxDistance: 25,

      canvas: null,
      ctx: null,

      textCoordinates: null,

      particles: [],
      animationFrameId: null,
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')

    this.updateCanvasDimensions()
    window.onresize = this.updateCanvasDimensions

    this.canvas.onmousemove = this.updateMousePosition
    this.canvas.onmouseenter = () => {
      this.mouse.active = true
    }
    this.canvas.onmouseleave = () => {
      this.mouse.active = false
    }

    this.ctx.font = '20.8px Roboto Mono, monospace'
    this.ctx.fillText('Jakub', 7, 25)
    this.ctx.fillText('Wolak', 14, 47)

    this.textCoordinates = this.ctx.getImageData(0, 0, 76, 48)

    this.init()
    this.animate()
  },
  beforeDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId)
    }
  },
  methods: {
    init() {
      for (let y = 0, y2 = this.textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = this.textCoordinates.width; x < x2; x++) {
          if (
            this.textCoordinates.data[
              y * 4 * this.textCoordinates.width + x * 4 + 3
            ] > 128
          ) {
            const randX = Math.floor((Math.random() * 10 - 5) / 1.2)
            const randY = Math.floor((Math.random() * 10 - 5) / 1.2)

            const positionX = x * 10 + randX
            const positionY = y * 10 + randY

            this.particles.push(new Particle(positionX, positionY))
          }
        }
      }
    },
    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      this.connect()
      this.particles.forEach((x) => {
        x.draw({ ctx: this.ctx })
        x.update({ mouse: this.mouse })
      })

      this.animationFrameId = requestAnimationFrame(this.animate)
    },
    connect() {
      this.particles.forEach((a) => {
        this.particles.forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y

          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < this.maxDistance) {
            this.ctx.strokeStyle = 'black'
            this.ctx.lineWidth =
              2 * ((this.maxDistance - distance) / this.maxDistance)
            this.ctx.opacity = (this.maxDistance - distance) / this.maxDistance
            this.ctx.beginPath()
            this.ctx.moveTo(a.x, a.y)
            this.ctx.lineTo(b.x, b.y)

            this.ctx.stroke()
          }
        })
      })
    },
    updateCanvasDimensions() {
      this.canvas.width = this.canvas.parentElement.clientWidth
      this.canvas.height = this.canvas.parentElement.clientHeight
    },
    updateMousePosition({ x, y }) {
      const canvasPos = this.canvas.getBoundingClientRect()

      this.mouse.x = x - canvasPos.x
      this.mouse.y = y - canvasPos.y
    },
  },
})
</script>
