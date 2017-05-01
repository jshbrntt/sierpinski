import * as THREE from 'three'
import Model from './../../core/mvc/model'

export default class TriangleModel extends Model {
  constructor (width) {
    super()

    this._width = width
    this._height = width * Math.sin(Math.PI / 3)

    this._geometry = new THREE.Geometry()

    let v1 = new THREE.Vector3(this._width / -2, this._height / -2, 0)
    let v2 = new THREE.Vector3(this._width / 2, this._height / -2, 0)
    let v3 = new THREE.Vector3(0, this._height + this._height / -2, 0)

    this._triangle = new THREE.Triangle(v1, v2, v3)
    this._normal = this._triangle.normal()

    this._geometry.vertices.push(this._triangle.a)
    this._geometry.vertices.push(this._triangle.b)
    this._geometry.vertices.push(this._triangle.c)

    this._geometry.faces.push(new THREE.Face3(0, 1, 2, this._normal))
  }
  get width () {
    return this._width
  }
  get height () {
    return this._height
  }
}
