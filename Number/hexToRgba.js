export default (hex, alpha=1) => {
  if (Number(alpha) > 1 || Number(alpha) < 0) {
    throw new Error(`alpha must be between 0 ~ 1, got: ${alpha}`)
  }
  hex = hex.slice(1)
  let str1
  let str2
  let str3
  if (hex.length === 3) {
    str1 = String(hex[0]) + hex[0]
    str2 = String(hex[1]) + hex[1]
    str3 = String(hex[2]) + hex[2]
  } else if (hex.length === 6) {
    str1 = hex.slice(0, 2)
    str2 = hex.slice(2, 4)
    str3 = hex.slice(4)
  } else {
    throw new Error('Hex str must be 3 or 6 at length, got: ' + hex)
  }
  return `rgba(${parseInt(str1, 16)}, ${parseInt(str2, 16)}, ${parseInt(str3, 16)}, ${alpha})`
}
