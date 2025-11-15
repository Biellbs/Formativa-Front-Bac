<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-6">
    <div>
      <label for="name" class="block text-gray-300 mb-2 text-sm font-medium">Nome do Equipamento</label>
      <input
        id="name"
        v-model="state.name"
        placeholder="Digite o nome do equipamento"
        required
        class="w-full p-4 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
      />
    </div>

    <div>
      <label for="type" class="block text-gray-300 mb-2 text-sm font-medium">Tipo</label>
      <input
        id="type"
        v-model="state.type"
        placeholder="Digite o tipo do equipamento"
        required
        class="w-full p-4 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
      />
    </div>

    <div>
      <label for="status" class="block text-gray-300 mb-2 text-sm font-medium">Status</label>
      <select
        id="status"
        v-model="state.status"
        required
        class="w-full p-4 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all cursor-pointer"
      >
        <option value="" disabled>Selecione o status</option>
        <option value="Funcionando">Funcionando</option>
        <option value="Parada">Parada</option>
        <option value="Em manutenção">Em manutenção</option>
      </select>
    </div>

    <div class="flex gap-4 mt-2">
      <button
        :disabled="submitting"
        type="submit"
        class="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 text-white p-4 rounded-lg font-bold hover:scale-105 hover:shadow-xl transition-all duration-300 border border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {{ edit ? "Salvar Alterações" : "Adicionar Equipamento" }}
      </button>

      <button
        v-if="edit"
        type="button"
        @click="$emit('cancel')"
        class="flex-1 bg-slate-700 text-white p-4 rounded-lg font-bold hover:bg-slate-600 transition-all duration-300 border border-slate-600"
      >
        Cancelar
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  initial: { type: Object, default: null },
  submitting: { type: Boolean, default: false },
  edit: { type: Boolean, default: false },
});
const emit = defineEmits(["submit", "cancel"]);

const state = reactive({
  name: "",
  type: "",
  status: "",
});

watch(
  () => props.initial,
  (val) => {
    if (val) {
      state.name = val.name || "";
      state.type = val.type || "";
      state.status = val.status || "";
    } else {
      state.name = "";
      state.type = "";
      state.status = "";
    }
  },
  { immediate: true }
);

function onSubmit() {
  emit("submit", {
    name: state.name,
    type: state.type,
    status: state.status,
  });
}
</script>