import Promise from 'promise'
import { Object3D, Box3 } from 'three'

export default class View extends Object3D {
  constructor (model) {
    if (!model) {
      throw new ReferenceError('View requires a model to be passed.')
    }
    super()
    this._model = model
  }
  resize (width, height) {
    return this.children
      .filter(child => child instanceof View)
      .map(child => child.resize())
  }
  update () {
    return Promise.all(
      this.children
        .filter(child => child instanceof View)
        .map(child => child.update())
    )
  }
  get model () {
    return this._model
  }
  get AABB () {
    return new Box3().setFromObject(this)
  }
}
