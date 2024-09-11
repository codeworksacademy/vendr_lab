export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }
  get cardHTMLTemplate() {
    return `
      <div class="col-md-4 mb-3">
        <div class="rounded bg-dark text-light shadow">
          <img
            src="https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFjaG9zfGVufDB8fDB8fHww"
            alt="nachos" class="rounded-top">
          <div class="p-3 d-flex justify-content-between align-items-center">
            <div>
              <p class="mb-1">Food</p>
              <p class="mb-0">$4.25</p>
            </div>
            <div role="button">Buy</div>
          </div>
        </div>
      </div>
    `
  }
}