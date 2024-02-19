import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '@/views/HomePage.vue'
import FoodsPage from '@/views/FoodsPage.vue'

// component
import FoodList from '@/component/FoodList.vue'
import FoodPreview from '@/component/FoodPreview.vue'
import OrderSummary from '@/component/OrderSummary.vue'
import OrderReceived from '@/component/OrderReceived.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/foods',
    component: FoodsPage,
    children: [
      {
        path: '',
        name: 'FoodsList',
        component: FoodList,
      },
      {
        path: 'preview/:id',
        component: FoodPreview,
        name : 'FoodPreview',
        meta: {
          hideHeader: true, // Indicate to hide the header for this component
        },
        // No need to specify meta.hideHeader for components where the header should be shown
      },
      {
        path: 'order-summary',
        name : 'OrderSummary',
        component: OrderSummary,
        meta: {
          hideHeader: true, // Indicate to hide the header for this component
        },
        // No need to specify meta.hideHeader for components where the header should be shown
      },
      {
        path: 'order-received',
        name: 'OrderReceived',
        component: OrderReceived,
        meta: {
          hideHeader: true, // Indicate to hide the header for this component
        },
        // No need to specify meta.hideHeader for components where the header should be shown
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
