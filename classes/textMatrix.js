import { Character } from './character'

export class TextMatrix {
  constructor({ text }) {
    this.text = text
    this.displayText = text
    this.length = text.length

    this.characters = []

    this.setCharacters()
  }

  setCharacters() {
    const split = this.text.split('')

    for (const [letter, id] of split) {
      const character = new Character({
        id,
        character: letter,
        // allowed: this.text,
        allowed:
          '1234567890-=][poiuytrewq;lkjhgfdsa/.,mnbvcxz*&^%$#@:LKJHGFDSA}{POIUYTREWQ?><MNBVCXZ',
        changes: this.randomNumber(5, 60),
      })

      this.characters.push(character)
    }
  }

  randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }
}
