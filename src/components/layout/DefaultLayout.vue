<script setup lang="ts">
import Header from './header/Header.vue';
import Footer from './footer/Footer.vue';
</script>

<template>
  <div class="h-screen flex flex-col bg-gray-200 font-sans">
    <Header />

    <main class="flex-1 overflow-hidden p-2">
      <slot />
    </main>

    <Footer />
  </div>
</template>
