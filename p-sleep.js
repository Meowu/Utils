
/**
 * 等待指定的秒数后返回一个Promise。
 * @param {Number} ms 等待的时间
 */
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}


/**
 * 等待指定时间后返回指定值。
 * @param {String | Number} val 
 * @param {Number} ms 
 */
function sleepAndReturnVal(val, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val)
    }, ms);
  });
}