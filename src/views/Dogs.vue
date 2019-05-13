<template>
  <div>
    <!-- PetTable is Dynamic table -->
    <PetTable
      species='dogs'
      :pets='dogs'
      :editTabShow='toggleEditTab'
      :itemToDelete='itemToDelete'
    />

    <!-- ToupdateForm is Dynamic form -->
    <ToUpdateForm :formData='formData' :onSubmit='onSubmit'/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
// for connecting to state of store
import PetTable from '../components/PetTable';
// importing the table which is dynamic in nature so cats can also use same one
import ToUpdateForm from '../components/ToUpdateForm';
// importing the form which is dynamic in nature so same can be used for cats
export default {
  components: {
    PetTable,
    ToUpdateForm
  },
  data () {
    return {
      showEditTab: false,
      showEditTabData: {
        species: null,
        index: ''
      },
      formData: {}
    }
  },
  computed: {
    ...mapState(['dogs'])
    // selecting dogs from number of collection in store
    // now using dogs name as variable will give access to that data
  },
  methods: {
    ...mapActions(['updatePet', 'deletePet']),
    // extracting updatePet, deletePet action so that it can be used here
    toggleEditTab (species, index) {
      this.showEditTab = true
      // this toggles to appear and disappear on update btn click
      this.showEditTabData = {
        species: species,
        index: index
      }
      // saved specie type and index of the item to be edited in state
      this.formDataFill(this.showEditTabData.index)
      // calling and passing the index to the function
    },
    closeForm () {
      this.showEditTab = false
    },
    formDataFill (index) {
      // saving the data of the item on which update btn was clicked
      // this populates the form with existing data
      this.formData = {
        name: this.dogs[index].name,
        gender: this.dogs[index].gender,
        age: this.dogs[index].age,
        color: this.dogs[index].color
      }
    },
    onSubmit () {
      // passing the new data to actions
      const { name, gender, age, color } = this.formData
      const { species, index } = this.showEditTabData
      // creating a payload object for the action
      const payload = {
        toFind: {
          species,
          index
        },
        data: {
          name,
          gender,
          age,
          color
        }
      }
      // updatePet is one of the actions from the store
      this.updatePet(payload)
      this.showEditTab = false
    },
    itemToDelete (species, index) {
      // creating a payload object for the action
      const payload = {
        species,
        index
      }
      // deletePet is one of the actions from the store
      this.deletePet(payload)
    }
  }
}
</script>
