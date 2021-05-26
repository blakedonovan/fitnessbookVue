<template>
  <div>
 

{{memberID}}

  </div>
</template>
<script>
import axios from 'axios'


export default {

  name: 'biometrics',
  data() {
      return {
  
       profile:[],
       memberID:null,
   
      }
    },
   


  created () {
   
  },
  
  watch: {

    '$store.state.selection.memberSelection': function() {
         this.fetchProfile()
    
    
  }
    
  },
  

  computed: {

    
  },


  mounted () {
      this.fetchProfile()
},

methods:{

async fetchProfile(){

  this.memberID = this.$store.state.selection.memberSelection
  const response = await axios.get('http://localhost:8000/userProfiles/profile/'+this.memberID)
  this.profile = response.data
 
 console.log(this.profile)
}
}
}
</script>



<style scoped>

</style>