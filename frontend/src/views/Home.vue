<template>
  <div class="min-h-[calc(100vh-132px)] flex flex-col justify-center items-center p-10 bg-black">
    <div class="max-w-4xl w-full text-center space-y-8">
      <!-- Título Principal -->
      <div class="space-y-4">
        <h1 class="text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
          TechForge Industrial
        </h1>
        <div class="h-1 w-32 bg-white rounded-full mx-auto"></div>
      </div>

      <!-- Subtítulo -->
      <p class="text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
        Manutenção Industrial de Excelência
      </p>

      <!-- Descrição -->
      <p class="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Soluções completas em manutenção preventiva, corretiva e consultoria técnica 
        para manter sua operação funcionando com máxima eficiência.
      </p>

      <!-- Botões de Ação -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
        <button
          class="bg-white text-black px-10 py-4 rounded-xl shadow-2xl
                 hover:bg-gray-200 hover:scale-105 transition-all duration-300
                 flex items-center gap-3 font-black text-lg"
          type="button"
        >
          <span>Solicitar Orçamento</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <button
          class="bg-zinc-900 border-2 border-zinc-800 text-white px-10 py-4 rounded-xl
                 hover:border-white hover:scale-105 transition-all duration-300
                 flex items-center gap-3 font-semibold text-lg"
          type="button"
        >
          <span>Nossos Serviços</span>
        </button>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
        <div class="space-y-2">
          <p class="text-4xl font-black text-white">15+</p>
          <p class="text-sm text-gray-500 uppercase tracking-wide">Anos de Experiência</p>
        </div>
        <div class="space-y-2">
          <p class="text-4xl font-black text-white">500+</p>
          <p class="text-sm text-gray-500 uppercase tracking-wide">Projetos Concluídos</p>
        </div>
        <div class="space-y-2">
          <p class="text-4xl font-black text-white">98%</p>
          <p class="text-sm text-gray-500 uppercase tracking-wide">Satisfação</p>
        </div>
      </div>
    </div>
  </div>
</template>