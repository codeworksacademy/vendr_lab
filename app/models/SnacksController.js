import { AppState } from "../AppState.js"
import { snacksService } from "../services/SnacksService.js"
import { setHTML } from "../utils/Writer.js"

export class SnacksController {
  constructor() {
    console.log('Snacks Controller Loaded 🌮');
    this.drawSnacks()
  }

  drawSnacks() {
    const snacks = AppState.snacks
    let snacksHTML = ''
    snacks.forEach(snack => snacksHTML += snack.cardHTMLTemplate)
    setHTML('snacks-list', snacksHTML)
  }

  /**
   * @param {string} snackName
   */
  buySnack(snackName) {
    snacksService.buySnack(snackName)
  }
}