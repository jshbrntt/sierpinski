import { Geometry, Points, PointsMaterial } from 'three'
import View from './../../core/mvc/view'
import TriangleView from './triangle-view'
import TriangleModel from './../models/triangle-model'

export default class SierpinskiView extends View {
  constructor (model) {
    super(model)
    this.render()
  }
  render () {
    let model = new TriangleModel(this.model.width / Math.pow(2, this.model.depth), this.model.height / Math.pow(2, this.model.depth))
    for (let position of this.model._positions) {
      let view = new TriangleView(model)
      view.position.copy(position)
      this.add(view)
    }
    // var dotGeometry = new Geometry()
    // dotGeometry.vertices = this.model.positions
    // var dotMaterial = new PointsMaterial({ size: 1, sizeAttenuation: false, color: 0x000000 })
    // var dot = new Points(dotGeometry, dotMaterial)
    // this.add(dot)
  }
}
