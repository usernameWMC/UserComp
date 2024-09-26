// 负责插件的安装
import { each } from 'lodash-es'

// 注册插件

// 定义一个函数 makeInstaller，接受一个组件数组 components
export function makeInstaller(components) {
  // 定义一个安装函数 installer，接受 Vue 应用 app
  const installer = app =>
    each(components, c => {
      app.use(c)
    })
  // 返回 installer 函数，允许在 Vue 应用中注册组件
  return installer
}

/*
  组件就是一个对象 通过app.component 进行注册组件
  插件就是一个方法 还是app.component 进行注册组件 插件的使用方式是 export default { install (app, options) {} } 也就是对象上必须要挂载一个install方法 

  既然都是通过 app.component 进行注册组件 但是只是多了一个 install方法 
  那么就在原本的组件上定义一个 install 方法 便于插件注册即可
*/
export const withInstall = component => {
  component.install = app => {
    const name = component.name
    app.component(name, component)
  }
  return component
}
