export class Snack {
  /**
   * @param {{ name: string; price: number; imgUrl: string; }} data
   */
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }
  get cardHTMLTemplate() {
    return `
      <div class="col-md-4 mb-3">
        <div class="rounded bg-dark text-light shadow">
          <img src="${this.imgUrl}" alt="${this.name}" class="rounded-top">
          <div class="p-3 d-flex justify-content-between align-items-center">
            <div>
              <p class="mb-1">${this.name}</p>
              <p class="mb-0">${this.priceAsCurrency}</p>
            </div>
            <div onclick="app.SnacksController.buySnack('${this.name}')" role="button">Buy</div>
          </div>
        </div>
      </div>
    `
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(this.price)
  }
}