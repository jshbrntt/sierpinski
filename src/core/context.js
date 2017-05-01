import window from 'window'
import document from 'document'
import { OrthographicCamera } from 'three'
import Stats from 'stats.js'

export default class Context {
  constructor (engine, width, height, backgroundColor = 0xffffff) {
    this._engine = engine
    this._width = width
    this._height = height

    this._camera = new OrthographicCamera(
      this._width / -2,
      this._width / 2,
      this._height / 2,
      this._height / -2,
      1,
      1000
    )
    this._camera.position.z = 500

    this._stats = new Stats()
    this._stats.domElement.style.position = 'absolute'
    this._stats.domElement.style.left = '0px'
    this._stats.domElement.style.top = '0px'
    this._stats.setMode(0)

    this._engine.renderer.setClearColor(backgroundColor)

    document.body.appendChild(this._stats.domElement)

    this._animate()
  }
  start () {}
  resize (width, height) {
    this._width = width
    this._height = height
    this._camera.left = this._width / -2
    this._camera.right = this._width / 2
    this._camera.top = this._height / 2
    this._camera.bottom = this._height / -2
    this._camera.updateProjectionMatrix()
    this._engine.renderer.setSize(this._width, this._height)
    if (this._scene) {
      this._scene.resize(width, height)
    }
  }
  _animate () {
    this._stats.begin()
    this._update()
    this._stats.end()
    window.requestAnimationFrame(this._animate.bind(this))
  }
  _update () {
    if (this._scene) {
      this._scene.update()
      this._render()
    }
  }
  _render () {
    this._engine.renderer.clear()
    this._engine.renderer.clearDepth()
    this._engine.renderer.render(this._scene, this._camera)
  }
  set scene (value) {
    this._scene = value
  }
  get scene () {
    return this._scene
  }
  get camera () {
    return this._camera
  }
  get engine () {
    return this._engine
  }
  get width () {
    return this._width
  }
  get height () {
    return this._height
  }
}
