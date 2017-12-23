/**
 * 随机生成颜色
 */
export default () => {
  const randomNum = () => Math.round(Math.random()*255).toString(16).padStart(2, 0) // str.padStart(targetLength[, padString])用字符串从开始把目标字符串填充到指定长度，返回填充后的字符串。如果填充完超出，则取padString最左边的部分。如果targetLength比str短则返回str。 ES2017中首次定义，支持浏览器：chrome57+，FireFox48，EDGE15+，Safari10，opera44.
  return `#${randomNum()}${randomNum()}${randomNum()}`
}
