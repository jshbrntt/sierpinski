import Scene from './../core/scene'
import SierpinskiView from './views/sierpinski-view'
import SierpinskiModel from './models/sierpinski-model'
import SierpinskiController from './controllers/sierpinski-controller'

export default class SierpinskiScene extends Scene {
  constructor (context) {
    super(context)
    let width = 800
    let depth = 6
    this._model = new SierpinskiModel(width, depth)
    this._view = new SierpinskiView(this._model)
    this._controller = new SierpinskiController(this._model, this._view)
    this.add(this._view)
    console.log(this._view.AABB)
  }
}
