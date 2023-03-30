<template>
  <div class="character" @click="seleccionar(character)">
    <img class="foto" :src="character.image" alt="character.name">
    <div class="character__info">
      <h3>{{ character.name }}</h3>
      <div class="status">
        <span>{{ character.status}}</span>
        <span> - {{character.species }}</span>
      </div>
      <div class="origin">
        <span>Origen : {{ character.origin.name }}</span>
      </div>
      <div class="location">
        <span>Localicacion: {{ character.location.name }}</span>
      </div>
      <div>
        <button @click="show=true">abrir</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['character'],
  setup(){
    const store = useStore()
    const show = ref(false)
    const seleccionar = ((personaje) => {
      store.dispatch('selecPersonaje',personaje)
    })
    return {
      seleccionar,show
    }
  }
  
}
</script>

<style lang="scss">
.character {
  background-color: #737a9c8f;
  border-radius: 20px;
  overflow: hidden;
  padding-top: 5%;
  padding-bottom: 5%;
  text-align: center;
}
.foto{
  border-radius: 20%;
}
.character span{
  color: white;
}
.character h3{
  color: white;
}


</style>