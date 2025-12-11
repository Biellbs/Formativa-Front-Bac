<template>
  <div class="h-[calc(100vh-132px)] w-full bg-black flex justify-center items-center p-8 lg:p-10 relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900"></div>
    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/2 rounded-full blur-3xl"></div>
    
    <div class="w-full max-w-md relative z-10">
      <div class="bg-zinc-900/40 backdrop-blur-2xl rounded-2xl shadow-2xl border border-zinc-800/50 p-8">
        <!-- Header minimalista -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-white mb-2">
            Bem-vindo
          </h1>
          <p class="text-sm text-gray-500">Entre com sua conta para continuar</p>
        </div>

        <!-- Mensagens de erro -->
        <div v-if="errorMessage" class="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg text-xs font-medium">
          {{ errorMessage }}
        </div>

        <!-- Mensagem de sucesso -->
        <div v-if="successMessage" class="mb-4 p-3 bg-green-500/10 border border-green-500/50 text-green-400 rounded-lg text-xs font-medium">
          {{ successMessage }}
        </div>
        
        <div class="space-y-4">
          <div class="relative">
            <label for="email" class="block text-gray-400 font-medium mb-2 text-xs">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="seu@email.com"
              required
              class="w-full px-4 py-3 bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/50 rounded-lg text-white text-sm placeholder-gray-600
                     focus:outline-none focus:border-white/50 focus:bg-zinc-800/50 transition-all duration-200"
            />
          </div>

          <div class="relative">
            <label for="senha" class="block text-gray-400 font-medium mb-2 text-xs">Senha</label>
            <input
              type="password"
              id="senha"
              v-model="formData.password"
              placeholder="••••••••"
              required
              minlength="6"
              class="w-full px-4 py-3 bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/50 rounded-lg text-white text-sm placeholder-gray-600
                     focus:outline-none focus:border-white/50 focus:bg-zinc-800/50 transition-all duration-200"
            />
          </div>

          <button
            @click="handleSubmit"
            :disabled="loading"
            class="w-full py-3 bg-white text-black rounded-lg font-semibold text-sm
                   hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200 flex items-center justify-center gap-2 mt-6"
          >
            <span>{{ loading ? 'Entrando...' : 'Entrar' }}</span>
            <svg v-if="!loading" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-zinc-800"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="px-3 bg-zinc-900/40 text-gray-500 text-xs">ou</span>
          </div>
        </div>

        <div class="flex justify-center">
          <div id="g_id_onload"
               data-client_id="586571572155-mcq92oor3iogka831rbohqlp1bl5plco.apps.googleusercontent.com"
               data-callback="handleGoogleResponse"
               data-auto_prompt="false">
          </div>
          <div class="g_id_signin w-full"
               data-type="standard"
               data-shape="rectangular"
               data-theme="filled_black"
               data-text="signin_with"
               data-size="large"
               data-logo_alignment="left"
               data-width="100%">
          </div>
        </div>

        <div class="mt-6 text-center">
          <p class="text-gray-500 text-sm">
            Primeiro acesso? 
            <router-link to="/cadastrar" class="text-white hover:text-gray-300 font-medium hover:underline transition-colors ml-1">
              Criar conta
            </router-link>
          </p>
        </div>
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

const formData = ref({
  email: '',
  password: ''
});

const loading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

onMounted(() => {
  loadGoogleScript();
  window.handleGoogleResponse = handleGoogleResponse;
});

function loadGoogleScript() {
  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

async function handleSubmit() {
  errorMessage.value = '';
  successMessage.value = '';
  loading.value = true;

  try {
    const response = await fetch('http://localhost:3000/api/usuarios/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.value.email,
        password: formData.value.password
      })
    });

    const result = await response.json();

    if (result.success) {
      successMessage.value = 'Login realizado com sucesso! Redirecionando...';
      
      usuariosStore.currentUser = result.usuario;
      localStorage.setItem('currentUser', JSON.stringify(result.usuario));
      
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } else {
      errorMessage.value = result.error || 'Email ou senha incorretos';
    }
  } catch (error) {
    errorMessage.value = 'Erro ao realizar login. Verifique sua conexão.';
    console.error('Erro no login:', error);
  } finally {
    loading.value = false;
  }
}

async function handleGoogleResponse(response) {
  console.log("Token JWT do Google:", response.credential);
  
  try {
    errorMessage.value = '';
    successMessage.value = 'Login com Google em desenvolvimento...';
  } catch (error) {
    console.error('Erro ao logar com Google:', error);
    errorMessage.value = 'Erro ao fazer login com Google';
  }
}
</script>