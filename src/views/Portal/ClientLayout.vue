<template>
  <div class="client-portal">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/portal">
          <i class="fas fa-car"></i> Genesis Motors
        </router-link>
        <button class="navbar-toggler" type="button" @click="showMenu = !showMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: showMenu }">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/portal">
                <i class="fas fa-home"></i> Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/portal/appointments">
                <i class="fas fa-calendar-alt"></i> Mis Citas
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/portal/orders">
                <i class="fas fa-tools"></i> Mis Órdenes
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/portal/vehicles">
                <i class="fas fa-car"></i> Mis Vehículos
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <span class="nav-link text-white">
                <i class="fas fa-user"></i> {{ userName }}
              </span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="logout">
                <i class="fas fa-sign-out-alt"></i> Salir
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientLayout',
  data() {
    return {
      userName: '',
      showMenu: false
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = user.nombre || 'Cliente';
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.client-portal {
  min-height: 100vh;
  background-color: #f8f9fa;
}
</style>