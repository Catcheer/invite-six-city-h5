# invite-six-city-h5

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



### 父子组件通信3种方式

+ props
+ 事件机制
+ slot分发

### 非父子组件通信 

跟组件创建一个vue实例 做为通信的中转站。由于vue2.0 移除了1.0中的$dispatch 和$broadcast 这两个组件之间通信传递数据的方法 ,官方的给出的最简单的升级建议是使用集中的事件处理器,而且也明确说明了 一个空的vue实例就可以做到,因为Vue 实例实现了一个事件分发接口. 

```
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
})
```

A组件触发事件
```
//通过this.$root.eventHub获取此对象
//调用$emit 方法
this.$root.eventHub.$emit('YOUR_EVENT_NAME', yourData)
```

B组件内调用事件接受,当然在组件销毁时接触绑定,使用$off方法
```
this.$root.eventHub.$on('YOUR_EVENT_NAME', (yourData)=>{
    handle(yourData)
} )
```
### 测试用UserNo

jwQBxdoQ


### 打包使用相对路径的配置方法

使用绝对路径打包需要知道打包后文件放在服务器上的目录，这一点很鸡肋
经常有群友在群里问, 用vue-clibuild 后, 把文件放到服务器, 访问后, 各种静态文件 404
这里以vue-cli的 webpack 完整版做下说明
用vue-cli生成项目后, 在config/index.js文件里能看到一些配置, 有关于目录的主要是以下 3 个:

assetsRoot: path.resolve(__dirname, '../dist'),
assetsSubDirectory: 'static',
assetsPublicPath: '/',
assetsRoot

就是你build后文件生成在哪个文件夹, 上面的配置就是在项目根目录的 dist 文件夹下

assetsSubDirectory

这个是静态文件的前置文件夹

在build/utils.js文件里, 可以找到一个函数:

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
在build/webpack.prod.conf.js文件里, 可以找到

filename: utils.assetsPath('js/[name].[chunkhash].js'),
chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
上面的两个路径, 经过assetsPath函数后, 最终生成路径static/js/[name].[chunkhash].js, 意思就是最后 webpack 会把生成的 js 文件放在dist/static/js/文件夹下, 图片,样式配置原理一样, 所以assetsSubDirectory的作用就是上面路径中的static

assetsPublicPath

这个静态资源的引用前缀, 默认的是/

按照上面的配置,
当你把 dist 文件夹下的文件放到服务器,

能用http://www.xxx.com/static/js/xxx.js路径访问到时, 那么assetsPublicPath就不需要修改了
需要用http://www.xxx.com/aaa/bbb/static/js/xxx.js路径访问到时, 那么assetsPublicPath就得改成/aaa/bbb/, 然后重新 build 一次, 上传到服务器
当你把静态文件传到 cdn, 需要用http://stacic.yyy.com/aaa/bbb/static/js/xxx.js路径访问到时, 那么assetsPublicPath就得改成http://stacic.yyy.com/aaa/bbb/, 然后重新 build 一次, 上传到服务器
用绝对路径听起来好像很复杂啊, 能不能用相对路径呢?
当然也是可以的, 不过配置起来要比用绝对路径复杂的多, 主要是涉及到 css 文件的里图片和字体等

首先, assetsSubDirectory要设置成空
将assetsPublicPath, 改成./
修改new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')), 改成new ExtractTextPlugin('[name].[contenthash].css')