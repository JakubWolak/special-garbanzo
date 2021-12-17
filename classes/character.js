export class Character {
  constructor({ id, allowed, character, changes }) {
    this.id = id
    this.allowedCharacters = allowed.split('')
    this.destinationCharacter = character
    this.character = character

    this.changes = changes
    this.setDuration()
    this.setOpacity()

    this.animate()
  }

  animate() {
    this.timeout()
  }

  setDuration() {
    this.duration = this.randomNumber(5, 100)
  }

  setOpacity() {
    this.opacity = this.randomNumber(5, 10) / 10
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
