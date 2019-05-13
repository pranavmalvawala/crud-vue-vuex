export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  },
  updatePet: ({ commit }, payload) => {
    commit('updatePetData', payload)
  },
  deletePet: ({ commit }, payload) => {
    commit('deleteThatPet', payload)
  }
}
