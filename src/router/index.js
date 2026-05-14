import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import ClientList from './views/Clients/ClientList.vue'
import VehicleList from './views/Vehicles/VehicleList.vue'
import AppointmentList from './views/Appointments/AppointmentList.vue'
import AppointmentForm from './views/Appointments/AppointmentForm.vue'
import AppointmentCalendar from './views/Appointments/AppointmentCalendar.vue'
import WorkOrderList from './views/WorkOrders/WorkOrderList.vue'
import WorkOrderForm from './views/WorkOrders/WorkOrderForm.vue'
import WorkOrderDetail from './views/WorkOrders/WorkOrderDetail.vue'
import ServiceList from './views/Services/ServiceList.vue'
import UserList from './views/Users/UserList.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true, title: 'Panel de Control' }
  },
  {
    path: '/clients',
    name: 'Clients',
    component: ClientList,
    meta: { requiresAuth: true, roles: ['admin', 'recepcionista'], title: 'Clientes' }
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: VehicleList,
    meta: { requiresAuth: true, roles: ['admin', 'recepcionista'], title: 'Vehículos' }
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: AppointmentList,
    meta: { requiresAuth: true, roles: ['admin', 'recepcionista'], title: 'Citas' }
  },
  {
    path: '/appointments/create',
    name: 'AppointmentCreate',
    component: AppointmentForm,
    meta: { requiresAuth: true, roles: ['admin', 'recepcionista'], title: 'Nueva Cita' }
  },
  {
    path: '/appointments/calendar',
    name: 'AppointmentCalendar',
    component: AppointmentCalendar,
    meta: { requiresAuth: true, roles: ['admin', 'recepcionista'], title: 'Calendario' }
  },
  {
    path: '/work-orders',
    name: 'WorkOrders',
    component: WorkOrderList,
    meta: { requiresAuth: true, title: 'Órdenes de Trabajo' }
  },
  {
    path: '/work-orders/create',
    name: 'WorkOrderCreate',
    component: WorkOrderForm,
    meta: { requiresAuth: true, roles: ['admin', 'recepcionista'], title: 'Nueva Orden' }
  },
  {
    path: '/work-orders/:id',
    name: 'WorkOrderDetail',
    component: WorkOrderDetail,
    meta: { requiresAuth: true, title: 'Detalle de Orden' }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServiceList,
    meta: { requiresAuth: true, title: 'Servicios' }
  },
  {
    path: '/users',
    name: 'Users',
    component: UserList,
    meta: { requiresAuth: true, roles: ['admin'], title: 'Usuarios' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: {
      template: `
        <div class="container mt-5 text-center">
          <i class="fas fa-exclamation-triangle fa-4x text-warning mb-3"></i>
          <h1 class="display-1 text-muted">404</h1>
          <h2>Página no encontrada</h2>
          <router-link to="/dashboard" class="btn btn-primary mt-3">
            <i class="fas fa-home"></i> Volver al inicio
          </router-link>
        </div>
      `
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user') || 'null')
  
  document.title = to.meta.title ? `Genesis Motors - ${to.meta.title}` : 'Genesis Motors'
  
  if (to.meta.requiresAuth && !token) {
    next('/login')
    return
  }
  
  if (to.meta.guest && token) {
    next('/dashboard')
    return
  }
  
  // Verificar roles permitidos
  if (to.meta.roles && user) {
    if (!to.meta.roles.includes(user.rol)) {
      alert('No tienes permisos para acceder a esta sección')
      next('/dashboard')
      return
    }
  }
  
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')