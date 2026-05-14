<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/dashboard">
        <i class="fas fa-car"></i> Genesis Motors
      </router-link>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        @click="showMenu = !showMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" :class="{ 'show': showMenu }" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <span class="nav-link text-white">
              <i class="fas fa-user-circle"></i> {{ userName }}
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link text-muted small">
              {{ userRole }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      userName: 'Usuario',
      userRole: 'Sin rol',
      showMenu: false
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
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgb(255, 0, 0);
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.3rem;
}

.navbar-brand i {
  margin-right: 8px;
}

.nav-link {
  padding: 0.5rem 0.5rem;
}
</style>