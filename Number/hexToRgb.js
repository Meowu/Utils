export default (hex) => {
  hex = hex.slice(1)
  const str1 = hex.slice(0, 2)
  const str2 = hex.slice(2, 4)
  const str3 = hex.slice(4)
  return `rgb(${parseInt(str1, 16)}, ${parseInt(str2, 16)}, ${parseInt(str3, 16)})`
}
