

/**
 * 获取文件名的扩展名
 * @param {*string} filename 
 * 输入 'extname.', '.extname', 'extname'都会返回 ''
 * 输入 'extname.js' 返回 '.js'
 * 输入 'extname.png' 返回 '.png'
 */
export default function extname(filename) {
  const index = filename.lastIndexOf('.')
  return index > 0 && index !== filename.length - 1 ? filename.slice(index) : ''
}