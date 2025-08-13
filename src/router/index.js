import {createRouter, createWebHistory} from 'vue-router'
import announcements from '../views/announcements.vue'

const router = createRouter(
  {
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'announcements',
			component: announcements
    },
		{
			path: '/settings',
			name: 'Bildirim Ayarları',
			component: () => import('../views/settings.vue'),
      alias: '/home'
    },
		{
			path: '/about',
			name: 'Uygulama Hakkında',
			component: () => import('../views/about.vue')
    }
	]
})

export default router
