import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Withdrawal from '../views/Withdrawal.vue'
import firebase from 'firebase'
Vue.use(VueRouter)

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Index',
        component: Index
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/signup',
        name: 'Signup',
        component: Signup
      },
      {
        path: '/signin',
        name: 'Signin',
        component: Signin
      },
      {
        path: '/dashboard/overview',
        name: 'dashboard',
        component: Dashboard,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/profile',
        name: 'profile',
        component: Profile,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/withdrawal',
        name: 'withdrawal',
        component: Withdrawal,
        meta:{
          requiresAuth: true
        }
      },
    ]
  })
  

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

router.beforeEach((to, from, next) =>{
  //Check if the route we are about to enter has a guard
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //Check auth state
    let user = firebase.auth().currentUser
    if(user){
      //Grant the user access as he is signed in, proceed to user
      next()
    }else{
      //Redirect to login
      next({name: 'Signin'})
    }
  }else{
    //If the routes does not requires auth, then just proceed as normal
    next()
  }
})

export default router