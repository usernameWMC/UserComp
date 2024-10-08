// 知道在干什么 不知道为什么

import { each, isFunction } from 'lodash-es'
import shell from 'shelljs'

export default function hooksPlugin({ rmFiles = [], beforeBuild, afterBuild }) {
  return {
    name: 'hooks-plugin',
    // 打包开始之前进行的操作
    buildStart() {
      // 移除这些文件
      each(rmFiles, fName => shell.rm('-rf', fName))
      // 如果这个函数存在就执行这个函数
      if (isFunction(beforeBuild)) {
        beforeBuild()
      }
    },
    // 打包结束之后执行
    buildEnd(err) {
      // 如果没有出现错误就执行这个函数
      if (!err && isFunction(afterBuild)) {
        afterBuild()
      }
    }
  }
}
