<template>
  <div class="h-[calc(100vh-132px)] w-full bg-white flex justify-center items-center p-8 lg:p-10">
    <div class="w-full max-w-xs">
      <h1 class="text-3xl font-bold mb-6 text-black text-center">Login</h1>
      
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-black sr-only">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Digite seu email"
            class="w-full mt-2 px-4 py-2 border-b-2 border-black focus:outline-none focus:border-gray-400"
          />
        </div>

        <div class="mb-6">
          <label for="senha" class="block text-black sr-only">Senha</label>
          <input
            type="password"
            id="senha"
            v-model="senha"
            placeholder="Digite sua senha"
            class="w-full mt-2 px-4 py-2 border-b-2 border-black focus:outline-none focus:border-gray-400"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 cursor-pointer"
        >
          ENTRAR
        </button>
      </form>

      <div class="mt-4 text-center text-sm text-gray-600">
        Ou
      </div>

      <div class="mt-3.5">
        <div id="g_id_onload"
             data-client_id="437020888919-ifemq8dvkgbgbutoph5caq41cenfkdec.apps.googleusercontent.com"
             data-callback="handleGoogleResponse"
             data-auto_prompt="false">
        </div>
        <div class="g_id_signin"
             data-type="standard"
             data-shape="rectangular"
             data-theme="outline"
             data-text="signin_with"
             data-size="large"
             data-logo_alignment="left">
        </div>
      </div>

      <p class="mt-4 text-center text-sm text-gray-600">
        Primeiro acesso? 
        <router-link to="/cadastrar" class="text-gray-400 hover:underline font-semibold">
          Crie sua conta.
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      senha: ''
    };
  },
  mounted() {
    this.loadGoogleScript();
  },
  methods: {
    loadGoogleScript() {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    },
    handleSubmit() {
      console.log('Login com email:', this.email);
      console.log('Senha:', this.senha);
    },
    handleGoogleResponse(response) {
      console.log("Token JWT do Google:", response.credential);

      this.$axios.post('/auth/google', { token: response.credential })
        .then((data) => {
          console.log('Login com Google bem-sucedido:', data);
        })
        .catch((err) => {
          console.error('Erro ao logar com Google:', err);
        });
    }
  }
};
</script>

<style scoped>

</style>
