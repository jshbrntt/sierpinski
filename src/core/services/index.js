export default class Services {
  static provide (name, service) {
    if (!this._services) {
      this._services = new Map()
    }
    this._services.set(name, service)
  }
  static locate (name) {
    if (this._services.has(name)) {
      return this._services.get(name)
    } else {
      throw new ReferenceError(`Service '${name}' not found.`)
    }
  }
}
