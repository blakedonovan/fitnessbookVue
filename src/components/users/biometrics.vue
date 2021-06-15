<template>

   <div>

<b-row>
  <b-col cols="2">

</b-col>
  <b-col cols="10">
  
      <apexchart width="700" type="area" :options="options" :series="series"></apexchart>
</b-col>
</b-row>
    
   </div>
</template>

<script>

import axios from 'axios'


export default {

  name: 'LineChartContainer',

  data: () => ({
   
    cdata: [],
    memberID :null,
datacollection: null,
options: {

  xaxis: {
            categories: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August']
          },
          stroke: {
  curve: 'smooth',
},


},
      series: [],


    
      
  }),


 async mounted () {

  this.fetchProfile()
  this.fillData();
   this.fetchBiometrics()
  }
,
methods:{


async fetchBiometrics(){

 try {
const userProgress  = await axios.get('http://localhost:8000/userBiometrics/userProgress/'+this.memberID)
      this.cdata = userProgress.data.map(item=>item.Gewicht)

 this.series = [{
    data:this.cdata ,
   name:'Gewicht in kg'
   }]


     
      
    } catch (e) {
      console.error(e)
    }

},
 async fetchProfile(){

  this.memberID = this.$store.state.selection.memberSelection
  const response = await axios.get(this.userProfileData+this.memberID)
  this.profile = response.data
  return this.profile
},



async fillData(){

}



},

watch: {

     '$store.state.selection.memberSelection': function() {
         this.fetchProfile()
          this.fetchBiometrics()
         this.fillData()
    
    
  }
  }

 


}
</script>