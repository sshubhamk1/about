import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeLayout from '@/layout/HomeLayout.vue'
import AboutPage from '@/components/AboutPage.vue'
import ResumePage from '@/components/ResumePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resumes',
      name: 'resume',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'cv',
      component: HomeLayout,
      redirect: '/about',
      children: [
        {
          path: '/about',
          name: 'about',
          component: AboutPage,
        },
        {
          path: '/resume',
          name: 'resume',
          component: ResumePage,
        }
      ]
    }
  ]
})

export default router
