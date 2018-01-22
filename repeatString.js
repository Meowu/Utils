/**
 * 复制一个字符串指定次
 * repeat('a', 4) => 'aaaa'
 * String.prototype.repeat(count) 
 * count 不能为负且必须小于 infinite ，否则会抛出 RangeError 。
 * ({toString : () => "abc", repeat : String.prototype.repeat}).repeat(2)
 * "abcabc", repeat是一个通用方法,也就是它的调用者可以不是一个字符串对象.
 */

 // ES6
export default (str, times=1) =>  {
  try {
    return str.repeat(times)
  } catch (e) {
    throw e
  }
};

export function repeatStr(str, times=1) {
  return Array.from(Array(times), _ => str).join('')
}

// ES5 方法
export function repeat(str, times=1) {
  return Array(times + 1).join(str)
}
