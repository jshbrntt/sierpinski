import document from 'document'
import { EventDispatcher } from 'three'
import KeyboardEvent from './keyboard-event'

export default class Keyboard extends EventDispatcher {
  constructor () {
    super()
    document.addEventListener('keydown', this.onKeyDown.bind(this), false)
    document.addEventListener('keyup', this.onKeyUp.bind(this), false)
  }
  onKeyDown (event) {
    this.dispatchEvent({ type: KeyboardEvent.PRESS, key: event.key })
  }
  onKeyUp (event) {
    this.dispatchEvent({ type: KeyboardEvent.RELEASE, key: event.key })
  }
}
