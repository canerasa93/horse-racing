<script setup lang="ts">
import Logo from './_partials/Logo.vue';
import Actions from './_partials/Actions.vue';
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-gray-800 border-b border-white/5 px-6 py-3 flex justify-between items-center text-white shadow-2xl"
  >
    <Logo />
    <Actions />
  </header>
</template>
