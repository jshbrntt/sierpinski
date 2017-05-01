import document from 'document'
import window from 'window'
import { WebGLRenderer } from 'three'

export default class Engine {
  constructor (contextClass) {
    this._contextClass = contextClass
    this._renderer = new WebGLRenderer()
    this.isStarted = false
    this._width = window.innerWidth
    this._height = window.innerHeight
  }
  get renderer () {
    return this._renderer
  }
  resize () {
    this._width = window.innerWidth
    this._height = window.innerHeight
    this._renderer.setSize(this._width, this._height)
    this._context.resize(this._width, this._height)
  }
  start () {
    if (!this._context) {
      document.body.appendChild(this._renderer.domElement)
      this._context = new this._contextClass(this, this._width, this._height)
      window.addEventListener('resize', this.resize.bind(this))
      this.resize()
      this._context.start()
    }
    this.isStarted = true
  }
  stop () {
    this.isStarted = false
  }
}
