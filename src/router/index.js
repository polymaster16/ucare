import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import NannyProfile from '../views/nanny-profile.vue'
import Nannies from '../views/nannies.vue'
import Login from '../views/login.vue'
import SoluxPay from '../views/solux-pay.vue'
import SignIn from '../views/sign-in.vue'
import Start from '../views/start.vue'

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      name: 'NannyProfile',
      path: '/nanny-profile',
      component: NannyProfile,
    },
    {
      name: 'Nannies',
      path: '/nannies',
      component: Nannies,
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
    },
    {
      name: 'SoluxPay',
      path: '/solux-pay',
      component: SoluxPay,
    },
    {
      name: 'SignIn',
      path: '/sign-in',
      component: SignIn,
    },
    {
      name: 'Start',
      path: '/start',
      component: Start,
    },
    ,
    {
      name: 'nanny',
      path: '/nannies/:id',
      component: ()=> import('../views/nannies/id.vue'),
    },
    {
      name: 'edit-profile',
      path: '/nannies/:id/edit-profile',
      component: ()=> import('../views/nannies/edit-profile.vue'),
    },
     {
      name: 'recruit',
      path: '/nannies/:id/recruit',
      component: ()=> import('../views/nannies/recruit.vue'),
    },
    {
      name: 'success',
      path: '/success',
      component: ()=> import('../views/nannies/success.vue'),
    },
  ]
})

export default router
