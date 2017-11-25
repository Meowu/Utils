
/**
 * 把时间戳格式化为 yyyy-MM-dd HH-mm 格式的字符串
 * @param {Number | String} timestamp
 * return String
 * 可以输入10位或者13位的数字或数字字符串。
 */
export default function formatDate(timestamp) {
  if (!Number(timestamp)) {
    throw new Error("parameter must be a Number.")
  }
  const len = timestamp.toString().length
  if (len !== 10 && len !== 13) { // 这里必须是 && 并集。
    throw new Error('Number expected to be 10 or 13 at length.')
  }
  const time = Number(timestamp).toString().length === 10 ? timestamp*1000 : timestamp
  
  const padZero = number => number.toString().replace(/^(\d)$/, "0$1") // 补0
  const newDate = new Date(Number(time))
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const date = newDate.getDate()
  const hours = newDate.getHours()
  const minutes = newDate.getMinutes()
  
  const time_str = `${padZero(year)}-${padZero(month)}-${padZero(date)} ${padZero(hours)}:${padZero(minutes)}`
  
  return time_str
}
