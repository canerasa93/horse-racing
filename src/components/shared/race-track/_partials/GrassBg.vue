<template>
  <div class="absolute inset-0 opacity-20 pointer-events-none">
    <div class="h-full w-full grass-bg"></div>
  </div>
</template>

<style scoped>
.grass-bg {
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 40px,
    rgba(255, 255, 255, 0.1) 40px,
    rgba(255, 255, 255, 0.1) 80px
  );
}
</style>
