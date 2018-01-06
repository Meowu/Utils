const SECOND = 1000
const MINUTE = 60000
const HOUR = 3600000
const DAY = 86400000
const WEEK = 604800000
const MONTH = 2592000000
const YEAR = 31536000000

exports.ms_to_second = (ms) => Math.floor(ms / SECOND)
exports.ms_to_minute = (ms) => Math.floor(ms / MINUTE)
exports.ms_to_hour = (ms) => Math.floor(ms / HOUR)
exports.ms_to_day = (ms) => Math.floor(ms / DAY)
exports.ms_to_week = (ms) => Math.floor(ms / WEEK)
exports.ms_to_month = (ms) => Math.floor(ms / MONTH)
exports.ms_to_year = (ms) => Math.floor(ms / YEAR)
exports.time_ago = (ms) => {
  switch (true) {  // 这才是值
    case ms >= YEAR: // 将 case 表达式的值与 switch 作比较
      return `约 ${ms_to_year(ms)} 年前`
      break;
    case ms >= MONTH:
      return `约 ${ms_to_month(ms)} 个月前`
      break;
    case ms >= WEEK:
      return `约 ${ms_to_week(ms)} 周前`
      break;
    case ms >= DAY:
      return `约 ${ms_to_day(ms)} 天前`
      break;
    case ms >= HOUR:
      return `约 ${ms_to_hour(ms)} 小时前`
      break;
    case ms >= MINUTE:
      return `约 ${ms_to_minute(ms)} 分钟前`
      break;
    default:
      return `刚刚`
  }
}