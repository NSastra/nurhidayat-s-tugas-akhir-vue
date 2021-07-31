import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Createpinjaman from '../views/pinjaman/Createpinjaman.vue'
import Editpinjaman from '../views/pinjaman/Editpinjaman.vue'
import Kategori from '../views/kategori/Index.vue'
import Pinjaman from '../views/pinjaman/Index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pinjaman',
    name: 'pinjaman.Index',
    component: Pinjaman
  },
  {
    path: '/createpinjaman',
    name: 'pinjaman.create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createpinjaman
  },
  {
    path: '/editpinjaman/:id',
    name: 'pinjaman.edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpinjaman
  },
  {
    path: '/kategori',
    name: 'kategori.Index',
    component: Kategori
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
