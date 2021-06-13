<template>
  <div class="small">
    <line-chart :chartdata="chartData" :options="chartOptions"/>
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import axios from 'axios'

import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  name: 'biometrics',
  data() {
      return {
  
       profile:[],
       memberID:null,
    trainingPlan:1
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
       this.renderChart(this.chartData, this.options)
      
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