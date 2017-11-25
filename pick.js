
/**
 * 从传入对象中选择指定属性组成一个新对象
 * @param {Object} object 
 * @param {String} props 
 * @return {Object}
 * example pick({a: 1, b: 2, c: 3}, 'a', 'c')
 * => {a: 1, c: 3}
 */
export default function pick(object, ...props) {
  if (Object.prototype.toString.call(object) !== "[object Object]") {
    throw new Error("It must be given an object.")
  }
  return Object.assign(
    {},
    ...props.map(prop => {
      if (prop in object) {
        return {
          [prop]: object[prop]
        }
      }
    })
  );
}
