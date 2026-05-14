<template>
  <nav v-if="totalPages > 1">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <button class="page-link" @click="changePage(currentPage - 1)">Anterior</button>
      </li>
      <li 
        v-for="page in visiblePages" 
        :key="page" 
        class="page-item" 
        :class="{ active: page === currentPage }"
      >
        <button class="page-link" @click="changePage(page)">{{ page }}</button>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <button class="page-link" @click="changePage(currentPage + 1)">Siguiente</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    currentPage: { type: Number, default: 1 },
    totalPages: { type: Number, default: 1 },
    maxVisible: { type: Number, default: 5 }
  },
  computed: {
    visiblePages() {
      let pages = [];
      let start = Math.max(1, this.currentPage - Math.floor(this.maxVisible / 2));
      let end = Math.min(this.totalPages, start + this.maxVisible - 1);
      
      if (end - start < this.maxVisible - 1) {
        start = Math.max(1, end - this.maxVisible + 1);
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      return pages;
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('page-changed', page);
      }
    }
  }
}
</script>