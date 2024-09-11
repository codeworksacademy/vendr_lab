import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  snacks = [
    new Snack({
      name: 'Nachos',
      price: 4,
      imgUrl: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFjaG9zfGVufDB8fDB8fHww'
    }),
    new Snack({
      name: 'Hamburger',
      price: 3,
      imgUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww'
    }),
    new Snack({
      name: 'Tacos',
      price: 2.25,
      imgUrl: 'https://images.unsplash.com/photo-1524412529635-a258ed66c010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D'
    }),
    new Snack({
      name: 'Taquitos',
      price: 6.75,
      imgUrl: 'https://images.unsplash.com/photo-1679605097294-ad339b020c0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5jaGlsYWRhfGVufDB8fDB8fHww'
    }),
    new Snack({
      name: 'Hot Dog',
      price: 1.50,
      imgUrl: 'https://images.unsplash.com/photo-1613482084286-41f25b486fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D'
    }),
    new Snack({
      name: 'Spaghetti',
      price: 8.50,
      imgUrl: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFzdGF8ZW58MHx8MHx8fDA%3D'
    }),
    new Snack({
      name: 'Ravioli',
      price: 9.75,
      imgUrl: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF2aW9saXxlbnwwfHwwfHx8MA%3D%3D'
    }),
    new Snack({
      name: 'Dumplings',
      price: 5,
      imgUrl: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVtcGxpbmdzfGVufDB8fDB8fHww'
    })
  ]
  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())