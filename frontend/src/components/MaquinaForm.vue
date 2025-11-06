<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
    <input
      v-model="state.name"
      placeholder="Digite o nome da máquina"
      required
      class="w-full p-4 border-b-1 mb-4 focus:outline-none focus:border-cyan-400"
    />

    <input
      v-model="state.type"
      placeholder="Digite o tipo da máquina"
      required
      class="w-full p-4 border-b-1 mb-4 focus:outline-none focus:border-cyan-400"
    />

    <select
      v-model="state.status"
      required
      class="w-full p-4 border-b-1 mb-4 focus:outline-none focus:border-cyan-400"
    >
      <option value="" disabled>Selecione o Status</option>
      <option value="Funcionando">Funcionando</option>
      <option value="Parada">Parada</option>
      <option value="Em manutenção">Em manutenção</option>
    </select>

    <div class="flex gap-4">
      <button
        :disabled="submitting"
        type="submit"
        class="w-[50%] mx-auto my-0 bg-cyan-400 text-white p-4 rounded-lg mb-4 hover:bg-cyan-500 transition cursor-pointer"
      >
        {{ edit ? "Salvar" : "Adicionar" }}
      </button>

      <button
        v-if="edit"
        type="button"
        @click="$emit('cancel')"
        class="w-[50%] mx-auto my-0 bg-cyan-400 text-white p-4 rounded-lg mb-4 hover:bg-cyan-500 transition"
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
