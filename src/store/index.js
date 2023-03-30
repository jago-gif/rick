import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    meta:[],
    personaje:null,
    showModal:false
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setMeta(state, payload) {
      state.meta = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    }
    ,
    setPersonaje(state, payload) {
      state.personaje = payload
    },
    setShowModal(state, payload) {
      state.showModal = payload
    }
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
        commit('setMeta', data.info)
      } catch (error) {
        console.error(error)
      }
    },

    async botonSiguiente({ commit , state}) {
      try {
        const response = await fetch(state.meta.next)
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
        commit('setMeta', data.info)
      } catch (error) {
        console.error(error)
      }
    },
    async botonAnterior({ commit , state}) {
      try {
        const response = await fetch(state.meta.prev)
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
        commit('setMeta', data.info)
      } catch (error) {
        console.error(error)
      }
    },

    filterByStatus({ commit, state }, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', results)
    },
    
    filterByName({ commit, state }, name) {
      const formatName = name.toLowerCase()
      const results = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()

        if (characterName.includes(formatName)) {
          return character
        }
      })
      commit('setCharactersFilter', results)
    },
     selecPersonaje({ commit , state },seleccionar) {
      const results = state.characters.filter((character) => {
        return character==(seleccionar)
      })
      commit('setPersonaje', results)
      console.log(state.personaje)
    }
  },
  
  modules: {
    
  }
})
