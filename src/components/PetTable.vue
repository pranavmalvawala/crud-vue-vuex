<template>
  <div>
    <h1>{{species | capitalize}} For Adoption</h1>
    <b-table striped hover :items='pets'>
      <!-- pets comes from props object -->
      <template slot='name' slot-scope='data'>
        <!-- selects the 'name' column from the table and applies formatting -->
        <router-link
          :to='`/pet/${species}/${data.index}`'
        >{{ data.value }}</router-link>
        <!-- data contains objects which are passed in pets and data.value
        contains its field text, on which the link is displayed-->
      </template>
      <template slot='update' slot-scope='data'>
        <!-- selects the 'update' column from the table and applies formatting -->
        <b-button
          v-b-modal.modal-prevent-closing
          variant='outline-primary'
          @click='editTabShow(species, data.index)'
        >{{ data.value }}</b-button>
        <!-- data contains objects which are passed in pets and data.value
        contains its field text, on which the link is displayed-->
        <!-- editTabShow function triggers the updateForm to appear -->
      </template>
      <template slot='delete' slot-scope='data'>
        <!-- selects the 'delete' column from the table and applies formatting -->
        <b-button
          variant='outline-primary'
          @click='itemToDelete(species, data.index)'
        >{{ data.value }}</b-button>
        <!-- data contains objects which are passed in pets and data.value
        contains its field text, on which the link is displayed-->
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array,
    editTabShow: Function,
    itemToDelete: Function
  },
  data () {
    return {
      EditTab: false
    }
  },
  filters: {
    capitalize (value) {
      if (!value) return '';
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style>
.btn-style {
  background-color: lightblue;
  color: purple;
  padding: 7px;
}
.btn-style:hover {
  background-color: blueviolet;
  color: white;
  text-decoration: none;
}
</style>
