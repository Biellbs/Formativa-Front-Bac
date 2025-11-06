<template>
  <div class="min-h-[calc(100vh-132px)] bg-gray-50 p-10 flex flex-col items-center">
    <h1 class="text-4xl font-bold text-cyan-400 mb-12 text-center">
      Contato
    </h1>

    <div class="max-w-6xl w-full grid gap-8 md:grid-cols-3">

      <div
        class="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center
               hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300">
        <img src="/ping.png" alt="Localização" class="h-16 w-auto mb-4" />
        <h2 class="text-2xl font-semibold mb-2 text-cyan-400">Endereço</h2>
        <p class="text-gray-700">Rua Exemplo, 123, Cidade, Estado</p>
      </div>

      <div
        class="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center
               hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300">
        <img src="/phone.png" alt="Telefone" class="h-16 w-auto mb-4" />
        <h2 class="text-2xl font-semibold mb-2 text-cyan-400">Telefone</h2>
        <p class="text-gray-700">(11) 99999-9999</p>
      </div>

      <div
        class="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center
               hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300">
        <img src="/mail.png" alt="Email" class="h-16 w-auto mb-4" />
        <h2 class="text-2xl font-semibold mb-2 text-cyan-400">Email</h2>
        <p class="text-gray-700">contato@exemplo.com</p>
      </div>
    </div>
  </div>
</template>
