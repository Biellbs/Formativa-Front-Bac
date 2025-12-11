<template>
  <div class="min-h-[calc(100vh-132px)] bg-black p-8 lg:p-10 flex flex-col items-center relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900"></div>
    <div class="absolute top-1/4 right-1/3 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/2 rounded-full blur-3xl"></div>
    
    <div class="max-w-6xl w-full relative z-10">
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-white mb-2 text-center">
          Contato
        </h1>
        <p class="text-gray-500 text-center text-sm">Entre em contato através dos canais abaixo</p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">

        <!-- Card Endereço -->
        <div class="group bg-zinc-900/40 backdrop-blur-xl rounded-xl p-8 border border-zinc-800/50
                    hover:border-zinc-600 transition-all duration-200">
          <div class="bg-zinc-800/50 rounded-lg w-12 h-12 flex items-center justify-center mb-6 
                      group-hover:bg-white/10 transition-all duration-200">
            <img src="/ping.png" alt="Localização" 
                 class="h-6 w-auto opacity-70 group-hover:opacity-100 transition-all duration-200" />
          </div>
          <h2 class="text-lg font-semibold mb-3 text-white">
            Endereço
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed">
            Rua Pastor Cicero Canuto de Lima, 71, Campinas, SP
          </p>
        </div>

        <!-- Card Telefone -->
        <div class="group bg-zinc-900/40 backdrop-blur-xl rounded-xl p-8 border border-zinc-800/50
                    hover:border-zinc-600 transition-all duration-200">
          <div class="bg-zinc-800/50 rounded-lg w-12 h-12 flex items-center justify-center mb-6 
                      group-hover:bg-white/10 transition-all duration-200">
            <img src="/phone.png" alt="Telefone" 
                 class="h-6 w-auto opacity-70 group-hover:opacity-100 transition-all duration-200" />
          </div>
          <h2 class="text-lg font-semibold mb-3 text-white">
            Telefone
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed">
            (19) 99169 5374
          </p>
        </div>

        <!-- Card Email -->
        <div class="group bg-zinc-900/40 backdrop-blur-xl rounded-xl p-8 border border-zinc-800/50
                    hover:border-zinc-600 transition-all duration-200">
          <div class="bg-zinc-800/50 rounded-lg w-12 h-12 flex items-center justify-center mb-6 
                      group-hover:bg-white/10 transition-all duration-200">
            <img src="/mail.png" alt="Email" 
                 class="h-6 w-auto opacity-70 group-hover:opacity-100 transition-all duration-200" />
          </div>
          <h2 class="text-lg font-semibold mb-3 text-white">
            Email
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed break-all">
            gabriel.santos727@senaisp.edu.br
          </p>
        </div>
      </div>

      <!-- Seção adicional de chamada para ação -->
      <div class="mt-16 bg-zinc-900/40 backdrop-blur-xl rounded-xl p-10 border border-zinc-800/50 text-center">
        <h3 class="text-2xl font-semibold text-white mb-2">
          Pronto para começar?
        </h3>
        <p class="text-gray-400 mb-6 text-sm">
          Estamos disponíveis para atender você
        </p>
        <button class="bg-white text-black px-6 py-3 rounded-lg font-semibold text-sm
                       hover:bg-gray-100 transition-all duration-200 inline-flex items-center gap-2">
          <span>Entrar em Contato</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Sem lógica necessária para esta página estática
</script>