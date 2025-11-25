<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8 bg-slate-800 shadow-2xl rounded-2xl p-8 border border-slate-700">
        <div class="flex items-center gap-4">
          <div class="bg-gradient-to-r from-slate-700 to-slate-600 rounded-full p-3">
            <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-white">Dashboard de Manutenção</h1>
            <p class="text-gray-400 mt-1">Monitoramento em tempo real das máquinas</p>
          </div>
        </div>
      </div>

      <!-- KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Total de Máquinas -->
        <div class="bg-slate-800 rounded-xl shadow-2xl p-6 border-l-4 border-blue-500 border border-slate-700 hover:scale-105 transition-transform duration-300">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-400 text-sm font-medium">Total de Máquinas</p>
              <p class="text-3xl font-bold mt-2 text-white">{{ totalMaquinas }}</p>
              <p class="text-gray-500 text-xs mt-1">Equipamentos cadastrados</p>
            </div>
            <div class="bg-slate-700 rounded-full p-3">
              <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Funcionando -->
        <div class="bg-slate-800 rounded-xl shadow-2xl p-6 border-l-4 border-green-500 border border-slate-700 hover:scale-105 transition-transform duration-300">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-400 text-sm font-medium">Funcionando</p>
              <p class="text-3xl font-bold mt-2 text-white">{{ maquinasFuncionando }}</p>
              <p class="text-gray-500 text-xs mt-1">{{ taxaDisponibilidade }}% de disponibilidade</p>
            </div>
            <div class="bg-slate-700 rounded-full p-3">
              <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Em Manutenção -->
        <div class="bg-slate-800 rounded-xl shadow-2xl p-6 border-l-4 border-yellow-500 border border-slate-700 hover:scale-105 transition-transform duration-300">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-400 text-sm font-medium">Em Manutenção</p>
              <p class="text-3xl font-bold mt-2 text-white">{{ maquinasManutencao }}</p>
              <p class="text-gray-500 text-xs mt-1">{{ taxaManutencao }}% em manutenção</p>
            </div>
            <div class="bg-slate-700 rounded-full p-3">
              <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Paradas -->
        <div class="bg-slate-800 rounded-xl shadow-2xl p-6 border-l-4 border-red-500 border border-slate-700 hover:scale-105 transition-transform duration-300">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-400 text-sm font-medium">Paradas</p>
              <p class="text-3xl font-bold mt-2 text-white">{{ maquinasParadas }}</p>
              <p class="text-gray-500 text-xs mt-1">Requer atenção</p>
            </div>
            <div class="bg-slate-700 rounded-full p-3">
              <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Gráficos -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Gráfico de Pizza - Status -->
        <div class="bg-slate-800 rounded-xl shadow-2xl p-6 border border-slate-700">
          <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
            </svg>
            Distribuição por Status
          </h2>
          <canvas ref="statusChart"></canvas>
        </div>

        <!-- Gráfico de Barras - Tipos -->
        <div class="bg-slate-800 rounded-xl shadow-2xl p-6 border border-slate-700">
          <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            Máquinas por Tipo
          </h2>
          <canvas ref="tiposChart"></canvas>
        </div>
      </div>

      <!-- Gráfico de Linha - Timeline -->
      <div class="bg-slate-800 rounded-xl shadow-2xl p-6 mb-8 border border-slate-700">
        <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
          </svg>
          Máquinas Cadastradas ao Longo do Tempo
        </h2>
        <canvas ref="timelineChart"></canvas>
      </div>

      <!-- Tabela de Máquinas -->
      <div class="bg-slate-800 rounded-xl shadow-2xl p-6 border border-slate-700">
        <h2 class="text-xl font-bold text-white mb-4">Lista de Máquinas</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-slate-700">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Nome</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Tipo</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Cadastro</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-700">
              <tr v-for="maquina in maquinas" :key="maquina._id" class="hover:bg-slate-700 transition-colors duration-200">
                <td class="px-4 py-3 text-sm font-medium text-white">{{ maquina.name }}</td>
                <td class="px-4 py-3 text-sm text-gray-300 capitalize">{{ maquina.type }}</td>
                <td class="px-4 py-3 text-sm">
                  <span :class="getStatusClass(maquina.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                    {{ maquina.status }}
                  </span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-300">{{ formatDate(maquina.createdAt) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  name: 'DashboardManutencao',
  data() {
    return {
      maquinas: [],
      statusChartInstance: null,
      tiposChartInstance: null,
      timelineChartInstance: null,
      API_URL: 'http://localhost:3000/api/maquinas'
    };
  },
  computed: {
    totalMaquinas() {
      return this.maquinas.length;
    },
    maquinasFuncionando() {
      return this.maquinas.filter(m => m.status === 'Funcionando').length;
    },
    maquinasManutencao() {
      return this.maquinas.filter(m => m.status === 'Em manutenção').length;
    },
    maquinasParadas() {
      return this.maquinas.filter(m => m.status === 'Parada').length;
    },
    taxaDisponibilidade() {
      return this.totalMaquinas > 0 
        ? ((this.maquinasFuncionando / this.totalMaquinas) * 100).toFixed(1)
        : 0;
    },
    taxaManutencao() {
      return this.totalMaquinas > 0
        ? ((this.maquinasManutencao / this.totalMaquinas) * 100).toFixed(1)
        : 0;
    },
    dadosTipos() {
      const tipos = {};
      this.maquinas.forEach(maquina => {
        if (!tipos[maquina.type]) {
          tipos[maquina.type] = { funcionando: 0, manutencao: 0, parada: 0 };
        }
        if (maquina.status === 'Funcionando') tipos[maquina.type].funcionando++;
        if (maquina.status === 'Em manutenção') tipos[maquina.type].manutencao++;
        if (maquina.status === 'Parada') tipos[maquina.type].parada++;
      });
      return tipos;
    }
  },
  methods: {
    async carregarMaquinas() {
      try {
        const response = await fetch(this.API_URL);
        
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        this.maquinas = await response.json();
        
        console.log('Máquinas carregadas:', this.maquinas);
        
        this.$nextTick(() => {
          this.criarGraficos();
        });
      } catch (error) {
        console.error('Erro ao carregar máquinas:', error);
        alert('Erro ao conectar com o banco de dados. Verifique se a API está rodando.');
      }
    },
    criarGraficos() {
      this.criarGraficoStatus();
      this.criarGraficoTipos();
      this.criarGraficoTimeline();
    },
    criarGraficoStatus() {
      if (this.statusChartInstance) this.statusChartInstance.destroy();
      
      const ctx = this.$refs.statusChart;
      this.statusChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Funcionando', 'Em Manutenção', 'Parada'],
          datasets: [{
            data: [this.maquinasFuncionando, this.maquinasManutencao, this.maquinasParadas],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
            borderWidth: 2,
            borderColor: '#1e293b'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#e2e8f0'
              }
            }
          }
        }
      });
    },
    criarGraficoTipos() {
      if (this.tiposChartInstance) this.tiposChartInstance.destroy();
      
      const tipos = Object.keys(this.dadosTipos);
      const funcionando = tipos.map(t => this.dadosTipos[t].funcionando);
      const manutencao = tipos.map(t => this.dadosTipos[t].manutencao);
      const parada = tipos.map(t => this.dadosTipos[t].parada);
      
      const ctx = this.$refs.tiposChart;
      this.tiposChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: tipos.map(t => t.charAt(0).toUpperCase() + t.slice(1)),
          datasets: [
            {
              label: 'Funcionando',
              data: funcionando,
              backgroundColor: '#10b981'
            },
            {
              label: 'Em Manutenção',
              data: manutencao,
              backgroundColor: '#f59e0b'
            },
            {
              label: 'Parada',
              data: parada,
              backgroundColor: '#ef4444'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: { 
              stacked: false,
              ticks: { color: '#e2e8f0' },
              grid: { color: '#334155' }
            },
            y: { 
              stacked: false,
              beginAtZero: true,
              ticks: { 
                stepSize: 1,
                color: '#e2e8f0'
              },
              grid: { color: '#334155' }
            }
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#e2e8f0'
              }
            }
          }
        }
      });
    },
    criarGraficoTimeline() {
      if (this.timelineChartInstance) this.timelineChartInstance.destroy();
      
      const maquinasPorMes = {};
      this.maquinas.forEach(maquina => {
        const date = new Date(maquina.createdAt);
        const mes = date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
        maquinasPorMes[mes] = (maquinasPorMes[mes] || 0) + 1;
      });
      
      const labels = Object.keys(maquinasPorMes);
      const data = Object.values(maquinasPorMes);
      
      const ctx = this.$refs.timelineChart;
      this.timelineChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Novas Máquinas',
            data: data,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              ticks: { color: '#e2e8f0' },
              grid: { color: '#334155' }
            },
            y: {
              beginAtZero: true,
              ticks: { 
                stepSize: 1,
                color: '#e2e8f0'
              },
              grid: { color: '#334155' }
            }
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#e2e8f0'
              }
            }
          }
        }
      });
    },
    getStatusClass(status) {
      if (status === 'Funcionando') return 'bg-green-500/20 text-green-300 border border-green-500/30';
      if (status === 'Em manutenção') return 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30';
      return 'bg-red-500/20 text-red-300 border border-red-500/30';
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR');
    }
  },
  mounted() {
    this.carregarMaquinas();
  },
  beforeUnmount() {
    if (this.statusChartInstance) this.statusChartInstance.destroy();
    if (this.tiposChartInstance) this.tiposChartInstance.destroy();
    if (this.timelineChartInstance) this.timelineChartInstance.destroy();
  }
};
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>