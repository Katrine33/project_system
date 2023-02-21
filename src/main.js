import Vue from 'vue'
import App from './App.vue'
// import '../plugins/element'
import ElementUI from 'element-ui'  //引入
import 'element-ui/lib/theme-chalk/index.css'  //要使用element必须导入其样式
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios' 因为已经封装了，就可以直接使用service
import router from './router'
import service from './service'
import echarts from 'echarts'

Vue.use(ElementUI)
// Vue.prototype.axios = axios  //挂载到原型，可以在全局使用
Vue.prototype.service = service  //挂载到原型，可以在全局使用
Vue.prototype.$echarts = echarts  //挂载到原型，可以在全局使用
Vue.config.productionTip = false

// 路由导航守卫
router.beforeEach((to,from,next) => {
  if (!localStorage.getItem('username')) {
    if(to.path !== '/login'){    //要去的地址不是登录页就强制让他去登录页
      next('/login') 
    } else next()     //自觉去了登录页
  } next()   //登录过了就让他进入 
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

/*
import ElementUI from 'element-ui'  //引入
import 'element-ui/lib/theme-chalk/index.css'  //要使用element必须导入其样式

Vue.use(ElementUI)
*/
