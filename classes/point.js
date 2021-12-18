export class Point {
  constructor({ id, x, y, speed, opacity }) {
    this.id = id
    this.x = x
    this.y = y
    this.text = this.randomChar()
    this.opacity = opacity
    this.speed = speed
  }

  animate() {
    this.y += this.speed

    if (Math.random() < 0.2) {
      const rand = Math.random().toString(36)
      this.text = rand[Math.floor(rand.length * Math.random())]
      this.text = this.randomChar()
    }
  }

  randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

  randomChar() {
    const code = this.randomNumber(48, 122)
    return String.fromCharCode(code)
  }
}
