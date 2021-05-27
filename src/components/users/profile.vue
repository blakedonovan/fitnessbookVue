
<template>
 
  <div>
{{date}}

   <b-card v-for="pf in profile" :key="pf"
    :title="pf.user_name"
   
  
    style="max-width: 20rem;"
    class="mb-2"
  >

    </b-card>

  <b-form inline v-for="pf in profile" :key="pf">
  

   

    <label class="sr-only" for="inline-form-input-name">Name</label>
    <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      type="date"
      placeholder='ID'
     :value="pf.birthday"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input 
      id="inline-form-input-username" 
      placeholder="Gewicht"
      style="max-width: 11rem;"
      :value="pf.size"
      ></b-form-input>
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
      bmi:null,
      date:null
     
    }
  },
 computed: {
   
  },
watch: {

     '$store.state.selection.memberSelection': function() {
         this.fetchProfile()
    
    
  }
  
  },
 

  methods:{
     async fetchProfile(){

  this.memberID = this.$store.state.selection.memberSelection
  const response = await axios.get(this.userProfileData+this.memberID)
  this.profile = response.data
  return this.profile
}
  }
,
mounted(){

   this.fetchProfile()
   this.date= Date();
}
    
   
  

  }

 
</script>


<style scoped>
</style>