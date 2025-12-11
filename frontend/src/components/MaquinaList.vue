<template>
  <div class="overflow-hidden rounded-xl shadow-2xl border-2 border-zinc-800">
    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-zinc-800 border-b-2 border-zinc-700">
          <th class="px-8 py-4 text-left text-xs font-black uppercase tracking-wider text-white">
            Nome
          </th>
          <th class="px-8 py-4 text-left text-xs font-black uppercase tracking-wider text-white">
            Tipo
          </th>
          <th class="px-8 py-4 text-left text-xs font-black uppercase tracking-wider text-white">
            Status
          </th>
          <th class="px-8 py-4 text-left text-xs font-black uppercase tracking-wider text-white">
            Ações
          </th>
        </tr>
      </thead>
      <tbody class="bg-zinc-900">
        <tr
          v-for="u in maquina"
          :key="u._id"
          class="border-b border-zinc-800 hover:bg-zinc-800 transition-colors duration-200"
        >
          <td class="px-8 py-5 text-sm font-semibold text-white">
            {{ u.name }}
          </td>
          <td class="px-8 py-5 text-sm text-gray-300">
            {{ u.type }}
          </td>
          <td class="px-8 py-5 text-sm text-gray-300">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800 text-white border border-zinc-700">
              {{ u.status }}
            </span>
          </td>
          <td class="px-8 py-5">
            <div class="flex items-center gap-3">
              <button
                @click="$emit('edit', u)"
                class="inline-flex items-center justify-center bg-white hover:bg-gray-200 text-black font-black px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                aria-label="Editar máquina"
              >
                Editar
              </button>
              <button
                @click="$emit('remove', u._id)"
                class="inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white font-black px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 border-2 border-zinc-700 hover:border-white"
                aria-label="Excluir máquina"
              >
                Excluir
              </button>
            </div>
          </td>
        </tr>
        <tr v-if="maquina.length === 0">
          <td colspan="4" class="px-8 py-12 text-center">
            <div class="flex flex-col items-center justify-center">
              <svg class="w-16 h-16 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p class="text-gray-400 text-base font-semibold">
                Nenhuma máquina cadastrada
              </p>
              <p class="text-gray-500 text-sm mt-1">
                Adicione uma máquina para começar
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  maquina: { type: Array, default: () => [] }
});
const emit = defineEmits(["edit", "remove"]);
</script>