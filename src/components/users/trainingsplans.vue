<template>

  <div class="accordion" role="tablist">
{{memberID}}

    <b-card no-body class="mb-1" v-for="trainingPlan in trainingPlans" v-bind:key="trainingPlan">
      <b-card-header header-tag="header" class="p-1" role="tab">

        <b-button block v-b-toggle="`accordion-${trainingPlan.id}`" @click="getID(trainingPlan.id)" variant="info">{{trainingPlan.name}}-{{trainingPlan.id}}</b-button>

      </b-card-header>

      <b-collapse :id="`accordion-${trainingPlan.id}`" accordion="my-accordion" role="tabpanel">

        <b-card-body>
          
          <b-card-text lazy>

            <b-form>
              <b-container fluid>

    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type" :placeholder="`${placeholder}`"></b-form-input>
      </b-col>
    </b-row>
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
    getID (value) { 
     console.log(value) 
    },
    async fetchTrainingsPlans(){

  this.memberID = this.$store.state.selection.memberSelection
  const response = await axios.get('http://localhost:8000/individualTraining/trainingList/'+this.memberID);
  this.trainingPlans = response.data
  console.log(this.trainingPlans)
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
      
        types: [
          'text',
          'number',
          'number',],

         // placeholder:['Trainingseinheit','Weight','Wiederholungen']
      }
    },

    mounted(){
      this.fetchTrainingsPlans()

       this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      console.log('collapseId:', collapseId)
      console.log('isJustShown:', isJustShown)
    })
  
    }
  }
</script>