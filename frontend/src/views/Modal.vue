<template>
  <div
    class="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
    @click.self="$emit('close')"
  >
    <div class="bg-zinc-900 rounded-3xl shadow-2xl max-w-2xl w-full border border-zinc-800">
      <!-- Cabeçalho -->
      <div class="bg-white p-8 rounded-t-3xl">
        <div class="flex items-center justify-between">
          <h2 class="text-3xl font-black text-black flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Detalhes
          </h2>
          <button
            @click="$emit('close')"
            class="text-black hover:bg-black/10 rounded-xl p-2 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Conteúdo -->
      <div class="p-8 space-y-5">
        <div class="bg-zinc-800 rounded-2xl p-5 border-l-4 border-white">
          <p class="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">Máquina</p>
          <p class="text-xl font-bold text-white">
            {{ manutencao.maquina?.name || 'N/A' }}
          </p>
          <p class="text-sm text-gray-400 mt-1">{{ manutencao.maquina?.type || '' }}</p>
        </div>

        <div class="bg-zinc-800 rounded-2xl p-5 border-l-4 border-gray-400">
          <p class="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">Técnico</p>
          <p class="text-xl font-bold text-white">{{ manutencao.tecnico }}</p>
        </div>

        <div class="bg-zinc-800 rounded-2xl p-5 border-l-4 border-gray-400">
          <p class="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">Data</p>
          <p class="text-xl font-bold text-white">
            {{ formatarData(manutencao.dataAgendada) }}
          </p>
        </div>

        <div class="bg-zinc-800 rounded-2xl p-5 border-l-4 border-gray-400">
          <p class="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">Status</p>
          <span
            :class="[
              'inline-flex items-center px-4 py-2 rounded-full text-sm font-bold',
              statusClass(manutencao.status)
            ]"
          >
            {{ manutencao.status }}
          </span>
        </div>

        <div class="bg-zinc-800 rounded-2xl p-5 border-l-4 border-gray-400">
          <p class="text-xs text-gray-500 mb-3 font-bold uppercase tracking-wider">Descrição</p>
          <p class="text-gray-300 leading-relaxed">{{ manutencao.descricao }}</p>
        </div>

        <!-- Botões de Ação -->
        <div class="flex gap-4 pt-4" v-if="manutencao.status === 'Agendada' || manutencao.status === 'Em andamento'">
          <button
            @click="concluir"
            v-if="manutencao.status === 'Agendada' || manutencao.status === 'Em andamento'"
            class="flex-1 py-4 bg-white text-black rounded-xl font-bold 
                   transition-all duration-300 hover:bg-gray-200
                   flex items-center justify-center gap-2 shadow-xl"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Concluir
          </button>

          <button
            @click="cancelar"
            v-if="manutencao.status === 'Agendada'"
            class="flex-1 py-4 bg-red-500 hover:bg-red-600 text-white 
                   rounded-xl font-bold transition-all duration-300
                   flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            Cancelar
          </button>
        </div>

        <!-- Informação adicional -->
        <div class="pt-5 border-t border-zinc-800" v-if="manutencao.createdAt">
          <p class="text-xs text-gray-500">
            Criado: {{ formatarData(manutencao.createdAt) }}
          </p>
          <p class="text-xs text-gray-500 mt-1" v-if="manutencao.updatedAt">
            Atualizado: {{ formatarData(manutencao.updatedAt) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useManutencaoStore } from '../stores/manutencao';

const props = defineProps({
  manutencao: { type: Object, required: true }
});

const emit = defineEmits(['close', 'atualizado']);
const manutencaoStore = useManutencaoStore();

function formatarData(data) {
  if (!data) return 'N/A';
  return new Date(data).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function statusClass(status) {
  const classes = {
    'Agendada': 'bg-blue-500/20 text-blue-300 border border-blue-500',
    'Em andamento': 'bg-yellow-500/20 text-yellow-300 border border-yellow-500',
    'Concluída': 'bg-green-500/20 text-green-300 border border-green-500',
    'Cancelada': 'bg-red-500/20 text-red-300 border border-red-500'
  };
  return classes[status] || 'bg-gray-500/20 text-gray-300 border border-gray-500';
}

async function concluir() {
  if (confirm('Marcar esta manutenção como concluída?')) {
    try {
      await manutencaoStore.updateManutencao(props.manutencao._id, {
        status: 'Concluída'
      });
      emit('atualizado');
      emit('close');
    } catch (e) {
      alert('Erro ao atualizar manutenção');
    }
  }
}

async function cancelar() {
  if (confirm('Tem certeza que deseja cancelar esta manutenção?')) {
    try {
      await manutencaoStore.updateManutencao(props.manutencao._id, {
        status: 'Cancelada'
      });
      emit('atualizado');
      emit('close');
    } catch (e) {
      alert('Erro ao cancelar manutenção');
    }
  }
}
</script>