export default {
  appendPet: (state, { species, pet }) => {
    // selecting array with the selected species
    // unshift pushes the the new object in the begining makeing the rest
    // of object push behind
    state[species].unshift(pet)
  },
  updatePetData: (state, { toFind, data }) => {
    // toFind is object containing 2 properties species to update
    // and the index of object to be updated
    const species = toFind.species
    const index = toFind.index
    // selecting that object and changing its value to the new ones which data object has
    state[species][index].name = data.name
    state[species][index].gender = data.gender
    state[species][index].age = data.age
    state[species][index].color = data.color
  },
  deleteThatPet: (state, { species, index }) => {
    // index is the index of the object that is supposed to be deleted
    state[species].splice(index, 1)
  }
}
