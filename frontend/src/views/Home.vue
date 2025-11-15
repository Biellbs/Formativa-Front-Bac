<template>
  <div class="min-h-[calc(100vh-132px)] flex flex-col justify-between p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

    <div class="container mx-auto bg-slate-800 shadow-2xl rounded-2xl p-8 border border-slate-700">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <h1 class="text-3xl font-bold text-white text-center md:text-left">
          Bem-vindo à <span class="text-gray-300">TechFix Solutions</span>
        </h1>
        <h2 class="text-2xl font-semibold text-gray-400 text-center md:text-right">
          Soluções Técnicas Especializadas
        </h2>
      </div>
      
      <div class="mt-6 border-t border-slate-700 pt-6">
        <p class="text-gray-300 text-center md:text-left leading-relaxed">
          Referência em serviços técnicos de alta qualidade. Atendemos empresas e indústrias com excelência e compromisso.
        </p>
      </div>
    </div>

    <div class="flex justify-center items-center mt-10">
      <button
        class="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-10 py-5 rounded-xl shadow-2xl hover:scale-105 hover:shadow-black border border-slate-600 transition-all duration-300"
        type="button"
      >
        <span class="text-lg font-bold">Solicitar Atendimento</span>
      </button>
    </div>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:scale-105 transition-transform duration-300">
        <h3 class="text-xl font-bold text-white mb-2">Qualidade</h3>
        <p class="text-gray-400 text-sm">Serviços certificados e garantidos</p>
      </div>
      
      <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:scale-105 transition-transform duration-300">
        <h3 class="text-xl font-bold text-white mb-2">Agilidade</h3>
        <p class="text-gray-400 text-sm">Atendimento rápido e eficiente</p>
      </div>
      
      <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:scale-105 transition-transform duration-300">
        <h3 class="text-xl font-bold text-white mb-2">Experiência</h3>
        <p class="text-gray-400 text-sm">Anos de mercado e expertise</p>
      </div>
    </div>
  </div>
</template>