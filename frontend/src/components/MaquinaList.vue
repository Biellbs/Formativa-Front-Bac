<template>
  <div class="">
    <table class="w-full">
      <thead class="bg-cyan-400 text-white">
        <tr>
          <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Nome</th>
          <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Tipo</th>
          <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Status</th>
          <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Ações</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr
          v-for="u in maquina"
          :key="u._id"
          class=""
        >
          <td class="px-6 py-4 whitespace-nowrap text-gray-800">{{ u.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-gray-800">{{ u.type }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-gray-800">{{ u.status }}</td>
          <td class="px-6 py-4 whitespace-nowrap flex gap-2">
            <button
              @click="$emit('edit', u)"
              class="bg-cyan-400 hover:bg-cyan-500 text-white px-3 py-1 rounded transition cursor-pointer"
              aria-label="Editar máquina"
            >
              Editar
            </button>
            <button
              @click="$emit('remove', u._id)"
              class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition cursor-pointer"
              aria-label="Excluir máquina"
            >
              Excluir
            </button>
          </td>
        </tr>
        <tr v-if="maquina.length === 0">
          <td colspan="4" class="text-center py-4 text-gray-500 italic">
            Nenhuma máquina cadastrada.
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
