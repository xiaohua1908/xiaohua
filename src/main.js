// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

Vue.config.productionTip = false
// 注册全局指令

// Vue.filter(id: 'globalFomate', definition: (value)=>{
//   return '￥' + Number(value).toFixed(fractinDigits: 4);
// });


/* eslint-disable no-new */
new Vue({
  // el: ,
  render: h => h(App),
  // router,
}).$mount("#app");
