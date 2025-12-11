<template>
  <div class="min-h-screen bg-black p-6 lg:p-10">
    <div class="max-w-6xl mx-auto">
      <!-- Cabeçalho -->
      <div class="mb-10">
        <h1 class="text-4xl font-black text-white mb-2 tracking-tight">
          Calendário
        </h1>
        <p class="text-gray-600 text-sm">Gerencie manutenções</p>
      </div>

      <!-- Calendário -->
      <div class="bg-zinc-950 rounded-xl border border-zinc-900 overflow-hidden">
        <!-- Cabeçalho do Calendário -->
        <div class="border-b border-zinc-900 px-6 py-4 flex items-center justify-between">
          <button
            @click="mesAnterior"
            class="p-1.5 hover:bg-zinc-900 rounded transition-colors"
          >
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <div class="flex items-center gap-3">
            <h2 class="text-lg font-bold text-white">
              {{ nomesMeses[mesAtual] }} {{ anoAtual }}
            </h2>
            <button
              @click="voltarHoje"
              class="text-xs text-gray-600 hover:text-gray-400 transition-colors px-2 py-1 rounded hover:bg-zinc-900"
            >
              Hoje
            </button>
          </div>

          <button
            @click="proximoMes"
            class="p-1.5 hover:bg-zinc-900 rounded transition-colors"
          >
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div class="p-6">
          <!-- Dias da Semana -->
          <div class="grid grid-cols-7 gap-1 mb-1">
            <div
              v-for="dia in diasSemana"
              :key="dia"
              class="text-center text-xs font-semibold text-gray-600 py-2"
            >
              {{ dia }}
            </div>
          </div>

          <!-- Grade do Calendário -->
          <div class="grid grid-cols-7 gap-1">
            <div
              v-for="dia in diasDoMes"
              :key="dia.key"
              @click="dia.numero ? selecionarDia(dia) : null"
              :class="[
                'min-h-20 p-2 rounded transition-colors',
                dia.numero ? 'cursor-pointer hover:bg-zinc-900' : 'bg-transparent cursor-default',
                dia.ehHoje ? 'bg-zinc-900 ring-1 ring-zinc-800' : 'bg-zinc-950',
              ]"
            >
              <div v-if="dia.numero" class="h-full flex flex-col">
                <!-- Número do Dia -->
                <div
                  :class="[
                    'text-xs font-semibold mb-1',
                    dia.ehHoje ? 'text-white' : 'text-gray-600'
                  ]"
                >
                  {{ dia.numero }}
                </div>

                <!-- Manutenções do Dia -->
                <div class="flex-1 space-y-1 overflow-y-auto">
                  <div
                    v-for="manutencao in dia.manutencoes.slice(0, 2)"
                    :key="manutencao._id"
                    @click.stop="verDetalhes(manutencao)"
                    class="bg-zinc-900 text-white text-xs p-1 rounded 
                           hover:bg-zinc-800 transition-colors cursor-pointer"
                    :title="`${manutencao.maquina?.name || 'Máquina'} - ${manutencao.tecnico}`"
                  >
                    <div class="font-medium truncate text-xs">
                      {{ manutencao.maquina?.name || 'Máquina' }}
                    </div>
                  </div>
                </div>

                <!-- Indicador de mais -->
                <div
                  v-if="dia.manutencoes.length > 2"
                  class="text-xs text-gray-700 font-medium mt-1"
                >
                  +{{ dia.manutencoes.length - 2 }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Botão de Agendar -->
        <div class="border-t border-zinc-900 p-4">
          <button
            @click="abrirModalAgendamento"
            class="w-full py-2.5 bg-zinc-900 text-white rounded-lg 
                   hover:bg-zinc-800 transition-colors flex items-center 
                   justify-center gap-2 text-sm font-medium"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            Nova Manutenção
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Agendamento -->
    <div
      v-if="mostrarModal"
      class="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
      @click.self="fecharModal"
    >
      <div class="bg-zinc-950 rounded-xl border border-zinc-900 max-w-lg w-full">
        <!-- Cabeçalho -->
        <div class="border-b border-zinc-900 px-5 py-4 flex items-center justify-between">
          <h2 class="text-lg font-bold text-white">
            Nova Manutenção
          </h2>
          <button
            @click="fecharModal"
            class="text-gray-600 hover:text-gray-400 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Formulário -->
        <form @submit.prevent="agendar" class="p-5 space-y-4">
          <div>
            <label class="block text-gray-500 text-xs font-medium mb-1.5">
              Máquina *
            </label>
            <select
              v-model="form.maquinaId"
              required
              class="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm
                     focus:outline-none focus:border-zinc-700 transition-colors"
            >
              <option value="">Selecione</option>
              <option
                v-for="maquina in maquinasParadas"
                :key="maquina._id"
                :value="maquina._id"
              >
                {{ maquina.name }} - {{ maquina.type }}
              </option>
            </select>
            <p v-if="maquinasParadas.length === 0" class="text-xs text-red-500 mt-1">
              Nenhuma máquina disponível
            </p>
          </div>

          <div>
            <label class="block text-gray-500 text-xs font-medium mb-1.5">
              Data e Hora *
            </label>
            <input
              v-model="form.dataAgendada"
              type="datetime-local"
              required
              :min="dataMinima"
              class="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm
                     focus:outline-none focus:border-zinc-700 transition-colors"
            />
          </div>

          <div>
            <label class="block text-gray-500 text-xs font-medium mb-1.5">
              Técnico *
            </label>
            <input
              v-model="form.tecnico"
              placeholder="Nome do técnico"
              required
              class="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm
                     placeholder-gray-700 focus:outline-none focus:border-zinc-700 transition-colors"
            />
          </div>

          <div>
            <label class="block text-gray-500 text-xs font-medium mb-1.5">
              Descrição *
            </label>
            <textarea
              v-model="form.descricao"
              placeholder="Descrição"
              required
              rows="3"
              class="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm
                     placeholder-gray-700 focus:outline-none focus:border-zinc-700 transition-colors resize-none"
            ></textarea>
          </div>

          <div
            v-if="erro"
            class="bg-red-500/10 border border-red-500/30 rounded-lg p-2.5 text-red-400 text-xs"
          >
            {{ erro }}
          </div>

          <div class="flex gap-2 pt-2">
            <button
              type="submit"
              :disabled="enviando || maquinasParadas.length === 0"
              class="flex-1 py-2.5 bg-zinc-900 border border-zinc-800 text-white rounded-lg
                     hover:bg-zinc-800 disabled:opacity-50 transition-colors text-sm font-medium"
            >
              {{ enviando ? 'Agendando...' : 'Agendar' }}
            </button>

            <button
              type="button"
              @click="fecharModal"
              class="px-4 py-2.5 text-gray-500 hover:text-gray-400 rounded-lg
                     hover:bg-zinc-900 transition-colors text-sm font-medium"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal de Detalhes -->
    <div
      v-if="mostrarDetalhes && manutencaoSelecionada"
      class="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
      @click.self="fecharDetalhes"
    >
      <div class="bg-zinc-950 rounded-xl border border-zinc-900 max-w-lg w-full">
        <div class="border-b border-zinc-900 px-5 py-4 flex items-center justify-between">
          <h2 class="text-lg font-bold text-white">
            Detalhes
          </h2>
          <button
            @click="fecharDetalhes"
            class="text-gray-600 hover:text-gray-400 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="p-5 space-y-3">
          <div class="bg-zinc-900 rounded-lg p-3 border-l-2 border-zinc-800">
            <p class="text-xs text-gray-600 mb-1">Máquina</p>
            <p class="text-sm font-medium text-white">
              {{ manutencaoSelecionada.maquina?.name || 'N/A' }}
            </p>
            <p class="text-xs text-gray-500 mt-0.5">{{ manutencaoSelecionada.maquina?.type || '' }}</p>
          </div>

          <div class="bg-zinc-900 rounded-lg p-3 border-l-2 border-zinc-800">
            <p class="text-xs text-gray-600 mb-1">Técnico</p>
            <p class="text-sm font-medium text-white">{{ manutencaoSelecionada.tecnico }}</p>
          </div>

          <div class="bg-zinc-900 rounded-lg p-3 border-l-2 border-zinc-800">
            <p class="text-xs text-gray-600 mb-1">Data</p>
            <p class="text-sm font-medium text-white">
              {{ formatarData(manutencaoSelecionada.dataAgendada) }}
            </p>
          </div>

          <div class="bg-zinc-900 rounded-lg p-3 border-l-2 border-zinc-800">
            <p class="text-xs text-gray-600 mb-1.5">Status</p>
            <span class="inline-flex items-center px-2.5 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs font-medium text-gray-400">
              {{ manutencaoSelecionada.status }}
            </span>
          </div>

          <div class="bg-zinc-900 rounded-lg p-3 border-l-2 border-zinc-800">
            <p class="text-xs text-gray-600 mb-1.5">Descrição</p>
            <p class="text-sm text-gray-400 leading-relaxed">{{ manutencaoSelecionada.descricao }}</p>
          </div>

          <div class="flex gap-2 pt-2" v-if="manutencaoSelecionada.status === 'Agendada' || manutencaoSelecionada.status === 'Em andamento'">
            <button
              @click="concluir"
              v-if="manutencaoSelecionada.status === 'Agendada' || manutencaoSelecionada.status === 'Em andamento'"
              class="flex-1 py-2.5 bg-zinc-900 border border-zinc-800 text-white rounded-lg
                     hover:bg-zinc-800 transition-colors text-sm font-medium"
            >
              Concluir
            </button>

            <button
              @click="cancelar"
              v-if="manutencaoSelecionada.status === 'Agendada'"
              class="px-4 py-2.5 text-gray-500 hover:text-gray-400 rounded-lg
                     hover:bg-zinc-900 transition-colors text-sm font-medium"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useMaquinaStore } from '../stores/maquina';
import { useManutencaoStore } from '../stores/manutencao';

const maquinaStore = useMaquinaStore();
const manutencaoStore = useManutencaoStore();

const anoAtual = ref(new Date().getFullYear());
const mesAtual = ref(new Date().getMonth());
const mostrarModal = ref(false);
const mostrarDetalhes = ref(false);
const dataSelecionada = ref(null);
const manutencaoSelecionada = ref(null);

const form = ref({
  maquinaId: '',
  dataAgendada: '',
  tecnico: '',
  descricao: ''
});

const enviando = ref(false);
const erro = ref('');

const nomesMeses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const diasDoMes = computed(() => {
  const primeiroDia = new Date(anoAtual.value, mesAtual.value, 1);
  const ultimoDia = new Date(anoAtual.value, mesAtual.value + 1, 0);
  const diasNoMes = ultimoDia.getDate();
  const diaSemanaInicio = primeiroDia.getDay();

  const dias = [];
  let key = 0;

  for (let i = 0; i < diaSemanaInicio; i++) {
    dias.push({ numero: null, key: `empty-${key++}`, manutencoes: [] });
  }

  for (let dia = 1; dia <= diasNoMes; dia++) {
    const dataCompleta = new Date(anoAtual.value, mesAtual.value, dia);
    const hoje = new Date();
    const ehHoje = 
      dataCompleta.getDate() === hoje.getDate() &&
      dataCompleta.getMonth() === hoje.getMonth() &&
      dataCompleta.getFullYear() === hoje.getFullYear();

    const manutencoesVDia = manutencaoStore.manutencoes.filter(m => {
      const dataManutencao = new Date(m.dataAgendada);
      return (
        dataManutencao.getDate() === dia &&
        dataManutencao.getMonth() === mesAtual.value &&
        dataManutencao.getFullYear() === anoAtual.value
      );
    });

    dias.push({
      numero: dia,
      key: `day-${dia}`,
      ehHoje,
      data: dataCompleta,
      manutencoes: manutencoesVDia
    });
  }

  return dias;
});

const maquinasParadas = computed(() => {
  return maquinaStore.maquinas.filter(m => m.status === 'Parada');
});

const dataMinima = computed(() => {
  const agora = new Date();
  agora.setMinutes(agora.getMinutes() - agora.getTimezoneOffset());
  return agora.toISOString().slice(0, 16);
});

function mesAnterior() {
  if (mesAtual.value === 0) {
    mesAtual.value = 11;
    anoAtual.value--;
  } else {
    mesAtual.value--;
  }
}

function proximoMes() {
  if (mesAtual.value === 11) {
    mesAtual.value = 0;
    anoAtual.value++;
  } else {
    mesAtual.value++;
  }
}

function voltarHoje() {
  const hoje = new Date();
  anoAtual.value = hoje.getFullYear();
  mesAtual.value = hoje.getMonth();
}

function selecionarDia(dia) {
  dataSelecionada.value = dia.data;
  abrirModalAgendamento();
}

function abrirModalAgendamento() {
  if (dataSelecionada.value) {
    const data = new Date(dataSelecionada.value);
    data.setMinutes(data.getMinutes() - data.getTimezoneOffset());
    form.value.dataAgendada = data.toISOString().slice(0, 16);
  } else {
    form.value.dataAgendada = '';
  }
  
  form.value.maquinaId = '';
  form.value.tecnico = '';
  form.value.descricao = '';
  erro.value = '';
  
  mostrarModal.value = true;
}

function fecharModal() {
  mostrarModal.value = false;
  dataSelecionada.value = null;
}

function verDetalhes(manutencao) {
  manutencaoSelecionada.value = manutencao;
  mostrarDetalhes.value = true;
}

function fecharDetalhes() {
  mostrarDetalhes.value = false;
  manutencaoSelecionada.value = null;
}

async function recarregarManutencoes() {
  await manutencaoStore.fetchManutencoes();
}

async function agendar() {
  if (!form.value.maquinaId) {
    erro.value = 'Selecione uma máquina';
    return;
  }

  enviando.value = true;
  erro.value = '';

  try {
    await manutencaoStore.addManutencao({
      maquina: form.value.maquinaId,
      dataAgendada: form.value.dataAgendada,
      tecnico: form.value.tecnico,
      descricao: form.value.descricao
    });

    await recarregarManutencoes();
    fecharModal();
  } catch (e) {
    erro.value = e?.response?.data?.error || 'Erro ao agendar manutenção';
  } finally {
    enviando.value = false;
  }
}

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

async function concluir() {
  if (confirm('Marcar esta manutenção como concluída?')) {
    try {
      await manutencaoStore.updateManutencao(manutencaoSelecionada.value._id, {
        status: 'Concluída'
      });
      await recarregarManutencoes();
      fecharDetalhes();
    } catch (e) {
      alert('Erro ao atualizar manutenção');
    }
  }
}

async function cancelar() {
  if (confirm('Tem certeza que deseja cancelar esta manutenção?')) {
    try {
      await manutencaoStore.updateManutencao(manutencaoSelecionada.value._id, {
        status: 'Cancelada'
      });
      await recarregarManutencoes();
      fecharDetalhes();
    } catch (e) {
      alert('Erro ao cancelar manutenção');
    }
  }
}

onMounted(async () => {
  await maquinaStore.fetchMaquinas();
  await manutencaoStore.fetchManutencoes();
});
</script>