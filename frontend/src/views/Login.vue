<template>
  <div class="h-[calc(100vh-132px)] w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex justify-center items-center p-8 lg:p-10">
    <div class="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-8">
      <h1 class="text-3xl font-bold mb-2 text-white text-center">Acessar Conta</h1>
      <p class="text-gray-400 text-center mb-8 text-sm">Entre com suas credenciais TechFix</p>
      
      <form @submit.prevent="realizarLogin">
        <!-- Mensagem de erro -->
        <div v-if="erro" class="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-lg">
          <p class="text-red-400 text-sm text-center">{{ erro }}</p>
        </div>

        <div class="mb-6">
          <label for="emailUsuario" class="block text-gray-300 mb-2 text-sm font-medium">E-mail</label>
          <input
            type="email"
            id="emailUsuario"
            v-model="emailUsuario"
            placeholder="seu@email.com"
            class="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
          />
        </div>

        <div class="mb-6">
          <label for="senhaUsuario" class="block text-gray-300 mb-2 text-sm font-medium">Senha</label>
          <input
            type="password"
            id="senhaUsuario"
            v-model="senhaUsuario"
            placeholder="••••••••"
            class="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
          />
        </div>

        <button
          type="submit"
          :disabled="carregando"
          class="w-full py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-lg font-bold hover:scale-105 hover:shadow-xl transition-all duration-300 border border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {{ carregando ? 'ENTRANDO...' : 'ENTRAR NA CONTA' }}
        </button>
      </form>

      <div class="mt-6 mb-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-slate-600"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-slate-800 text-gray-400">Ou continue com</span>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <div id="g_id_onload"
             data-client_id="437020888919-ifemq8dvkgbgbutoph5caq41cenfkdec.apps.googleusercontent.com"
             data-callback="processarLoginGoogle"
             data-auto_prompt="false">
        </div>
        <div class="g_id_signin"
             data-type="standard"
             data-shape="rectangular"
             data-theme="filled_black"
             data-text="signin_with"
             data-size="large"
             data-logo_alignment="left"
             data-width="100%">
        </div>
      </div>

      <p class="mt-6 text-center text-sm text-gray-400">
        Ainda não tem conta? 
        <router-link to="/cadastrar" class="text-white hover:underline font-semibold ml-1">
          Cadastre-se aqui
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from '../services/api.js';

export default {
  data() {
    return {
      emailUsuario: '',
      senhaUsuario: '',
      carregando: false,
      erro: null
    };
  },
  mounted() {
    this.carregarScriptGoogle();
  },
  methods: {
    carregarScriptGoogle() {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    },
    async realizarLogin() {
      // Limpa mensagens anteriores
      this.erro = null;

      // Validações
      if (!this.emailUsuario || !this.senhaUsuario) {
        this.erro = 'Por favor, preencha e-mail e senha.';
        return;
      }

      this.carregando = true;

      try {
        // Busca todos os usuários
        const response = await api.get('/usuarios');
        const usuarios = response.data;

        // Procura pelo usuário com email correspondente
        const usuario = usuarios.find(u => u.email === this.emailUsuario);

        if (!usuario) {
          this.erro = 'E-mail ou senha incorretos.';
          this.carregando = false;
          return;
        }

        // Verifica a senha (em texto plano - não recomendado em produção!)
        if (usuario.password !== this.senhaUsuario) {
          this.erro = 'E-mail ou senha incorretos.';
          this.carregando = false;
          return;
        }

        // Login bem-sucedido
        console.log('Login realizado com sucesso:', usuario);

        // Salva informações do usuário no localStorage
        localStorage.setItem('usuario', JSON.stringify({
          id: usuario._id,
          name: usuario.name,
          email: usuario.email,
          role: usuario.role
        }));

        // Redireciona baseado no papel do usuário
        if (usuario.role === 'Admin') {
          this.$router.push('/profile');
        } else {
          this.$router.push('/');
        }

      } catch (err) {
        console.error('Erro ao fazer login:', err);
        this.erro = 'Erro ao conectar com o servidor. Tente novamente.';
      } finally {
        this.carregando = false;
      }
    },
    processarLoginGoogle(response) {
      console.log("Token JWT do Google:", response.credential);

      this.$axios.post('/auth/google', { token: response.credential })
        .then((data) => {
          console.log('Login Google realizado com sucesso:', data);
        })
        .catch((err) => {
          console.error('Erro ao processar login Google:', err);
        });
    }
  }
};
</script>

<style scoped>
</style>