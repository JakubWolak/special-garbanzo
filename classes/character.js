export class Character {
  constructor({
    id,
    allowed,
    character,
    changes,
    x,
    y = 0,
    speed,
    screenHeight,
  }) {
    this.id = id
    this.x = x
    this.y = y
    this.allowedCharacters = allowed.split('')
    this.destinationCharacter = character
    this.character = character
    this.destination = screenHeight / 3

    this.speed = speed

    this.changes = changes
    this.setDuration()
    this.setOpacity()

    this.animate()
  }

  animate() {
    this.timeout()
    this.move()
  }

  setDuration() {
    this.duration = this.randomNumber(5, 100)
  }

  setOpacity() {
    this.opacity = this.randomNumber(5, 10) / 10
  }

  move() {
    this.y += this.speed

    if (this.y > this.destination) {
      this.y = this.destination
    }
  }

  timeout() {
    setTimeout(() => {
      this.changes--

      if (this.changes === 0) {
        this.character = this.destinationCharacter
        this.opacity = 1
      } else {
        this.setOpacity()
        const random = this.randomNumber(0, this.allowedCharacters.length - 1)
        this.character = this.allowedCharacters[random]
      }

      if (this.changes) {
        this.setDuration()
        this.timeout()
      }
    }, this.duration)
  }

  randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }
}
