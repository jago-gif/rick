<template>
  <div>
    <button class="boton" @click="anterior('')">Anterior</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const anterior = (() => {
      store.dispatch('botonAnterior')
    })
    return {
      anterior
    }
  }
}
</script>

<style lang="scss" scoped></style>