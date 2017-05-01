import { Scene as ThreeScene } from 'three'

export default class Scene extends ThreeScene {
  constructor (context) {
    super()
    this._context = context
  }
  resize (width = this._context.renderer.domElement.width, height = this._context.renderer.domElement.height) {
    for (let child of this.children) {
      if ('resize' in child) {
        child.resize(width, height)
      }
    }
  }
  update () {
    for (let child of this.children) {
      if ('update' in child) {
        child.update()
      }
    }
  }
  get context () {
    return this._context
  }
}
