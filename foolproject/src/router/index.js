import Vue from 'vue'
import VueRouter from 'vue-router'
//importing my router views for the homepage and article page
import HomePage from '../views/HomePage.vue'
import ArticlePage from '../views/ArticlePage.vue'

Vue.use(VueRouter)

//setting up my application's routes
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
