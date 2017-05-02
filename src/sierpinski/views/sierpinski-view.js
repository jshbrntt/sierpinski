import window from 'window'
import View from './../../core/mvc/view'
import TriangleView from './triangle-view'
import TriangleModel from './../models/triangle-model'

export default class SierpinskiView extends View {
  constructor (model) {
    super(model)
    this._rendering = false
    this.render()
  }
  resize () {
    this.render()
  }
  render () {
    this._rendering = true
    this.children = []
    let model = new TriangleModel(this.model.width / Math.pow(2, this.model.depth), this.model.height / Math.pow(2, this.model.depth))
    for (let position of this.model._positions) {
      let world = this.localToWorld(position.clone())
      if (world.x > window.innerWidth / 2) continue
      if (world.x < window.innerWidth / -2) continue
      if (world.y > window.innerHeight / 2) continue
      if (world.y < window.innerHeight / -2) continue
      let view = new TriangleView(model)
      view.position.copy(position)
      this.add(view)
    }
    this._rendering = false
  }
  get rendering () {
    this._rendering
  }
}
