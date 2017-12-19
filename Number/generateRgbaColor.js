/**
 * 随机生成rgb颜色，可选透明度。
 */
export default (alpha=1) => {
  const random = () => Math.round(Math.random()*255)
  return `rgba(${random()}, ${random()}, ${random()}, ${alpha})`
}