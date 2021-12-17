import { Point } from './point'

export class Stream {
  constructor({ fadeInterval, symbolSize }) {
    this.fadeInterval = fadeInterval
    this.symbolSize = symbolSize

    this.pointCount = Stream.randomNumber(5, 28)
    this.speed = Stream.randomNumber(10, 16)
    this.points = []
  }

  generatePoints(x, y) {
    let opacity = 0.5
    for (let i = 0; i < this.pointCount; i++) {
      const point = new Point({
        id: this.pointCount * Math.random(),
        x,
        y,
        speed: this.speed,
        opacity,
      })

      this.points.push(point)

      opacity = 1 - i / this.pointCount / this.fadeInterval
      y -= this.symbolSize
    }
  }

  static randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }
}
