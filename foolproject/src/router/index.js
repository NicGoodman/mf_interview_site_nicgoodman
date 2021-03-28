import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ArticlePage from '../views/ArticlePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/articles/:articleSlug",
    name: "article",
    component: ArticlePage,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
