<template>
  <div class="min-h-[calc(100vh-132px)] bg-black p-10 flex flex-col items-center justify-center">
    <div class="max-w-6xl w-full">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight">
          Serviços
        </h1>
        <div class="h-px w-24 bg-white mx-auto mb-6"></div>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          Soluções completas para manter sua operação industrial funcionando com máxima eficiência
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid gap-8 md:grid-cols-3">
        <!-- Preventiva -->
        <div class="group relative bg-zinc-950 border border-zinc-900 rounded-2xl p-8 
                    hover:border-zinc-800 transition-all duration-300">
          <div class="mb-6">
            <div class="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center
                        group-hover:bg-zinc-800 transition-colors duration-300">
              <svg class="w-6 h-6 text-gray-400" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
          </div>
          
          <h2 class="text-xl font-bold mb-3 text-white">
            Manutenção Preventiva
          </h2>
          <p class="text-sm text-gray-500 leading-relaxed">
            Acompanhamento sistemático e verificações periódicas que previnem problemas antes que aconteçam, 
            prolongando a vida útil de suas máquinas e equipamentos.
          </p>
        </div>

        <!-- Corretiva -->
        <div class="group relative bg-zinc-950 border border-zinc-900 rounded-2xl p-8 
                    hover:border-zinc-800 transition-all duration-300">
          <div class="mb-6">
            <div class="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center
                        group-hover:bg-zinc-800 transition-colors duration-300">
              <svg class="w-6 h-6 text-gray-400" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
          </div>
          
          <h2 class="text-xl font-bold mb-3 text-white">
            Manutenção Corretiva
          </h2>
          <p class="text-sm text-gray-500 leading-relaxed">
            Resposta ágil para emergências e quebras inesperadas, restaurando suas operações 
            rapidamente e reduzindo ao mínimo as interrupções na linha de produção.
          </p>
        </div>

        <!-- Consultoria -->
        <div class="group relative bg-zinc-950 border border-zinc-900 rounded-2xl p-8 
                    hover:border-zinc-800 transition-all duration-300">
          <div class="mb-6">
            <div class="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center
                        group-hover:bg-zinc-800 transition-colors duration-300">
              <svg class="w-6 h-6 text-gray-400" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
          </div>
          
          <h2 class="text-xl font-bold mb-3 text-white">
            Consultoria Técnica
          </h2>
          <p class="text-sm text-gray-500 leading-relaxed">
            Avaliação especializada e orientações estratégicas para aperfeiçoar seus métodos de trabalho 
            e maximizar o desempenho de toda a sua estrutura industrial.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>