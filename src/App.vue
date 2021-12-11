<template>
  <div class="flex justify-end p-10">
    <app-dar-mode-switcher></app-dar-mode-switcher>
  </div>
  <h1 class="text-6xl mt-20 text-center mb-10 font-bold text-pink-500">
    Simpson's Codex
  </h1>
  <form class="flex justify-center">
    <div class="flex border-4 border-pink-500 rounded-lg mr-5 overflow-hidden">
      <span class="text-sm px-4 text-white py-2 bg-pink-500 whitespace-no-wrap"
        >Nome:</span
      >
      <input
        class="px-4 py-2 w-full outline-none"
        type="text"
        v-model="personagem.nome"
        placeholder="Nome do personagem"
      />
    </div>
    <div class="flex border-4 border-pink-500 rounded-lg overflow-hidden mr-5">
      <span class="text-sm px-4 text-white py-2 bg-pink-500 whitespace-no-wrap"
        >Imagem:</span
      >
      <input
        class="px-4 py-2 w-full outline-none"
        type="text"
        v-model="personagem.imagem"
        placeholder="Imagem do personagem"
      />
    </div>
    <button
      class="bg-pink-500 px-10 text-white uppercase rounded-lg"
      @click="salvarPersonagem"
      type="button"
    >
      Salvar
    </button>
  </form>

  <section class="flex flex-wrap p-10 justify-evenly">
    <app-personagem-card
      class="mb-5"
      :personagem="p"
      v-for="p in personagens"
      :key="p.nome"
    ></app-personagem-card>
  </section>
</template>

<script>
import axios from "axios";
import AppPersonagemCard from "./components/AppPersonagemCard.vue";
import AppDarModeSwitcher from "./components/AppDarkModeSwitcher.vue"

export default {
  components: {
    AppPersonagemCard,
    AppDarModeSwitcher
  },
  data() {
    return {
      personagem: {},
      personagens: [],
    };
  },
  methods: {
    async buscarTodosPersonagens() {
      // requisição GET para APIs
      const resp = await axios.get(import.meta.env.VITE_APP_API_URL + "/personagens");
      this.personagens = resp.data;
    },
    async salvarPersonagem() {
      const resp = await axios.post(
        import.meta.env.VITE_APP_API_URL + "personagens",
        this.personagem
      );
      alert(resp.data.mensagem);
      this.buscarTodosPersonagens();
      this.personagem = {};
    },
  },
  mounted() {
    this.buscarTodosPersonagens();
  },
};
</script>