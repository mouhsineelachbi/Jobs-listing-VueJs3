import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import jobs from '../views/jobs/jobs.vue'
import jobDetails from '../views/jobs/jobDetails.vue'
import notFound from '../views/notFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: jobDetails,
    props: true,
  },
  //  Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  //  catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: notFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
