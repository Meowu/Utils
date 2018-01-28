export default (hex) =>  {
  if (!(/^#[0-9a-fA-F]{3}$/.test(hex)) && !(/^#[0-9a-fA-F]{6}$/.test(hex))) {
    throw new Error('invalid color')
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
  }
  str1 = 255 - parseInt(str1, 16)
  str2 = 255 - parseInt(str2, 16)
  str3 = 255 - parseInt(str3, 16)
  return `#${str1.toString(16).padStart(2, 0)}${str2.toString(16).padStart(2,0)}${str3.toString(16).padStart(2,0)}`
};
