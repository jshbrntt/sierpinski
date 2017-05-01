import Context from './../core/context'
import SierpinskiScene from './sierpinski-scene'

export default class SierpinskiContext extends Context {
  constructor (renderer) {
    super(renderer)
  }
  start () {
    super.start()
    this.scene = new SierpinskiScene(this)
  }
  _update () {
    super._update()
  }
}
