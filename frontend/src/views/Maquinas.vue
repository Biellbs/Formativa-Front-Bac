<template>
  <section class="min-h-[calc(100vh-132px)] p-8 lg:p-10 flex flex-col max-w-6xl mx-auto bg-black relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900"></div>
    <div class="absolute top-1/4 right-1/3 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/2 rounded-full blur-3xl"></div>
    
    <div class="relative z-10">
      <!-- Header -->
      <div class="mb-10">
        <div class="flex items-center gap-3 mb-1">
          <h2 class="text-3xl font-bold text-white">
            Suas Máquinas
          </h2>
          <span class="px-3 py-1 bg-white text-black rounded-full text-sm font-semibold">
            {{ storeM.totalMaquinas }}
          </span>
        </div>
        <p class="text-gray-500 text-sm">Tudo que você precisa num lugar só</p>
      </div>

      <!-- Loading -->
      <div v-if="storeM.loading && storeM.maquinas.length === 0" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-10 w-10 border-3 border-white border-t-transparent"></div>
        <p class="mt-4 text-gray-400 text-sm">Buscando suas máquinas...</p>
      </div>

      <!-- Erro -->
      <div v-else-if="storeM.error" 
           class="bg-red-500/10 border border-red-500/50 text-red-400 p-4 mb-8 rounded-lg">
        <p class="font-medium text-sm flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
          </svg>
          {{ storeM.error }}
        </p>
      </div>

      <!-- Conteúdo -->
      <template v-else>
        <!-- Formulário -->
        <div class="bg-zinc-900/40 backdrop-blur-xl rounded-xl border border-zinc-800/50 
                    hover:border-zinc-600 transition-all duration-200 p-6 mb-8">
          
          <MaquinaForm
            v-if="!editingM"
            :submitting="storeM.loading"
            @submit="storeM.addMaquina"
          />
          
          <MaquinaForm
            v-else
            :initial="editingM"
            :submitting="storeM.loading"
            @submit="(payload) => { storeM.updateMaquina(editingM._id, payload); editingM=null; }"
            @cancel="cancelEditM"
            edit
          />
        </div>

        <!-- Lista -->
        <div class="bg-zinc-900/40 backdrop-blur-xl rounded-xl border border-zinc-800/50 overflow-hidden 
                    hover:border-zinc-600 transition-all duration-200">
          <MaquinaList
            :maquina="storeM.maquinas"
            @edit="editM"
            @remove="storeM.removeMaquina"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMaquinaStore } from "../stores/maquina";
import MaquinaForm from "../components/MaquinaForm.vue";
import MaquinaList from "../components/MaquinaList.vue";

const storeM = useMaquinaStore();
const editingM = ref(null);

onMounted(() => {
  storeM.fetchMaquina();
});

function editM(maquina) {
  editingM.value = { ...maquina };
}

function cancelEditM() {
  editingM.value = null;
}
</script>