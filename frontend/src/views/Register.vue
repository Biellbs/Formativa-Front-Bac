<template>
  <div class="h-[calc(100vh-132px)] w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex justify-center items-center p-8 lg:p-10">
    <div class="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-8">
      <h1 class="text-3xl font-bold mb-2 text-white text-center">Criar Conta</h1>
      <p class="text-gray-400 text-center mb-8 text-sm">Cadastre-se na TechFix Solutions</p>
      
      <form @submit.prevent="realizarCadastro">
        <div class="mb-5">
          <label for="nomeCompleto" class="block text-gray-300 mb-2 text-sm font-medium">Nome Completo</label>
          <input
            type="text"
            id="nomeCompleto"
            v-model="nomeCompleto"
            placeholder="Seu nome completo"
            class="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
          />
        </div>

        <div class="mb-5">
          <label for="emailCadastro" class="block text-gray-300 mb-2 text-sm font-medium">E-mail</label>
          <input
            type="email"
            id="emailCadastro"
            v-model="emailCadastro"
            placeholder="seu@email.com"
            class="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
          />
        </div>

        <div class="mb-5">
          <label for="senhaCadastro" class="block text-gray-300 mb-2 text-sm font-medium">Senha</label>
          <input
            type="password"
            id="senhaCadastro"
            v-model="senhaCadastro"
            placeholder="Mínimo 8 caracteres"
            class="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
          />
        </div>

        <div class="mb-6">
          <label for="confirmarSenha" class="block text-gray-300 mb-2 text-sm font-medium">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            v-model="confirmarSenha"
            placeholder="Digite a senha novamente"
            class="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
          />
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-lg font-bold hover:scale-105 hover:shadow-xl transition-all duration-300 border border-slate-600"
        >
          CRIAR MINHA CONTA
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-gray-400">
        Já possui uma conta? 
        <router-link to="/login" class="text-white hover:underline font-semibold ml-1">
          Fazer login
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
      nomeCompleto: '',
      emailCadastro: '',
      senhaCadastro: '',
      confirmarSenha: '',
      carregando: false,
      erro: null,
      sucesso: false
    };
  },
  methods: {
    async realizarCadastro() {
      // Limpa mensagens anteriores
      this.erro = null;
      this.sucesso = false;

      // Validações
      if (!this.nomeCompleto || !this.emailCadastro || !this.senhaCadastro || !this.confirmarSenha) {
        this.erro = 'Por favor, preencha todos os campos.';
        return;
      }

      if (this.senhaCadastro !== this.confirmarSenha) {
        this.erro = 'As senhas não coincidem!';
        return;
      }

      if (this.senhaCadastro.length < 8) {
        this.erro = 'A senha deve ter no mínimo 8 caracteres.';
        return;
      }

      // Envia para o backend
      this.carregando = true;
      
      try {
        const response = await api.post('/usuarios', {
          name: this.nomeCompleto,
          email: this.emailCadastro,
          password: this.senhaCadastro,
          role: 'Usuario' // Define como usuário padrão
        });

        console.log('Usuário criado com sucesso:', response.data);
        this.sucesso = true;

        // Limpa o formulário
        this.nomeCompleto = '';
        this.emailCadastro = '';
        this.senhaCadastro = '';
        this.confirmarSenha = '';

        // Redireciona para login após 2 segundos
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);

      } catch (err) {
        console.error('Erro ao criar usuário:', err);
        this.erro = err?.response?.data?.error || 'Erro ao criar conta. Tente novamente.';
        
        // Se for erro de email duplicado
        if (err?.response?.data?.details?.includes('duplicate') || 
            err?.response?.data?.details?.includes('E11000')) {
          this.erro = 'Este e-mail já está cadastrado.';
        }
      } finally {
        this.carregando = false;
      }
    }
  }
};
</script>

<style scoped>
</style>