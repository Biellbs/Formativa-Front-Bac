<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-6">
    <div>
      <label for="nome" class="block text-gray-300 mb-2 text-sm font-medium">Nome Completo</label>
      <input
        id="nome"
        v-model="state.nome"
        placeholder="Digite o nome completo"
        required
        class="w-full p-4 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
      />
    </div>

    <div>
      <label for="email" class="block text-gray-300 mb-2 text-sm font-medium">E-mail</label>
      <input
        id="email"
        v-model="state.email"
        type="email"
        placeholder="Digite o e-mail"
        required
        class="w-full p-4 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
      />
    </div>

    <div>
      <label for="senha" class="block text-gray-300 mb-2 text-sm font-medium">Senha</label>
      <input
        id="senha"
        v-model="state.senha"
        type="password"
        :placeholder="edit ? 'Deixe em branco para não alterar' : 'Digite a senha'"
        :required="!edit"
        class="w-full p-4 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all"
      />
    </div>

    <div>
      <label for="papel" class="block text-gray-300 mb-2 text-sm font-medium">Papel/Função</label>
      <select
        id="papel"
        v-model="state.papel"
        required
        class="w-full p-4 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 transition-all cursor-pointer"
      >
        <option value="" disabled>Selecione o papel</option>
        <option value="admin">Administrador</option>
        <option value="tecnico">Técnico</option>
        <option value="operador">Operador</option>
        <option value="visualizador">Visualizador</option>
      </select>
    </div>

    <div class="flex gap-4 mt-2">
      <button
        :disabled="submitting"
        type="submit"
        class="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 text-white p-4 rounded-lg font-bold hover:scale-105 hover:shadow-xl transition-all duration-300 border border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {{ edit ? "Salvar Alterações" : "Adicionar Usuário" }}
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
  nome: "",
  email: "",
  senha: "",
  papel: "",
});

watch(
  () => props.initial,
  (val) => {
    if (val) {
      state.nome = val.nome || "";
      state.email = val.email || "";
      state.senha = ""; // Não preenche senha ao editar
      state.papel = val.papel || "";
    } else {
      state.nome = "";
      state.email = "";
      state.senha = "";
      state.papel = "";
    }
  },
  { immediate: true }
);

function onSubmit() {
  const payload = {
    name: state.nome,
    email: state.email,
    role: state.papel,
  };
  
  // Só inclui senha se for preenchida
  if (state.senha) {
    payload.password = state.senha;
  }
  
  emit("submit", payload);
}
</script>