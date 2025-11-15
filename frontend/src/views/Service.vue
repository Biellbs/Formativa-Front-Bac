<template>
  <div class="min-h-[calc(100vh-132px)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 flex flex-col items-center">
    <h1 class="text-4xl font-bold text-white mb-4 text-center">
      Nossos Serviços
    </h1>
    <p class="text-gray-400 mb-12 text-center max-w-2xl">
      Soluções técnicas especializadas para manter sua operação funcionando com excelência
    </p>

    <div class="max-w-6xl w-full grid gap-8 md:grid-cols-3">
      <div class="bg-slate-800 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center border border-slate-700
                  hover:shadow-black hover:scale-105 hover:border-slate-600 transition-all duration-300">
        <div class="mb-4 p-4 bg-slate-700 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 class="text-2xl font-semibold mb-3 text-white">Manutenção Preventiva</h2>
        <p class="text-gray-300 leading-relaxed">
          Realizamos inspeções e manutenções regulares para evitar falhas e garantir a longevidade dos equipamentos industriais.
        </p>
      </div>

      <div class="bg-slate-800 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center border border-slate-700
                  hover:shadow-black hover:scale-105 hover:border-slate-600 transition-all duration-300">
        <div class="mb-4 p-4 bg-slate-700 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h2 class="text-2xl font-semibold mb-3 text-white">Manutenção Corretiva</h2>
        <p class="text-gray-300 leading-relaxed">
          Atendimento rápido e eficiente para reparar falhas inesperadas e minimizar o tempo de parada da sua produção.
        </p>
      </div>

      <div class="bg-slate-800 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center border border-slate-700
                  hover:shadow-black hover:scale-105 hover:border-slate-600 transition-all duration-300">
        <div class="mb-4 p-4 bg-slate-700 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <h2 class="text-2xl font-semibold mb-3 text-white">Consultoria Técnica</h2>
        <p class="text-gray-300 leading-relaxed">
          Fornecemos análises e recomendações para otimizar processos e aumentar a eficiência operacional da sua indústria.
        </p>
      </div>
    </div>

    <div class="mt-16 w-full max-w-4xl bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-8">
      <h2 class="text-2xl font-bold text-white mb-4 text-center">Por que escolher a TechFix?</h2>
      <div class="grid md:grid-cols-2 gap-6 mt-6">
        <div class="flex items-start space-x-3">
          <span class="text-white text-xl">✓</span>
          <p class="text-gray-300">Equipe altamente qualificada e certificada</p>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-white text-xl">✓</span>
          <p class="text-gray-300">Atendimento 24/7 para emergências</p>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-white text-xl">✓</span>
          <p class="text-gray-300">Equipamentos e tecnologia de ponta</p>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-white text-xl">✓</span>
          <p class="text-gray-300">Garantia de qualidade nos serviços</p>
        </div>
      </div>
    </div>
  </div>
</template>