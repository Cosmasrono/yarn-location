import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2705db43 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _160a71f4 = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _8bf358d4 = () => interopDefault(import('../pages/Mailing.vue' /* webpackChunkName: "pages/Mailing" */))
const _5607acfe = () => interopDefault(import('../pages/Main.vue' /* webpackChunkName: "pages/Main" */))
const _62400edc = () => interopDefault(import('../pages/Maps.vue' /* webpackChunkName: "pages/Maps" */))
const _561ea206 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _2705db43,
    name: "Category"
  }, {
    path: "/Login",
    component: _160a71f4,
    name: "Login"
  }, {
    path: "/Mailing",
    component: _8bf358d4,
    name: "Mailing"
  }, {
    path: "/Main",
    component: _5607acfe,
    name: "Main"
  }, {
    path: "/Maps",
    component: _62400edc,
    name: "Maps"
  }, {
    path: "/",
    component: _561ea206,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
