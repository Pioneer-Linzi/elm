import Vue from 'vue';
import App from './App';
import routerConfing from 'components/router';
import Router from 'vue-router';

Vue.use(Router);
var router = new Router({
    linkActiveClass: 'active'
});
router.map(routerConfing);
router.beforeEach(function () {
  window.scrollTo(0, 0);
});
router.redirect({
  '*': '/index'
});
router.start(App, 'app');
