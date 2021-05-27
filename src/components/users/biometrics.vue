<template>
  <div>
 

{{memberID}}
<b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
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
    types: [
          'text',
          'number',
          'email',
          'password',
          'search',
          'url',
          'tel',
          'date',
          'time',
          'range',
          'color'
        ]
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