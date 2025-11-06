<template>
  <div class="h-[calc(100vh-132px)] w-full bg-white flex justify-center items-center p-8 lg:p-10">
    <div class="w-full max-w-xs">
      <h1 class="text-3xl font-bold mb-6 text-black text-center">Criar Conta</h1>
      
      <form>
        <div class="mb-4">
          <label for="nome" class="block text-black sr-only">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            class="w-full mt-2 px-4 py-2 border-b-2 border-black focus:outline-none focus:border-gray-400"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-black sr-only">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            class="w-full mt-2 px-4 py-2 border-b-2 border-black focus:outline-none focus:border-gray-400"
          />
        </div>

        <div class="mb-4">
          <label for="senha" class="block text-black sr-only">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            class="w-full mt-2 px-4 py-2 border-b-2 border-black focus:outline-none focus:border-gray-400"
          />
        </div>

        <div class="mb-6">
          <label for="confirmar-senha" class="block text-black sr-only">Confirmar Senha</label>
          <input
            type="password"
            id="confirmar-senha"
            placeholder="Confirme sua senha"
            class="w-full mt-2 px-4 py-2 border-b-2 border-black focus:outline-none focus:border-gray-400"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 bg-cyan-400 text-white rounded-full hover:bg-gray-500 cursor-pointer"
        >
          CADASTRAR
        </button>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        Já tem uma conta? 
        <a href="/login" class="text-gray-400 hover:underline font-semibold">
          Faça login.
        </a>
      </p>
    </div>
  </div>
</template>
