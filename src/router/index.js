import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
const Clients = () => import(/* webpackChunkName: "clients" */ '../views/Clients.vue')
const Visites = () => import(/* webpackChunkName: "visites" */ '../views/Visites.vue')
const Rapports = () => import(/* webpackChunkName: "rapports" */ '../views/Rapports.vue')
const Example = () => import(/* webpackChunkName: "example" */ '../views/Example.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
	path: '/clients',
	name: 'clients',
	component: Clients
   },
    {
	path: '/example',
	name: 'example',
	component: Example
   },
   {
	path: '/visites',
	name: 'visites',
	component: Visites
   },
   {
	path: '/rapports',
	name: 'rapports',
	component: Rapports
   },
   {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
   },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
