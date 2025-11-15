<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead class="bg-slate-700 border-b border-slate-600">
        <tr>
          <th class="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-300">Nome</th>
          <th class="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-300">Tipo</th>
          <th class="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-300">Status</th>
          <th class="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-300">Ações</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-700">
        <tr
          v-for="u in maquina"
          :key="u._id"
          class="hover:bg-slate-700/50 transition-colors"
        >
          <td class="px-6 py-4 whitespace-nowrap text-white font-medium">{{ u.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-gray-300">{{ u.type }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span 
              :class="{
                'bg-green-900/30 text-green-400 border border-green-800': u.status === 'Funcionando',
                'bg-red-900/30 text-red-400 border border-red-800': u.status === 'Parada',
                'bg-yellow-900/30 text-yellow-400 border border-yellow-800': u.status === 'Em manutenção'
              }"
              class="px-3 py-1 rounded-full text-xs font-semibold"
            >
              {{ u.status }}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap flex gap-2">
            <button
              @click="$emit('edit', u)"
              class="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg transition-all hover:scale-105 font-medium border border-slate-500"
              aria-label="Editar equipamento"
            >
              Editar
            </button>
            <button
              @click="$emit('remove', u._id)"
              class="bg-red-900/50 hover:bg-red-800 text-red-400 hover:text-white px-4 py-2 rounded-lg transition-all hover:scale-105 font-medium border border-red-800"
              aria-label="Excluir equipamento"
            >
              Excluir
            </button>
          </td>
        </tr>
        <tr v-if="maquina.length === 0">
          <td colspan="4" class="text-center py-8 text-gray-400 italic">
            Nenhum equipamento cadastrado ainda.
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