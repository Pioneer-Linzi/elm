import Vue from 'vue';
import App from './App';
import routerConfing from 'components/router'
import Router from 'vue-router'

Vue.use(Router)
var router =new Router()
router.map(routerConfing)
router.start(App,'#app')
