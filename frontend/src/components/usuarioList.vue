<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead class="bg-slate-700 border-b border-slate-600">
        <tr>
          <th class="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-300">Nome</th>
          <th class="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-300">E-mail</th>
          <th class="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-300">Papel</th>
          <th class="px-6 py-4 text-left text-sm font-semibold uppercase text-gray-300">Ações</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-700">
        <tr
          v-for="u in usuario"
          :key="u._id"
          class="hover:bg-slate-700/50 transition-colors"
        >
          <td class="px-6 py-4 whitespace-nowrap text-white font-medium">{{ u.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-gray-300">{{ u.email }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span 
              :class="{
                'bg-purple-900/30 text-purple-400 border border-purple-800': u.role === 'Admin',
                'bg-blue-900/30 text-blue-400 border border-blue-800': u.role === 'Usuario'
              }"
              class="px-3 py-1 rounded-full text-xs font-semibold uppercase"
            >
              {{ u.role }}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap flex gap-2">
            <button
              @click="$emit('edit', u)"
              class="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg transition-all hover:scale-105 font-medium border border-slate-500"
              aria-label="Editar usuário"
            >
              Editar
            </button>
            <button
              @click="$emit('remove', u._id)"
              class="bg-red-900/50 hover:bg-red-800 text-red-400 hover:text-white px-4 py-2 rounded-lg transition-all hover:scale-105 font-medium border border-red-800"
              aria-label="Excluir usuário"
            >
              Excluir
            </button>
          </td>
        </tr>
        <tr v-if="usuario.length === 0">
          <td colspan="4" class="text-center py-8 text-gray-400 italic">
            Nenhum usuário cadastrado ainda.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  usuario: { type: Array, default: () => [] }
});
const emit = defineEmits(["edit", "remove"]);
</script>