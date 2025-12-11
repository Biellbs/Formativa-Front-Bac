<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUsuariosStore } from '../stores/usuario';

const menuOpen = ref(false);
const router = useRouter();
const usuariosStore = useUsuariosStore();

const currentUser = computed(() => usuariosStore.currentUser);
const isLoggedIn = computed(() => !!currentUser.value);

function handleLogout() {
  usuariosStore.logout();
  menuOpen.value = false;
  router.push('/');
}

onMounted(() => {
  console.log('Header montado - Usuário logado:', currentUser.value);
});
</script>

<template>
  <nav class="bg-black border-b border-zinc-900 text-white p-6 shadow-2xl">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <!-- Logo -->
      <router-link to="/" class="text-2xl font-black tracking-tight hover:text-gray-300 transition-colors">
        TechForge
      </router-link>

      <!-- Mobile Menu Button -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden focus:outline-none text-white hover:text-gray-300 transition-colors"
        aria-label="Abrir menu"
      >
        <svg
          v-if="!menuOpen"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <div class="flex gap-8">
          <router-link to="/" class="text-white hover:text-gray-400 transition-colors text-sm font-medium">
            Home
          </router-link>
          <router-link to="/servicos" class="text-white hover:text-gray-400 transition-colors text-sm font-medium">
            Serviços
          </router-link>
          <router-link to="/contato" class="text-white hover:text-gray-400 transition-colors text-sm font-medium">
            Contato
          </router-link>
        </div>
        
        <div class="h-6 w-px bg-zinc-800"></div>
        
        <!-- Auth Section -->
        <div class="flex items-center gap-3">
          <template v-if="isLoggedIn">
            <router-link 
              to="/perfil"
              class="text-sm font-medium text-white hover:text-gray-400 transition-colors"
            >
              {{ currentUser?.name }}
            </router-link>
            <button 
              @click="handleLogout"
              class="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Sair
            </button>
          </template>
          <router-link 
            v-else 
            to="/login" 
            class="text-sm font-medium text-white hover:text-gray-400 transition-colors"
          >
            Login
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="md:hidden mt-6 pt-6 border-t border-zinc-900 space-y-4"
      >
        <router-link 
          @click="menuOpen = false" 
          to="/" 
          class="block text-white hover:text-gray-400 transition-colors text-sm font-medium"
        >
          Home
        </router-link>
        <router-link 
          @click="menuOpen = false" 
          to="/servicos" 
          class="block text-white hover:text-gray-400 transition-colors text-sm font-medium"
        >
          Serviços
        </router-link>
        <router-link 
          @click="menuOpen = false" 
          to="/contato" 
          class="block text-white hover:text-gray-400 transition-colors text-sm font-medium"
        >
          Contato
        </router-link>
        
        <div class="pt-4 border-t border-zinc-900">
          <template v-if="isLoggedIn">
            <router-link 
              to="/perfil"
              @click="menuOpen = false"
              class="block text-white hover:text-gray-400 transition-colors text-sm font-medium mb-3"
            >
              {{ currentUser?.name }}
            </router-link>
            <button 
              @click="handleLogout"
              class="block w-full text-left text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Sair
            </button>
          </template>
          <router-link 
            v-else 
            @click="menuOpen = false" 
            to="/login" 
            class="block text-white hover:text-gray-400 transition-colors text-sm font-medium"
          >
            Login
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
div[v-cloak] {
  display: none;
}
</style>