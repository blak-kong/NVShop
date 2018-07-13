import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const routes = [
  {n:'home',p:'/',describe:'首页'},
  {n:'productDetail',p:'/productDetail',describe:'商品详情'},
  {n:'selectAddress',p:'/selectAddress',describe:'添加地址'}
]

function getRouter(){
  return routes.map(function(v){
    return {path: v.p, component: (resolve) => require(['@/page/'+v.n+'.vue'], resolve), name: v.name || v.n, meta:{describe:v.describe}}
  })
}


export default new Router({routes:getRouter()})
