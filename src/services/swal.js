import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

export const swal = {
  success: (title, text) => {
    return Swal.fire({
      icon: 'success',
      title: title || '¡Éxito!',
      text: text || '',
      confirmButtonColor: '#28a745'
    });
  },
  
  error: (title, text) => {
    return Swal.fire({
      icon: 'error',
      title: title || 'Error',
      text: text || 'Ocurrió un error',
      confirmButtonColor: '#dc3545'
    });
  },
  
  confirm: (title, text) => {
    return Swal.fire({
      icon: 'warning',
      title: title || '¿Está seguro?',
      text: text || 'Esta acción no se puede deshacer',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d'
    });
  },
  
  toast: {
    success: (message) => {
      return Toast.fire({
        icon: 'success',
        title: message
      });
    },
    error: (message) => {
      return Toast.fire({
        icon: 'error',
        title: message
      });
    },
    info: (message) => {
      return Toast.fire({
        icon: 'info',
        title: message
      });
    }
  }
};