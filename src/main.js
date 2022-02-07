import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 通过vue实例，使用了vuex  router 挂载app
createApp(App).use(store).use(router).mount('#app')
