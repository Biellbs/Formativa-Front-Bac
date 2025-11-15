<template>
  <section class="min-h-[calc(100vh-132px)] p-10 flex flex-col w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div class="max-w-6xl mx-auto w-full">
    <h2 class="text-3xl font-bold text-white mb-8">
      Equipamentos ({{ storeEquip.totalMaquinas }})
    </h2>

    <div class="flex flex-col bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-6 mb-10">

      <MaquinaForm
        v-if="!editandoEquip"
        :submitting="storeEquip.loading"
        @submit="storeEquip.addMaquina"
      />
      
      <MaquinaForm
        v-else
        :initial="editandoEquip"
        :submitting="storeEquip.loading"
        @submit="(payload) => { storeEquip.updateMaquina(editandoEquip._id, payload); editandoEquip=null; }"
        @cancel="cancelarEdicaoEquip"
        edit
      />
    </div>

    <p v-if="storeEquip.error" class="text-red-400 mb-6 text-center font-semibold bg-red-900/20 py-3 px-4 rounded-lg border border-red-800">
      {{ storeEquip.error }}
    </p>

    <div class="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-x-auto">
      <MaquinaList
        :maquina="storeEquip.maquinas"
        @edit="editarEquip"
        @remove="storeEquip.removeMaquina"
      />
    </div>
    </div>
  </section>



</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMaquinaStore } from "../stores/maquina";
import MaquinaForm from "../components/MaquinaForm.vue";
import MaquinaList from "../components/MaquinaList.vue";
import UsuarioForm from "../components/UsuarioForm.vue";
import UsuarioList from "../components/UsuarioList.vue";
import { useUsuarioStore } from "../stores/usuario";


const storeEquip = useMaquinaStore();
const editandoEquip = ref(null);

onMounted(() => {
  storeEquip.fetchMaquina();
});

function editarEquip(maquina) {
  editandoEquip.value = { ...maquina };
}

function cancelarEdicaoEquip() {
  editandoEquip.value = null;
}


</script>