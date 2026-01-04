import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import home from '../views/home.vue'

const routes: RouteRecordRaw[] = [
 {
		path: '/',
		name: 'home',
		component: home
	},
	{
		path: '/about',
		name: 'Uygulama Hakkında',
		component: () => import('../views/about.vue')
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});
export default router
