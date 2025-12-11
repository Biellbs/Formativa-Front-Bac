<template>
  <div class="min-h-screen bg-black p-8 lg:p-10">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-12">
        <div class="flex items-center gap-4 mb-3">
          <h1 class="text-5xl font-black text-white tracking-tight">
            Dashboard
          </h1>
          <span class="px-5 py-2 bg-white text-black rounded-full text-xl font-black shadow-xl">
            {{ totalMaquinas }}
          </span>
        </div>
        <p class="text-gray-500 text-lg font-medium">Visão geral das máquinas</p>
      </div>

      <!-- Cards de Resumo -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <!-- Total de Máquinas -->
        <div class="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-white transition-all duration-300 hover:scale-105">
          <div class="flex items-center justify-between mb-4">
            <p class="text-gray-400 font-semibold text-sm uppercase tracking-wider">Total</p>
            <div class="bg-zinc-800 rounded-xl p-3">
              <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
          </div>
          <p class="text-4xl font-black text-white">
            {{ totalMaquinas }}
          </p>
        </div>

        <!-- Funcionando -->
        <div class="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-green-500 transition-all duration-300 hover:scale-105">
          <div class="flex items-center justify-between mb-4">
            <p class="text-gray-400 font-semibold text-sm uppercase tracking-wider">Funcionando</p>
            <div class="bg-green-500/20 rounded-xl p-3 border border-green-500">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="text-4xl font-black text-green-400">
            {{ statusCount.funcionando }}
          </p>
          <p class="text-sm text-gray-500 font-semibold mt-2">{{ getPercentage('funcionando') }}%</p>
        </div>

        <!-- Paradas -->
        <div class="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-red-500 transition-all duration-300 hover:scale-105">
          <div class="flex items-center justify-between mb-4">
            <p class="text-gray-400 font-semibold text-sm uppercase tracking-wider">Paradas</p>
            <div class="bg-red-500/20 rounded-xl p-3 border border-red-500">
              <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="text-4xl font-black text-red-400">
            {{ statusCount.parada }}
          </p>
          <p class="text-sm text-gray-500 font-semibold mt-2">{{ getPercentage('parada') }}%</p>
        </div>

        <!-- Em Manutenção -->
        <div class="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-yellow-500 transition-all duration-300 hover:scale-105">
          <div class="flex items-center justify-between mb-4">
            <p class="text-gray-400 font-semibold text-sm uppercase tracking-wider">Manutenção</p>
            <div class="bg-yellow-500/20 rounded-xl p-3 border border-yellow-500">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
          <p class="text-4xl font-black text-yellow-400">
            {{ statusCount.manutencao }}
          </p>
          <p class="text-sm text-gray-500 font-semibold mt-2">{{ getPercentage('manutencao') }}%</p>
        </div>
      </div>

      <!-- Charts Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Gráfico de Pizza -->
        <div class="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-white transition-all duration-300">
          <h2 class="text-2xl font-black text-white mb-6 uppercase tracking-tight">
            Distribuição
          </h2>
          <div class="bg-zinc-800/50 rounded-xl p-6 h-80 flex items-center justify-center">
            <canvas ref="pieChart"></canvas>
          </div>
        </div>

        <!-- Gráfico de Barras -->
        <div class="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-white transition-all duration-300">
          <h2 class="text-2xl font-black text-white mb-6 uppercase tracking-tight">
            Comparativo
          </h2>
          <div class="bg-zinc-800/50 rounded-xl p-6 h-80 flex items-center justify-center">
            <canvas ref="barChart"></canvas>
          </div>
        </div>

        <!-- Gráfico Doughnut -->
        <div class="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-white transition-all duration-300">
          <h2 class="text-2xl font-black text-white mb-6 uppercase tracking-tight">
            Status
          </h2>
          <div class="bg-zinc-800/50 rounded-xl p-6 h-80 flex items-center justify-center">
            <canvas ref="doughnutChart"></canvas>
          </div>
        </div>

        <!-- Resumo Detalhado -->
        <div class="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-white transition-all duration-300">
          <h2 class="text-2xl font-black text-white mb-6 uppercase tracking-tight">
            Resumo
          </h2>
          
          <div class="space-y-4">
            <!-- Funcionando -->
            <div class="bg-green-500/10 border-2 border-green-500 rounded-xl p-6 hover:bg-green-500/20 transition-all">
              <div class="flex justify-between items-center">
                <span class="font-bold text-green-400 uppercase text-sm tracking-wider">Funcionando</span>
                <div class="text-right">
                  <span class="text-3xl font-black text-green-400">
                    {{ statusCount.funcionando }}
                  </span>
                  <span class="text-sm text-green-500 ml-2 font-bold">({{ getPercentage('funcionando') }}%)</span>
                </div>
              </div>
            </div>

            <!-- Paradas -->
            <div class="bg-red-500/10 border-2 border-red-500 rounded-xl p-6 hover:bg-red-500/20 transition-all">
              <div class="flex justify-between items-center">
                <span class="font-bold text-red-400 uppercase text-sm tracking-wider">Paradas</span>
                <div class="text-right">
                  <span class="text-3xl font-black text-red-400">
                    {{ statusCount.parada }}
                  </span>
                  <span class="text-sm text-red-500 ml-2 font-bold">({{ getPercentage('parada') }}%)</span>
                </div>
              </div>
            </div>

            <!-- Em Manutenção -->
            <div class="bg-yellow-500/10 border-2 border-yellow-500 rounded-xl p-6 hover:bg-yellow-500/20 transition-all">
              <div class="flex justify-between items-center">
                <span class="font-bold text-yellow-400 uppercase text-sm tracking-wider">Manutenção</span>
                <div class="text-right">
                  <span class="text-3xl font-black text-yellow-400">
                    {{ statusCount.manutencao }}
                  </span>
                  <span class="text-sm text-yellow-500 ml-2 font-bold">({{ getPercentage('manutencao') }}%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useMaquinaStore } from '../stores/maquina';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const maquinaStore = useMaquinaStore();
const pieChart = ref(null);
const barChart = ref(null);
const doughnutChart = ref(null);

let pieChartInstance = null;
let barChartInstance = null;
let doughnutChartInstance = null;

const totalMaquinas = computed(() => maquinaStore.totalMaquinas);

const statusCount = computed(() => {
  const count = {
    funcionando: 0,
    parada: 0,
    manutencao: 0
  };

  maquinaStore.maquinas.forEach(maq => {
    const status = maq.status.toLowerCase();
    if (status === 'funcionando') count.funcionando++;
    else if (status === 'parada') count.parada++;
    else if (status === 'em manutenção') count.manutencao++;
  });

  return count;
});

const getPercentage = (status) => {
  if (totalMaquinas.value === 0) return 0;
  return ((statusCount.value[status] / totalMaquinas.value) * 100).toFixed(1);
};

const chartColors = {
  funcionando: 'rgb(74, 222, 128)',
  parada: 'rgb(248, 113, 113)',
  manutencao: 'rgb(250, 204, 21)'
};

const createPieChart = () => {
  if (pieChartInstance) pieChartInstance.destroy();

  const ctx = pieChart.value.getContext('2d');
  pieChartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Funcionando', 'Paradas', 'Em Manutenção'],
      datasets: [{
        data: [
          statusCount.value.funcionando,
          statusCount.value.parada,
          statusCount.value.manutencao
        ],
        backgroundColor: [
          chartColors.funcionando,
          chartColors.parada,
          chartColors.manutencao
        ],
        borderWidth: 3,
        borderColor: '#18181b'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            font: { size: 12, weight: 'bold' },
            color: '#a1a1aa'
          }
        },
        tooltip: {
          backgroundColor: '#18181b',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: '#3f3f46',
          borderWidth: 1,
          callbacks: {
            label: (context) => {
              const label = context.label || '';
              const value = context.parsed || 0;
              const percentage = ((value / totalMaquinas.value) * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
};

const createBarChart = () => {
  if (barChartInstance) barChartInstance.destroy();

  const ctx = barChart.value.getContext('2d');
  barChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Funcionando', 'Paradas', 'Em Manutenção'],
      datasets: [{
        label: 'Quantidade',
        data: [
          statusCount.value.funcionando,
          statusCount.value.parada,
          statusCount.value.manutencao
        ],
        backgroundColor: [
          chartColors.funcionando,
          chartColors.parada,
          chartColors.manutencao
        ],
        borderRadius: 8,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#18181b',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: '#3f3f46',
          borderWidth: 1,
          callbacks: {
            label: (context) => {
              const value = context.parsed.y || 0;
              const percentage = ((value / totalMaquinas.value) * 100).toFixed(1);
              return `${value} máquinas (${percentage}%)`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1, color: '#a1a1aa', font: { weight: 'bold' } },
          grid: { color: '#27272a' }
        },
        x: {
          ticks: { color: '#a1a1aa', font: { weight: 'bold' } },
          grid: { display: false }
        }
      }
    }
  });
};

const createDoughnutChart = () => {
  if (doughnutChartInstance) doughnutChartInstance.destroy();

  const ctx = doughnutChart.value.getContext('2d');
  doughnutChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Funcionando', 'Paradas', 'Em Manutenção'],
      datasets: [{
        data: [
          statusCount.value.funcionando,
          statusCount.value.parada,
          statusCount.value.manutencao
        ],
        backgroundColor: [
          chartColors.funcionando,
          chartColors.parada,
          chartColors.manutencao
        ],
        borderWidth: 3,
        borderColor: '#18181b'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            font: { size: 12, weight: 'bold' },
            color: '#a1a1aa'
          }
        },
        tooltip: {
          backgroundColor: '#18181b',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: '#3f3f46',
          borderWidth: 1,
          callbacks: {
            label: (context) => {
              const label = context.label || '';
              const value = context.parsed || 0;
              const percentage = ((value / totalMaquinas.value) * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
};

const updateCharts = () => {
  if (pieChart.value) createPieChart();
  if (barChart.value) createBarChart();
  if (doughnutChart.value) createDoughnutChart();
};

onMounted(async () => {
  await maquinaStore.fetchMaquina();
  setTimeout(() => {
    updateCharts();
  }, 100);
});

watch(() => maquinaStore.maquinas, () => {
  setTimeout(() => {
    updateCharts();
  }, 100);
}, { deep: true });
</script>