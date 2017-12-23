/**
 * 随机生成rgb颜色，可选透明度。
 */
export default (alpha=1) => {
  const isValidAlpha = typeof alpha === 'number' && alpha >= 0 && alpha <= 1
  if (!isValidAlpha) {
    throw new Error('Invalid alpha: must be between 0 ~ 1.')
  }
  const random = () => Math.round(Math.random()*255)
  return `rgba(${random()}, ${random()}, ${random()}, ${alpha})`
}