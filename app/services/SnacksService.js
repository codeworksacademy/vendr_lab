import { AppState } from "../AppState.js"

class SnacksService {
  /**
   * @param {string} snackName
   */
  buySnack(snackName) {
    const snackToBuy = AppState.snacks.find(snack => snack.name == snackName)
    if (snackToBuy.price > AppState.money) {
      return
    }
    AppState.money -= snackToBuy.price
  }
}

export const snacksService = new SnacksService()