<template>
  <div>
    <h1>{{animal.name}} ({{$route.params.species}})</h1>
    <p>Age: {{animal.age}} years old</p>
    <p>Breed: {{animal.breed}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      animal: {}
      // contains the data of the 1 element whose type and id mentioned in url
    }
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    // $route.params.species is an instance of usage of dynamic routing
    // extracting the animal's type and so as with '.id' which contains its
    // id which is index here
    // the whole part after first 'this' is considered to be variable
    // so that it can be accessed in this as one of its property
    this.animal = animal
    // saving the result in animal which is in data property
  }
}
</script>
