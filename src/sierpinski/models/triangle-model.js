import { Geometry, Face3, Vector3, Triangle } from 'three'
import Model from './../../core/mvc/model'

export default class TriangleModel extends Model {
  constructor (width) {
    super()

    this._width = width
    this._height = TriangleModel.calculateHeight(this._width)

    this._geometry = TriangleModel.createGeometry(this._width, this._height)
  }
  static calculateHeight (width) {
    return width * Math.sin(Math.PI / 3)
  }
  static createGeometry (width, height) {
    let geometry = new Geometry()

    let v1 = new Vector3(width / -2, height / -2, 0)
    let v2 = new Vector3(width / 2, height / -2, 0)
    let v3 = new Vector3(0, height + height / -2, 0)

    let triangle = new Triangle(v1, v2, v3)
    let normal = triangle.normal()

    geometry.vertices.push(triangle.a)
    geometry.vertices.push(triangle.b)
    geometry.vertices.push(triangle.c)

    geometry.faces.push(new Face3(0, 1, 2, normal))

    return geometry
  }
  get width () {
    return this._width
  }
  get height () {
    return this._height
  }
}
