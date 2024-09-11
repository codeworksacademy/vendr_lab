import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

export class SnacksController {
  constructor() {
    this.drawSnacks()
  }

  drawSnacks() {
    const snacks = AppState.snacks
    let snacksHTML = ''
    snacks.forEach(snack => snacksHTML += snack.cardHTMLTemplate)
    setHTML('snacks-list', snacksHTML)
  }
}