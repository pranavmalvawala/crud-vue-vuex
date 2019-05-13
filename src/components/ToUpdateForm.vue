<template>
  <div>
    <b-modal
      id='modal-prevent-closing'
      ref='modal'
      title='Update The Entry'
      @ok='handleOk'
    >
      <form ref='form' @submit.stop.prevent='onSubmit'>
        <!-- Name field here -->
        <b-form-group
          id='input-group-1'
          class='align-class'
          label='Name:'
          label-for='input-1'
        >
          <!-- applying red border if input is empty -->
          <b-form-input
            id='input-1'
            :class='[errors.includes("name") && "input-error"]'
            v-model='formData.name'
          ></b-form-input>
        </b-form-group>
        <!-- Gender field here -->
        <b-form-group
          id='input-group-2'
          class='align-class'
          label='Gender:'
          label-for='input-2'
        >
          <!-- applying red border if input is empty -->
          <b-form-select
            id='input-2'
            :class='[errors.includes("gender") && "input-error"]'
            v-model='formData.gender'
            :options='["male", "female"]'
            required
          ></b-form-select>
        </b-form-group>
        <!-- Age field here -->
        <b-form-group
          id='input-group-3'
          class='align-class'
          label='Age:'
          label-for='input-3'
        >
          <!-- applying red border if input is empty -->
          <b-form-input
            id='input-3'
            :class='[errors.includes("age") && "input-error"]'
            required
            v-model='formData.age'
          ></b-form-input>
        </b-form-group>
        <!-- Color field here -->
        <b-form-group
          id='input-group-4'
          class='align-class'
          label='Color:'
          label-for='input-4'
        >
          <!-- applying red border if input is empty -->
          <b-form-input
            id='input-4'
            :class='[errors.includes("color") && "input-error"]'
            required
            v-model='formData.color'
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    formData: Object,
    onSubmit: Function
  },
  data () {
    return {
      // errors are stored in here
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
        this.formData.age &&
        this.formData.gender &&
        this.formData.color
      ) {
        // Trigger submit handler if all inputs have a value
        this.onSubmit()
        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      } else {
        // pushing items on errors array
        if (!this.formData.name) this.errors.push('name')
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
