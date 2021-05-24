
<template>
 
  <div>
{{$store.state.selection.memberSelection}}
  <b-form inline>
    <label class="sr-only" for="inline-form-input-name">Name</label>
    <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder=""
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-username" type="number" placeholder="Gewicht"></b-form-input>
    </b-input-group>

   

    <b-button variant="primary">Speichern</b-button>
  </b-form>

</div>





</template>

<script>

  export default {

   
      props: {

   
      },

 Components: {

    },


    data () {

    return {
      memberSelect:0,
      memberSelection:null

    }
  },


  created () {
  },

    
  
   mounted(){
console.log(this.$store.state.selection.memberSelection);

  },

    
   
  

  }

 
</script>
<script>

</script>

<style scoped>
</style>