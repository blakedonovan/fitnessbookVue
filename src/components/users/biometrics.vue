<template>
  <div>
 

{{memberID}}
<b-list-group>

  <b-list-group-item v-for="pf in profile" v-bind:key="pf.id">{{pf.user_name}}</b-list-group-item>

</b-list-group>

  </div>
</template>
<script>
import axios from 'axios'
//import { mapState } from 'vuex';

export default {
  
  created () {
      
  },
  methods: {

  },
  watch: {

    '$store.state.selection.memberSelection': function() {
      this.memberID= this.$store.state.selection.memberSelection
      this.profile=axios.get('http://localhost:8000/userProfiles/profile/'+this.$store.state.selection.memberSelection)
    console.log('biometrics '+this.$store.state.selection.memberSelection )
    console.log(this.profile)
  }
    
  },
  name: 'biometrics',

  computed: {

    
  },


  mounted () {
   this.memberID = this.$store.state.selection.memberSelection
 
},
  data() {
      return {
  
profile:[],
       memberID:null,
   
      }
    },
   

}


</script>



<style scoped>
li{
    height: 40px;
    width: 100%;
    padding: 15px;
    border: 1px solid saddlebrown;
    display: flex;
    justify-content: center;
    align-items: center;
  }  
a {
  color: #42b983;
}
</style>