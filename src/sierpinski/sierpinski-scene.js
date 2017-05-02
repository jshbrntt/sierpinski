import Scene from './../core/scene'
import SierpinskiView from './views/sierpinski-view'
import SierpinskiModel from './models/sierpinski-model'

export default class SierpinskiScene extends Scene {
  constructor (context) {
    super(context)
    let size = 800
    let depth = 7
    this._sierpinski = new SierpinskiView(new SierpinskiModel(size, depth))
    this.add(this._sierpinski)
  }
}
