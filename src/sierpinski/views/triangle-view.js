import { Mesh, MeshBasicMaterial, FrontSide } from 'three'
import View from './../../core/mvc/view'

export default class TriangleView extends View {
  constructor (model) {
    super(model)
    this._triangle = new Mesh(model._geometry, TriangleView.MATERIAL)
    this.add(this._triangle)
  }
}

TriangleView.MATERIAL = new MeshBasicMaterial({
  color: 0x000000,
  side: FrontSide
})
