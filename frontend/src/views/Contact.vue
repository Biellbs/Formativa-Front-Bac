<template>
  <div class="min-h-[calc(100vh-132px)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 flex flex-col items-center">
    <h1 class="text-4xl font-bold text-white mb-4 text-center">
      Fale Conosco
    </h1>
    <p class="text-gray-400 mb-12 text-center max-w-2xl">
      Entre em contato com a TechFix Solutions. Estamos prontos para atender você.
    </p>

    <div class="max-w-6xl w-full grid gap-8 md:grid-cols-3">

      <div
        class="bg-slate-800 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center border border-slate-700
               hover:shadow-black hover:scale-105 hover:border-slate-600 transition-all duration-300">
        <img src="/ping.png" alt="Localização" class="h-16 w-auto mb-4 filter brightness-90" />
        <h2 class="text-2xl font-semibold mb-2 text-white">Localização</h2>
        <p class="text-gray-300">Av. Tecnologia, 456<br/>São Paulo, SP</p>
      </div>

      <div
        class="bg-slate-800 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center border border-slate-700
               hover:shadow-black hover:scale-105 hover:border-slate-600 transition-all duration-300">
        <img src="/phone.png" alt="Telefone" class="h-16 w-auto mb-4 filter brightness-90" />
        <h2 class="text-2xl font-semibold mb-2 text-white">Telefone</h2>
        <p class="text-gray-300">(11) 3456-7890<br/>(11) 98765-4321</p>
      </div>

      <div
        class="bg-slate-800 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center border border-slate-700
               hover:shadow-black hover:scale-105 hover:border-slate-600 transition-all duration-300">
        <img src="/mail.png" alt="Email" class="h-16 w-auto mb-4 filter brightness-90" />
        <h2 class="text-2xl font-semibold mb-2 text-white">E-mail</h2>
        <p class="text-gray-300">contato@techfix.com.br<br/>suporte@techfix.com.br</p>
      </div>
    </div>

    <div class="mt-12 text-center">
      <p class="text-gray-400 text-sm">
        Horário de atendimento: Segunda a Sexta, das 8h às 18h
      </p>
    </div>
  </div>
</template>