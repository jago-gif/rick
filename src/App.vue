<template>
 <div class="body">
 <h1>Rick And Morty</h1>
 <FilterByStatus/>
 <FilterByName/>
 <ModelPersonaje/>
 <div class="navegacion">
  <BotonAnterior/>
  <Botonsiguiente/>
 </div>
 <ListCharacters/>
 </div>
</template>

<script>
import ListCharacters from './components/ListCharacters.vue';
import FilterByStatus from './components/FilterByStatus.vue';
import FilterByName from './components/FilterByName.vue';
import ModelPersonaje from './components/ModelPersonaje.vue';
import Botonsiguiente from './components/Botonsiguiente.vue';
import BotonAnterior from './components/BotonAnterior.vue';


export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName,
    Botonsiguiente,
    BotonAnterior,
    ModelPersonaje
}
}
</script>

<style lang="scss">
:root{
  background: rgb(48,41,105);
background: radial-gradient(circle, #302969 0%, #790973 93%);}
h1{
  text-align: center;
  color: rgb(255, 255, 255);
}
.navegacion{
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

</style>
