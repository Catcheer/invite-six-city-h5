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

