import Vue from 'vue'
import VueRouter from 'vue-router'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Fitnessbook',
    component: () => import('../views/FitnessBook.vue') 
    // landing page
  },

  {
    path: '/users',
    name: 'Users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/users.vue'),
    children: [
      { path: '/users/profile',component: () => import('../components/users/profile.vue') },
      { path: '/users/trainingsplans',component: () => import('../components/users/trainingsplans.vue') },
      { path: '/users/biometrics',component: () => import('../components/users/biometrics.vue') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
