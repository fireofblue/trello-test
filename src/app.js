/**
 * Created by nantawat on 8/10/2017 AD.
 */
import Vue from 'vue'
import App from './App.vue'
import { store } from'./store/store';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.interceptors.push((request, next) => { // interceptors จะเป็นตัว loop request ล้วก็ intercept แต่ละ request ตาม  callback
    if(request.method =='POST') request.method = 'PUT';
next(response => {
    response.json = () => {
    return {
        messages: response.body
    }
}
});
} );
new Vue({
        el: '#app',
        store,
        render: h => h(App)
})
