<template>
  <div>
    <!-- Navbar público -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          <i class="fas fa-car"></i> Genesis Motors
        </a>
        <div class="ms-auto">
          <router-link to="/login" class="btn btn-outline-light btn-sm me-2">
            <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
          </router-link>
          <router-link to="/register" class="btn btn-primary btn-sm">
            <i class="fas fa-user-plus"></i> Registrarse
          </router-link>
        </div>
      </div>
    </nav>

    <header class="hero bg-primary text-white text-center py-5">
      <div class="container">
        <i class="fas fa-car fa-4x mb-3"></i>
        <h1 class="display-4">Genesis Motors</h1>
        <p class="lead">Taller Automotriz de Confianza</p>
        <p>Más de 15 años de experiencia en reparación y mantenimiento de vehículos</p>
        <div class="mt-4">
          <router-link to="/register" class="btn btn-light btn-lg me-2">
            <i class="fas fa-calendar-check"></i> Agendar una Cita
          </router-link>
          <router-link to="/login" class="btn btn-outline-light btn-lg">
            <i class="fas fa-sign-in-alt"></i> Portal Clientes
          </router-link>
        </div>
      </div>
    </header>

    <!-- Servicios -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Nuestros Servicios</h2>
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="card text-center h-100">
              <div class="card-body">
                <i class="fas fa-oil-can fa-3x text-primary mb-3"></i>
                <h5>Cambio de Aceite</h5>
                <p>Mantenimiento preventivo para tu motor</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card text-center h-100">
              <div class="card-body">
                <i class="fas fa-cogs fa-3x text-primary mb-3"></i>
                <h5>Mecánica General</h5>
                <p>Reparaciones y diagnóstico computarizado</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card text-center h-100">
              <div class="card-body">
                <i class="fas fa-car-battery fa-3x text-primary mb-3"></i>
                <h5>Electricidad</h5>
                <p>Diagnóstico y reparación de sistemas eléctricos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ¿Cómo funciona? -->
    <section class="bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">¿Cómo Funciona?</h2>
        <div class="row text-center">
          <div class="col-md-3 mb-3">
            <div class="bg-white p-4 rounded shadow-sm h-100">
              <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style="width: 60px; height: 60px; font-size: 24px;">1</div>
              <h5 class="mt-3">Regístrate</h5>
              <p class="text-muted small">Crea tu cuenta gratuita como cliente</p>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="bg-white p-4 rounded shadow-sm h-100">
              <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style="width: 60px; height: 60px; font-size: 24px;">2</div>
              <h5 class="mt-3">Registra tu Vehículo</h5>
              <p class="text-muted small">Agrega los datos de tu auto</p>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="bg-white p-4 rounded shadow-sm h-100">
              <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style="width: 60px; height: 60px; font-size: 24px;">3</div>
              <h5 class="mt-3">Agenda una Cita</h5>
              <p class="text-muted small">Elige fecha y describe el problema</p>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="bg-white p-4 rounded shadow-sm h-100">
              <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style="width: 60px; height: 60px; font-size: 24px;">4</div>
              <h5 class="mt-3">Seguimiento</h5>
              <p class="text-muted small">Revisa el estado de tu reparación</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section class="py-5">
      <div class="container text-center">
        <h2>Contáctanos</h2>
        <p class="lead">Estamos listos para atenderte</p>
        <div class="row mt-4">
          <div class="col-md-3 mb-3">
            <i class="fas fa-phone fa-2x text-primary mb-2"></i>
            <p>(01) 123-4567</p>
          </div>
          <div class="col-md-3 mb-3">
            <i class="fas fa-mobile-alt fa-2x text-primary mb-2"></i>
            <p>+51 987 654 321</p>
          </div>
          <div class="col-md-3 mb-3">
            <i class="fas fa-envelope fa-2x text-primary mb-2"></i>
            <p>info@genesismotors.com</p>
          </div>
          <div class="col-md-3 mb-3">
            <i class="fas fa-clock fa-2x text-primary mb-2"></i>
            <p>Lunes-Viernes: 8AM - 6PM</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <p class="mb-0">Genesis Motors © 2024 - Todos los derechos reservados</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.hero {
  padding: 80px 0;
}

.card {
  transition: transform 0.2s;
  border: none;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.card:hover {
  transform: translateY(-5px);
}
</style>