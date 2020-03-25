/**
 * Simple config helper for Vue
 */
export default {
  install (Vue, config) {
    const _config = Object.freeze(config)
    Vue.$config = Vue.prototype.$config = _config
  }
}
