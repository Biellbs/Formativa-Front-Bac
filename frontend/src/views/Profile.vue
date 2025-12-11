<template>
  <div class="min-h-screen bg-black p-8 lg:p-10">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-5xl font-black text-white mb-3 tracking-tight">
          Perfil
        </h1>
        <div class="h-px w-16 bg-white mb-4"></div>
        <p class="text-gray-500 text-sm">Suas informações pessoais</p>
      </div>

      <!-- Card de Perfil Principal -->
      <div class="bg-zinc-950 rounded-2xl border border-zinc-900 p-8 mb-8">
        <!-- Avatar e Nome -->
        <div class="flex items-center gap-6 mb-8 pb-8 border-b border-zinc-900">
          <div class="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-white mb-1">
              {{ currentUser.nome }}
            </h2>
            <p class="text-sm text-gray-500">TechForge Industrial</p>
          </div>
        </div>

        <!-- Informações do Usuário -->
        <div class="space-y-4">
          <!-- Email -->
          <div class="flex items-center justify-between py-3">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-sm text-gray-500">Email</span>
            </div>
            <p class="text-sm font-medium text-white">{{ currentUser.email || 'email@exemplo.com' }}</p>
          </div>
        </div>
      </div>

      <!-- Seção de Navegação -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
          Acesso Rápido
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Card Dashboard -->
          <router-link 
            to="/dashboard" 
            class="bg-zinc-950 rounded-xl border border-zinc-900 p-6 hover:border-zinc-800 transition-all duration-300 group"
          >
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l-4-4m0 0l-4 4m4-4v4" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-bold text-white mb-1">
                  Dashboard
                </h4>
                <p class="text-xs text-gray-500">Visualize dados</p>
              </div>
            </div>
          </router-link>

          <!-- Card Máquinas -->
          <router-link 
            to="/maquina" 
            class="bg-zinc-950 rounded-xl border border-zinc-900 p-6 hover:border-zinc-800 transition-all duration-300 group"
          >
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-bold text-white mb-1">
                  Máquinas
                </h4>
                <p class="text-xs text-gray-500">Gerencie máquinas</p>
              </div>
            </div>
          </router-link>

          <!-- Card Calendário -->
          <router-link 
            to="/calendario" 
            class="bg-zinc-950 rounded-xl border border-zinc-900 p-6 hover:border-zinc-800 transition-all duration-300 group"
          >
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-bold text-white mb-1">
                  Calendário
                </h4>
                <p class="text-xs text-gray-500">Agendamentos</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Botão Logout -->
      <div class="flex justify-start">
        <button
          @click="logout"
          class="text-sm text-gray-500 hover:text-white transition-colors font-medium flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sair da Conta
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUsuariosStore } from '../stores/usuario';

const router = useRouter();
const usuariosStore = useUsuariosStore();

const currentUser = ref({
  nome: '',
  email: '',
  _id: '',
  criadoEm: ''
});

const logout = () => {
  usuariosStore.currentUser = null;
  localStorage.removeItem('currentUser');
  router.push('/login');
};

onMounted(() => {
  let user = usuariosStore.currentUser;
  
  if (!user) {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        user = JSON.parse(savedUser);
      } catch (e) {
        console.error('Erro ao parsear usuário:', e);
      }
    }
  }
  
  if (user) {
    currentUser.value = {
      nome: user.nome || user.name || 'Usuário',
      email: user.email || 'email@exemplo.com',
      _id: user._id || '',
      criadoEm: user.criadoEm || ''
    };
  } else {
    router.push('/login');
  }
});
</script>