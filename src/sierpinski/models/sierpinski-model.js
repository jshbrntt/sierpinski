import { Vector3 } from 'three'
import Model from './../../core/mvc/model'
import TriangleModel from './triangle-model'

export default class SierpinskiModel extends Model {
  constructor (width, depth) {
    super()
    this._width = width
    this._height = TriangleModel.calculateHeight(this._width)
    this._depth = depth
    this.updatePositions()
  }
  updatePositions () {
    this._positions = SierpinskiModel.calculatePositions(
      this._width,
      this._height,
      this._depth
    )
  }
  static calculatePositions (width, height, depth) {
    let positions = [new Vector3()]
    return SierpinskiModel.subdividePositions(width, height, depth, positions)
  }
  static subdividePositions (width, height, depth, positions) {
    let offsets = []
    let quarterWidth = width / 4
    let quarterHeight = height / 4
    for (let position of positions) {
      let offsetY = position.y - quarterHeight
      offsets.push(
        new Vector3(position.x - quarterWidth, offsetY, 0),
        new Vector3(position.x + quarterWidth, offsetY, 0),
        new Vector3(position.x, position.y + quarterHeight, 0)
      )
    }
    depth--
    return depth > 0 ? SierpinskiModel.subdividePositions(
      width / 2,
      height / 2,
      depth,
      offsets
    ) : offsets
  }
  set depth (value) {
    if (value !== this._depth) {
      this._depth = value
      this.updatePositions()
    }
  }
  get depth () {
    return this._depth
  }
  get width () {
    return this._width
  }
  get height () {
    return this._height
  }
  get positions () {
    return this._positions
  }
  get triangle () {
    return this._triangle
  }
}
