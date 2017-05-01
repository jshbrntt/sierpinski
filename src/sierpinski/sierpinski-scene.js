import Scene from './../core/scene'
import TriangleView from './views/triangle-view'
import TriangleModel from './models/triangle-model'

export default class SierpinskiScene extends Scene {
  constructor (context) {
    super(context)
    this.add(new TriangleView(new TriangleModel(800)))
  }
}
