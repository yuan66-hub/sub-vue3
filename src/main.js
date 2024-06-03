import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

let app = createApp(App)
const render = () => {
    app.use(router).mount('#app')
}


if (!window.__MICRO_WEB__) {
    render();
}
export async function bootstrap() {
    console.log('vue3.0 app bootstrap');
}

export async function mount(app) {
    // 子应用发送消息给主应用
    window.custom.emit('test',{
         a:1
    })
    // vue3 react18 子应用通信--先有监听,后有触发
    window.custom.on('test1',(data)=>{
        console.log('react18==',data);
         window.custom.emit('test2',{
              data:'vue3消息'
         })
    })
    // 处理全局状态
    const store = window.store
    const storeData = store.getStore()

    store.updateStore({
        ...storeData,
        a:'vue3子应用修改全局状态'
    })
    render();
}

export async function unmount(ctx) {
    app.unmount();
    app = null;
    const { container } = ctx
    if (container) {
        document.querySelector(container).innerHTML = ''
    }
}
