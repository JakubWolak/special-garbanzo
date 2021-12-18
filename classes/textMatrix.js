import { Character } from './character'

export class TextMatrix {
  constructor({ text, screenHeight }) {
    this.text = text
    this.displayText = text
    this.length = text.length
    this.screenHeight = screenHeight

    this.characters = []

    this.characterWidth = 18

    this.setCharacters()
  }

  setCharacters() {
    const split = this.text.split('')

    for (const [letter, id] of split) {
      const character = new Character({
        id,
        character: letter,
        x: this.characterWidth,
        y: this.randomNumber(-100, -30),
        speed: this.randomNumber(8, 15),
        // allowed: this.text,
        allowed:
          '1234567890-=][poiuytrewq;lkjhgfdsa/.,mnbvcxz*&^%$#@:LKJHGFDSA}{POIUYTREWQ?><MNBVCXZ',
        changes: this.randomNumber(10, 70),
        screenHeight: this.screenHeight,
      })

      this.characters.push(character)
    }
  }

  animate() {
    for (const character of this.characters) {
      character.move()
    }
  }

  randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }
}
