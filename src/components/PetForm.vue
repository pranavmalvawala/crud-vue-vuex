<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Add Pet</b-button>

    <b-modal
      id='modal-prevent-closing'
      ref='modal'
      title='Fill Out this Form'
      @ok='handleOk'
    >
      <form ref='form' @submit.stop.prevent='handleSubmit'>
        <p>
          <!-- Pet name field -->
          <b-form-group
            id='input-group-1'
            class='align-class'
            label='Your Pet"s Name:'
            label-for='input-1'
          >
            <!-- applying red border if input is empty -->
            <b-form-input
              id='input-1'
              v-model='formData.name'
              :class='[errors.includes("name") && "input-error"]'
              required
              placeholder='Enter pet"s name'
            ></b-form-input>
          </b-form-group>
          <!-- Dropdown menu for selecting from species - cats, dogs -->
          <b-form-group
            id='input-group-2'
            class='align-class'
            label='Species:'
            label-for='input-2'
          >
            <!-- applying red border if input is empty -->
            <b-form-select
              id='input-2'
              :class='[errors.includes("species") && "input-error"]'
              v-model='formData.species'
              :options='["cats", "dogs"]'
              required
            ></b-form-select>
          </b-form-group>
          <!-- Pet's age field -->
          <b-form-group
            id='input-group-3'
            class='align-class'
            label='Your Pet"s Age:'
            label-for='input-3'
          >
            <!-- applying red border if input is empty -->
            <b-form-input
              id='input-3'
              v-model='formData.age'
              :class='[errors.includes("age") && "input-error"]'
              required
              placeholder='Enter pet"s age'
            ></b-form-input>
          </b-form-group>
          <!-- Pet's gender field -->
          <b-form-group
            id='input-group-4'
            class='align-class'
            label='Gender:'
            label-for='input-4'
          >
            <!-- applying red border if input is empty -->
            <b-form-select
              id='input-4'
              :class='[errors.includes("gender") && "input-error"]'
              v-model='formData.gender'
              :options='["male", "female"]'
              required
            ></b-form-select>
          </b-form-group>
          <!-- Pet color field -->
          <b-form-group
            id='input-group-5'
            class='align-class'
            label='Your Pet"s Color:'
            label-for='input-5'
          >
            <!-- applying red border if input is empty -->
            <b-form-input
              id='input-5'
              :class='[errors.includes("color") && "input-error"]'
              v-model='formData.color'
              required
              placeholder='Enter pet"s Color'
            ></b-form-input>
          </b-form-group>
        </p>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    formData: Object,
    handleSubmit: Function
  },
  data () {
    return {
      errors: []
    }
  },
  methods: {
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // emptying the array so that on repeated submits the errors
      // from last submit are not displayed
      this.errors = []
      // Form validation
      if (
        this.formData.name &&
        this.formData.species &&
        this.formData.age &&
        this.formData.gender &&
        this.formData.color
      ) {
        // Trigger submit handler if all inputs have a value
        this.handleSubmit()
      } else {
        if (!this.formData.name) this.errors.push('name')
        if (!this.formData.species) this.errors.push('species')
        if (!this.formData.age) this.errors.push('age')
        if (!this.formData.gender) this.errors.push('gender')
        if (!this.formData.color) this.errors.push('color')
      }
    }
  }
}
</script>

<style>
.input-error {
  border: 1px solid red;
}
.align-class {
  text-align: left;
}
</style>
