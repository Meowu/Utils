export default (rgb) => {
  const matchStr = rgb.match(/(\d{1,3})/g) // 带有g标志，要返回所有的匹配结果，使用match，如果要返回匹配组则使用exec。
  const toNum = matchStr.map(str => {
    const num = Number(str)
    if (0 <= num <= 255) {
     return num 
    }
    throw new Error('RGB value must be between 0 ~ 255: ' + num)
  })
  const hexArr = Array.from(toNum, num => {
    num = num.toString(16)
    num < 10 && (num = '0' + num) // 如果数字小于10则补0
    return num
  })
  return '#' + hexArr.join('')
}
