import {createRouter, createWebHistory} from 'vue-router'
import home from '../views/home.vue'

const router = createRouter(
  {
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: home
    },
		{
			path: '/settings',
			name: 'Bildirim Ayarları',
			//component: () => import('../views/settings-menu.vue')
    },
		{
			path: '/about',
			name: 'Uygulama Hakkında',
			component: () => import('../views/about.vue')
    }
	]
})

export default router
