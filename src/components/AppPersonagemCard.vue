<template>
    <div class="border-4 border-pink-500 bg-white w-56 h-80 shadow-xl rounded-tl-7xl rounded-br-7xl rounded-tr-lg rounded-bl-lg overflow-hidden">
      <!-- <img :src="personagem.imagem" alt="Imagem do personagem" class="h-52 w-full"> -->
      <div ref="imagem" class="imagem"></div>
      <div class="bg-pink-500 p-5 h-full">
          <h2 class="font-bold text-white text-xl">{{ personagem.nome }}</h2>
      </div>
    </div>
</template>
<script>
export default {
    props: ['personagem'],
    mounted() {
        // console.log(this.personagem.imagem)
        this.$refs.imagem.style.backgroundImage = `url(${this.personagem.imagem})`
    }
}
</script>
<style scoped>
.imagem {
    height: 250px;
    width: 100%;
    background-color: deeppink;
    background-size: cover;
    background-position: center;
}
</style>