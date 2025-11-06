<template>
  <section class="min-h-[calc(100vh-132px)] p-10 flex flex-col max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-400 mb-8">
      Máquinas ({{ store.totalMaquinas }})
    </h2>

    <div class="flex flex-col bg-white rounded-2xl shadow-lg p-6 mb-10">

      <MaquinaForm
        v-if="!editing"
        :submitting="store.loading"
        @submit="store.addMaquina"
      />
      
      <MaquinaForm
        v-else
        :initial="editing"
        :submitting="store.loading"
        @submit="(payload) => { store.updateMaquina(editing._id, payload); editing=null; }"
        @cancel="cancelEditM"
        edit
      />
    </div>

    <p v-if="store.error" class="text-red-600 mb-6 text-center font-semibold">
      {{ store.error }}
    </p>

    <div class="bg-white rounded-2xl shadow-lg overflow-x-auto">
      <MaquinaList
        :maquina="store.maquinas"
        @edit="editM"
        @remove="store.removeMaquina"
      />
    </div>
  </section>

  <section class="min-h-[calc(100vh-132px)] p-10 flex flex-col max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-400 mb-8">
      Usuários ({{ store.totalUsuarios }})
    </h2>

    <div class="flex flex-col bg-white rounded-2xl shadow-lg p-6 mb-10">

      <UsuarioForm
        v-if="!editing"
        :submitting="store.loading"
        @submit="store.addUsuario"
      />
      
      <UsuarioForm
        v-else
        :initial="editing"
        :submitting="store.loading"
        @submit="(payload) => { store.updateUsuario(editing._id, payload); editing=null; }"
        @cancel="cancelEditU"
        edit
      />
    </div>

    <p v-if="store.error" class="text-red-600 mb-6 text-center font-semibold">
      {{ store.error }}
    </p>

    <div class="bg-white rounded-2xl shadow-lg overflow-x-auto">
      <UsuarioList
        :maquina="store.maquinas"
        @edit="edit"
        @remove="store.removeMaquina"
      />
    </div>
  </section>

</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMaquinaStore } from "../stores/maquina";
import MaquinaForm from "../components/MaquinaForm.vue";
import MaquinaList from "../components/MaquinaList.vue";
import UsuarioForm from "../components/UsuarioForm.vue";

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


const storeU = useUsuarioStore();
const editingU = ref(null);

onMounted(() => {
  storeU.fetchUsuario();
});

function edit(usuario) {
  editingU.value = { ...usuario };
}

function cancelEditU() {
  editingU.value = null;
}

</script>

