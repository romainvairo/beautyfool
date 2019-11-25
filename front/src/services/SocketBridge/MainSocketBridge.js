import { forIn, isFunction } from 'lodash';

export class MainSocketBridge {

  /**
   * @param {SocketBridge[]} SocketBridges contains the socketBridges
   */
  static from(SocketBridges) {
    return class extends MainSocketBridge {
      constructor(thisArg) {
        super(thisArg, SocketBridges);
      }
    }
  }

  /**
   * @property {Object} socketBridges contains the socketBridges
   * @private
   */
  socketBridges = {};

  /**
   * @param {Object} thisArg caller's context
   * @param {SocketBridge[]} SocketBridges contains the socketBridges
   */
  constructor(thisArg, SocketBridges) {
    SocketBridges.forEach(SocketBridge => {
      this.socketBridges[SocketBridge.name] = new SocketBridge(thisArg);
    });
  }

  init() {
    forIn(this.socketBridges, bridge => {
      if (isFunction(bridge.init)) {
        bridge.init();
      }
    });
  }

  /**
   * @param {String} bridgeName name of the socket bridge
   * @param {String?} eventName name of the event. if not defined will return the emit of the socket bridge
   * @returns {Function?}
   * @throws {Error} throw an error if there is no bridge with the name of the given `bridgeName`
   */
  emit = name => {
    let emit;

    forIn(this.socketBridges, bridge => {
      if (!emit && bridge.hasEvent(name)) {
        emit = bridge.emit(name);
      }
    });

    if (!emit) {
      throw new Error(`There is no event called "${name}"`);
    }

    return emit;
  }
}
