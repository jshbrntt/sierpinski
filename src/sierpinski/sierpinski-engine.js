import Mouse from './../core/services/mouse'
import Touch from './../core/services/touch'
import Keyboard from './../core/services/keyboard'
import Services from './../core/services'
import Engine from './../core/engine'
import SierpinskiContext from './sierpinski-context'

export default class SierpinskiEngine extends Engine {
  constructor () {
    super(SierpinskiContext)
    Services.provide('Mouse', new Mouse())
    Services.provide('Touch', new Touch())
    Services.provide('Keyboard', new Keyboard())
    this.start()
  }
}
