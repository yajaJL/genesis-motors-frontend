<template>
  <div class="sidebar bg-dark text-white">
    <div class="sidebar-header p-3 d-none d-md-block">
      <div class="text-center">
        <i class="fas fa-user-circle fa-3x mb-2"></i>
        <h6 class="mb-0">{{ userName }}</h6>
      <small class="user-role-badge">{{ userRole }}</small>
      </div>
    </div>
    
    <hr class="d-none d-md-block">
    
    <ul class="nav flex-column flex-grow-1">
      <!-- Dashboard - Todos -->
      <!-- Dashboard - Admin y Recepcionista -->
      <li class="nav-item" v-if="canAccess('admin', 'recepcionista')">
        <router-link to="/dashboard" class="nav-link text-white" active-class="active">
          <i class="fas fa-tachometer-alt"></i> Dashboard
        </router-link>
      </li>
            
      <!-- Clientes - Admin y Recepcionista -->
      <li class="nav-item" v-if="canAccess('admin', 'recepcionista')">
        <router-link to="/clients" class="nav-link text-white" active-class="active">
          <i class="fas fa-users"></i> Clientes
        </router-link>
      </li>
      
      <!-- Vehículos - Admin y Recepcionista -->
      <li class="nav-item" v-if="canAccess('admin', 'recepcionista')">
        <router-link to="/vehicles" class="nav-link text-white" active-class="active">
          <i class="fas fa-car"></i> Vehículos
        </router-link>
      </li>
      
      <!-- Citas - Admin y Recepcionista -->
      <li class="nav-item" v-if="canAccess('admin', 'recepcionista')">
        <router-link to="/appointments" class="nav-link text-white" active-class="active">
          <i class="fas fa-calendar-alt"></i> Citas
        </router-link>
      </li>
      
      <!-- Órdenes de Trabajo - Todos -->
      <li class="nav-item">
        <router-link to="/work-orders" class="nav-link text-white" active-class="active">
          <i class="fas fa-tools"></i> Órdenes de Trabajo
        </router-link>
      </li>
      
      <!-- Servicios - Todos (ver) -->
      <li class="nav-item">
        <router-link to="/services" class="nav-link text-white" active-class="active">
          <i class="fas fa-list-alt"></i> Servicios
        </router-link>
      </li>
      
      <!-- Usuarios - Solo Admin -->
      <li class="nav-item" v-if="canAccess('admin')">
        <router-link to="/users" class="nav-link text-white" active-class="active">
          <i class="fas fa-user-cog"></i> Usuarios
        </router-link>
      </li>
      <!-- Perfil - Todos -->
      <li class="nav-item">
        <router-link to="/profile" class="nav-link text-white" active-class="active">
          <i class="fas fa-user-circle"></i> Mi Perfil
        </router-link>
      </li>
    </ul>
    
    <!-- SOLO ESTE BOTÓN DE CERRAR SESIÓN -->
    <div class="mt-auto p-3">
      <hr>
      <button class="btn btn-danger btn-sm w-100" @click="logout">
        <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
      </button>
      <div class="text-center mt-2">
        <small class="text-muted">Genesis Motors © 2024</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
  data() {
    return {
      userName: 'Usuario',
      userRole: 'Sin rol'
    }
  },
  created() {
    this.loadUserData();
  },
  methods: {
    loadUserData() {
      try {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        this.userName = user.nombre || 'Usuario';
        
        const roles = {
          'admin': 'Administrador',
          'mecanico': 'Mecánico',
          'recepcionista': 'Recepcionista'
        };
        this.userRole = roles[user.rol] || user.rol || 'Sin rol';
      } catch (error) {
        console.error('Error al cargar datos del usuario:', error);
      }
    },
    canAccess(...roles) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      return roles.includes(user.rol);
    },
    logout() {
      // Limpiar localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Redirigir al login
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  min-height: calc(100vh - 56px);
  padding: 0;
  background-color: #343a40 !important;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  background: rgba(0,0,0,0.2);
}

.sidebar .nav-link {
  padding: 0.8rem 1.5rem;
  transition: all 0.3s;
  border-left: 4px solid transparent;
  color: rgba(255,255,255,0.8) !important;
}

.sidebar .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-left-color: #007bff;
  color: #ffffff !important;
}

.sidebar .nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
  border-left-color: #007bff;
  font-weight: bold;
  color: #ffffff !important;
}

.sidebar .nav-link i {
  margin-right: 10px;
  width: 20px;
  text-align: center;
}

.sidebar hr {
  border-color: rgba(255,255,255,0.1);
  margin: 0.5rem 0;
}


.mt-auto {
  margin-top: auto;
}

.user-role-badge {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.15); /* Fondo blanco traslúcido */
  padding: 2px 10px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.user-name-top {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.2;
}

.user-role-top {
  color: rgba(255, 255, 255, 0.7) !important; /* Blanco suave */
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
}

.user-role-top {
  border-right: 2px solid #007bff; /* Color acento */
  padding-right: 8px;
  margin-right: 2px;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    min-height: auto;
  }
  
  .sidebar .nav {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .sidebar .nav-item {
    width: 50%;
  }
  
  .sidebar .nav-link {
    border-left: none;
    border-bottom: 4px solid transparent;
    white-space: nowrap;
    text-align: center;
    padding: 0.6rem;
    font-size: 0.9rem;
  }
  
  .sidebar .nav-link i {
    display: block;
    margin: 0 auto 5px auto;
  }
}
</style>