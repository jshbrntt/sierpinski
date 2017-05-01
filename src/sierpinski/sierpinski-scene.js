import window from 'window'
import Scene from './../core/scene'
import { Object3D } from 'three'
import TriangleView from './views/triangle-view'
import TriangleModel from './models/triangle-model'

export default class SierpinskiScene extends Scene {
  constructor (context) {
    super(context)
    this._size = 800
    this._depth = 3
    this._triangles = new Object3D()
    this.add(this._triangles)
    this.draw(this._depth, this._size)
  }
  draw (depth, size) {
    this._triangles.children = []
    this._triangles.add(new TriangleView(new TriangleModel(size)))
    this.recurse(depth)
  }
  recurse (depth) {
    if (depth < 1) {
      return
    }
    let triangles = new Object3D()
    let w4 = this._triangles.children[0].model.width / 4
    let h4 = this._triangles.children[0].model.height / 4
    let model = new TriangleModel(w4 * 2)
    for (let triangle of this._triangles.children) {
      let view1 = new TriangleView(model)
      let y = triangle.position.y - h4
      view1.position.x = triangle.position.x - w4
      view1.position.y = y
      let view2 = new TriangleView(model)
      view2.position.x = triangle.position.x + w4
      view2.position.y = y
      let view3 = new TriangleView(model)
      view3.position.x = triangle.position.x
      view3.position.y = triangle.position.y + h4
      triangles.add(view1)
      triangles.add(view2)
      triangles.add(view3)
    }
    this.remove(this._triangles)
    this._triangles = triangles
    this.add(this._triangles)
    depth--
    this.recurse(depth)
  }
}
