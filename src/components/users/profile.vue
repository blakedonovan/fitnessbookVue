
<template>
 
  <div>

  <b-form inline>
   <p> {{memberID}}

   
   </p>
    <label class="sr-only" for="inline-form-input-name">Name</label>
    <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder='ID'
     
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
import axios from 'axios'
//import { mapGetters } from 'vuex'
  export default {

   
    data () {

    return {
      memberID: null,
      
      userProfileData:'http://localhost:8000/userProfiles/profile/',
      profile:[],
userData:[]
     
    }
  },
 computed: {
   
  },
watch: {

      '$store.state.selection.memberSelection': function() {
      this.memberID= this.$store.state.selection.memberSelection
      this.profile=axios.get('http://localhost:8000/userProfiles/profile/'+this.$store.state.selection.memberSelection)
      console.log('profile '+this.$store.state.selection.memberSelection )
  }
    
  },
 

  methods:{
     
  }
,
mounted(){

  this.memberID = this.$store.state.selection.memberSelection
}
    
   
  

  }

 
</script>
<script>

</script>

<style scoped>
</style>