<template>

  <div  class="accordion" role="tablist">
{{memberID}}

    <b-card no-body class="mb-1" v-for="trainingPlan in trainingPlans" v-bind:key="trainingPlan">
      <b-card-header header-tag="header" class="p-1" role="tab">

        <b-button 
        block 
        v-b-toggle="`accordion-${trainingPlan.id}`" 
        @click="fetchTrainingUnitsbyTPId(trainingPlan.id)" 
        variant="info">
        {{trainingPlan.name}}
        </b-button>

      </b-card-header>

      <b-collapse 
      :id="`accordion-${trainingPlan.id}`" 
      accordion="trainingPlan-accordion" 
      role="panel">

        <b-card-body>
          
          <b-card-text lazy>

            <b-form>
              <b-container fluid>

<b-table 
 striped 
 hover 
 :items="trainingUnits" 
 :fields="fields"
 lazy
 >
 </b-table>

  </b-container>
            </b-form>
          
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

   
  </div>
</template>

<script>
import axios from 'axios'
  export default {
  methods: {
    
    async fetchTrainingsPlans(){

  this.memberID = this.$store.state.selection.memberSelection
  const response = await axios.get('http://localhost:8000/individualTraining/trainingList/'+this.memberID);
  this.trainingPlans = response.data
  console.log(this.trainingPlans)
},
async fetchTrainingUnitsbyTPId(value){

 
  const response = await axios.get('http://localhost:8000/individualTraining/trainingUnitsbyListID/'+value);
  this.trainingUnits = response.data
  console.log(this.trainingUnits)
},
 
  },
    
  watch: {

  '$store.state.selection.memberSelection': function() {
         this.fetchTrainingsPlans()
    
  },
    value:function(){
      alert('hi')
    }
  },
    data() {
      return {
        memberID:null,
        trainingPlans:[],
        trainingUnits:[],
trainingPlandID:null,
fields:[],

        types: [
          'text',
          'number',
          'number',],

         // placeholder:['Trainingseinheit','Weight','Wiederholungen']
      }
    },

    mounted(){
  
    
  
    }
  }
</script>

 