import { defineStore } from "pinia";
import api from "../services/api.js";

export const useUsuarioStore = defineStore("usuario", {
  state: () => ({
    usuarios: [],
    loading: false,
    error: null
  }),
  getters: {
    totalUsuarios: (state) => state.usuarios.length
  },
  actions: {
    async fetchUsuario() {
      this.loading = true;
      this.error = null;
      try {
        const res = await api.get("/usuarios");
        this.usuarios = res.data;
      } catch (e) {
        this.error = e?.response?.data?.error || "Erro ao buscar usuario";
      } finally {
        this.loading = false;
      }
    },
    async addUsuario(usuario) {
      this.error = null;
      try {
        const res = await api.post("/usuarios", usuario);
        this.usuarios.unshift(res.data);
      } catch (e) {
        this.error = e?.response?.data?.error || "Erro ao criar usuario";
      }
    },
    async updateUsuario(id, payload) {
      this.error = null;
      try {
        const res = await api.put(`/usuarios/${id}`, payload);
        const idx = this.usuarios.findIndex(u => u._id === id);
        if (idx !== -1) this.usuarios[idx] = res.data;
      } catch (e) {
        this.error = e?.response?.data?.error || "Erro ao atualizar usuario";
      }
    },
    async removeUsuario(id) {
      this.error = null;
      try {
        await api.delete(`/usuarios/${id}`);
        this.usuarios = this.usuarios.filter(u => u._id !== id);
      } catch (e) {
        this.error = e?.response?.data?.error || "Erro ao remover usuario";
      }
    }
  }
});
