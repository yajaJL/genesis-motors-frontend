<template>
  <div class="skeleton-loading">
    <div class="skeleton-card" v-for="i in count" :key="i">
      <div class="skeleton-line skeleton-title"></div>
      <div class="skeleton-line skeleton-text"></div>
      <div class="skeleton-line skeleton-text short"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSkeleton',
  props: {
    count: { type: Number, default: 3 }
  }
}
</script>

<style scoped>
.skeleton-loading {
  padding: 20px;
}

.skeleton-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.skeleton-line {
  height: 15px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 10px;
}

.skeleton-title {
  width: 60%;
  height: 20px;
}

.skeleton-text {
  width: 90%;
}

.skeleton-text.short {
  width: 40%;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>