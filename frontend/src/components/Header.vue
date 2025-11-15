<script setup>
import { ref } from 'vue'

const menuAberto = ref(false)
</script>

<template>
  <nav class="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white p-5 shadow-xl relative">
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
    
    <div class="flex justify-between items-center max-w-6xl mx-auto">
      <div class="text-2xl font-bold tracking-wide">
        <span class="text-white">TechFix</span>
        <span class="text-gray-300"> Solutions</span>
      </div>

      <button
        @click="menuAberto = !menuAberto"
        class="md:hidden focus:outline-none hover:bg-slate-600 p-2 rounded-lg transition-all"
        aria-label="Alternar menu"
      >
        <svg
          v-if="!menuAberto"
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
        <router-link to="/" class="hover:text-gray-300 transition-all font-medium border-b-2 border-transparent hover:border-gray-300 pb-1">Início</router-link>
        <router-link to="/servicos" class="hover:text-gray-300 transition-all font-medium border-b-2 border-transparent hover:border-gray-300 pb-1">Serviços</router-link>
        <router-link to="/contato" class="hover:text-gray-300 transition-all font-medium border-b-2 border-transparent hover:border-gray-300 pb-1">Contato</router-link>
        <router-link to="/login" class="hover:text-gray-300 transition-all font-medium border-b-2 border-transparent hover:border-gray-300 pb-1">Acessar</router-link>
      </div>
    </div>

    <div
      v-if="menuAberto"
      class="flex flex-col mt-4 space-y-4 md:hidden bg-slate-800 p-4 rounded-lg shadow-2xl border border-slate-600"
    >
      <router-link @click="menuAberto = false" to="/" class="hover:text-gray-300 transition-all font-medium hover:bg-slate-700 p-2 rounded">Início</router-link>
      <router-link @click="menuAberto = false" to="/servicos" class="hover:text-gray-300 transition-all font-medium hover:bg-slate-700 p-2 rounded">Serviços</router-link>
      <router-link @click="menuAberto = false" to="/contato" class="hover:text-gray-300 transition-all font-medium hover:bg-slate-700 p-2 rounded">Contato</router-link>
      <router-link @click="menuAberto = false" to="/login" class="hover:text-gray-300 transition-all font-medium hover:bg-slate-700 p-2 rounded">Acessar</router-link>
    </div>
  </nav>
</template>

<style scoped>
div[v-cloak] {
  display: none;
}

.router-link-active {
  color: #d1d5db;
  border-bottom-color: #d1d5db;
}
</style>