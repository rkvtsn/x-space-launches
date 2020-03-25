/**
 * find in array of objects by attribute
 * @param {Object[]} array
 * @param {String} attr
 * @param {*} value
 */
const findBy = function (array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i
    }
  }
  return -1
}

export default {
  findBy
}
