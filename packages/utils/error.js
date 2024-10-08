import { isString } from 'lodash-es'

class UserUIError extends Error {
  constructor(message) {
    super(message)
    this.name = 'UserUIError'
  }
}

// 报错信息
export function throwError(scope, msg) {
  throw new UserUIError(`[${scope}] ${msg}`)
}

// 根据参数 进行不同的处理 模仿函数重载
export function debugWarn(error) {
  if (arguments.length === 1 && error instanceof Error) {
    // 仅传递错误对象
    if (process.env.NODE_ENV !== 'production') {
      console.warn(error)
    }
  } else if (arguments.length === 2) {
    // 传递 scope 和 msg
    const scopeStr = error
    const msg = msg
    // 非生产环境下
    if (process.env.NODE_ENV !== 'production') {
      const err = isString(scopeStr) ? new UserUIError(`[${scopeStr}] ${msg}`) : scopeStr
      console.warn(err)
    }
  }
}
