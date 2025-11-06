<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
    <input
      v-model="state.name"
      placeholder="Digite o nome do Usuário"
      required
      class="w-full p-4 border-b-1 mb-4 focus:outline-none focus:border-cyan-400"
    />

    <input
      v-model="state.email"
      placeholder="Digite o email do Usuário"
      required
      class="w-full p-4 border-b-1 mb-4 focus:outline-none focus:border-cyan-400"
    />

    <input
      v-model="state.password"
      placeholder="Digite a senha do Usuário"
      required
      class="w-full p-4 border-b-1 mb-4 focus:outline-none focus:border-gray-400"
    />

    <select
      v-model="state.role"
      required
      class="w-full p-4 border-b-1 mb-4 focus:outline-none focus:border-cyan-400"
    >
      <option value="" disabled>Selecione a funçao</option>
      <option value="Admin">Admin</option>
      <option value="Usuário">Usuário</option>
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
  email: "",
  password: "",
  role: "",
});

watch(
  () => props.initial,
  (val) => {
    if (val) {
      state.name = val.name || "";
      state.email = val.email || "";
      state.password = val.password || "";
      state.role = val.role || "";
    } else {
      state.name = "";
      state.email = "";
      state.password = "";
      state.role = "";
    }
  },
  { immediate: true }
);

function onSubmit() {
  emit("submit", {
    name: state.name,
    email: state.email,
    password: state.password,
    role: state.role,
  });
}
</script>
