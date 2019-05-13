<template>
  <div>
    <h1>Get a new Best friend!</h1>
    <!-- Has a modal(popup type) form for adding new pet -->
    <PetForm :formData='formData' :handleSubmit='handleSubmit'/>
  </div>
</template>

<script>
// making the state management actions available here
import { mapActions } from 'vuex';
// importing a validated modal form
import PetForm from '../components/PetForm';
export default {
  name: 'home',
  components: {
    PetForm
  },
  data () {
    return {
      showPetForm: false,
      // this toggles on clicking of add pet button
      formData: {
        name: '',
        age: 0,
        species: null,
        gender: null,
        color: ''
      }
    }
  },
  methods: {
    ...mapActions(['addPet']),
    // addPet action from actions is made available in this tab
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, name, age, gender, color } = this.formData
      // passing in the form data as payload to addPet action
      const payload = {
        species,
        pet: {
          name,
          age,
          gender,
          color,
          update: 'Update',
          delete: 'delete'
        }
      }
      // addPet is one of the actions from the store
      this.addPet(payload)

      // reset from after submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
      // go to the route with the same species which the user added
      this.$router.push(`/${species}`)
    }
  }
}
</script>

<style>
.row {
  margin-left: 270px;
  margin-top: 40px;
}
</style>
