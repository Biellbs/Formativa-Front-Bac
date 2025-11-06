<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <nav class="bg-gray-400 text-black p-5">
    <div class="flex justify-between items-center max-w-6xl mx-auto">
      <div class="text-xl font-bold">
        Máquina Tec
      </div>

      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden focus:outline-none"
        aria-label="Abrir menu"
      >

        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="hidden md:flex space-x-8">
        <router-link to="/" class="hover:text-gray-200 transition-colors">Home</router-link>
        <router-link to="/servicos" class="hover:text-gray-200 transition-colors">Serviços</router-link>
        <router-link to="/contato" class="hover:text-gray-200 transition-colors">Contato</router-link>
        <router-link to="/login" class="hover:text-gray-200 transition-colors">Login</router-link>
      </div>
    </div>


    <div
      v-if="menuOpen"
      class="flex flex-col mt-4 space-y-4 md:hidden bg-gray-400 p-4 rounded-lg shadow-lg"
    >
      <router-link @click="menuOpen = false" to="/" class="hover:text-gray-200 transition-colors">Home</router-link>
      <router-link @click="menuOpen = false" to="/servicos" class="hover:text-gray-200 transition-colors">Serviços</router-link>
      <router-link @click="menuOpen = false" to="/contato" class="hover:text-gray-200 transition-colors">Contato</router-link>
      <router-link @click="menuOpen = false" to="/login" class="hover:text-gray-200 transition-colors">Login</router-link>
    </div>
  </nav>
</template>

<style scoped>
div[v-cloak] {
  display: none;
}
</style>
