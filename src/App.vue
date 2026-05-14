<template>
  <div v-if="isAuthenticated" class="app-container">
    <Navbar />
    <div class="main-content">
      <Sidebar />
      <div class="content-area">
        <router-view />
      </div>
    </div>
  </div>
  <router-view v-else />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      isAuthenticated: false
    }
  },
  created() {
    this.checkAuth();
    
    // Escuchar cambios en el localStorage
    window.addEventListener('storage', this.checkAuth);
  },
  methods: {
    checkAuth() {
      this.isAuthenticated = !!localStorage.getItem('token');
    }
  },
  watch: {
    '$route'() {
      this.checkAuth();
    }
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.checkAuth);
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  display: flex;
  flex: 1;
}

.content-area {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
  overflow-y: auto;
  min-height: calc(100vh - 56px);
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  
  .content-area {
    padding: 10px;
  }
}
</style>