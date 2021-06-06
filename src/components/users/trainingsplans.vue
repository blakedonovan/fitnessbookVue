<template>

  <div  class="accordion" role="tablist">


<b-row>
<b-col cols="6" class="pr-3 pb-3">
  <b-button 
  variant="primary" 
 
  id="createTbutton"
  v-b-toggle.createTrainingPlan
  >Trainingsplan erstellen</b-button>
 

 

  </b-col>
  <b-col >

    <b-collapse cols="2" id="createTrainingPlan">
     <b-form class="pt-0"  inline>

 <b-input v-model="trainingPlanName" placeholder="Trainingsplan Name" width="25px"></b-input>



    <b-button 
    variant="primary" 
    @click="addTrainingPlan(memberID)" 
    class="ml-1"
    
    >Speichern</b-button>
  </b-form>
  </b-collapse>
  </b-col>
  


</b-row>


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
     
{{trainingPlan.name}}
                   <b-row>
    <b-col cols="1" class="ml-0 mb-1">
      
      <b-button 
      v-b-toggle.addTrainingUnit 
      variant="primary"
      @click="getTrainingUnitsByCat"
      >Trainingseinheit hinzufügen</b-button>
      
      </b-col>
  <b-collapse id="addTrainingUnit" class="mt-2">
    
    <b-col cols="12" class="ml-0 mb-1">
      
  <b-form class="pt-2"  inline>

  
  <b-input-group prepend="Kategorie" class="mb-2 mr-sm-2 mb-sm-0">
    <b-form-select
      id="inline-form-custom-select-trainingUnits"
      class="mb-2 mr-sm-2 mb-sm-0"
      :value="null"
      v-model="trainingCat"
      @change="getTrainingCategorySelection"
    >
    <option v-for="trainingUnitCat in trainingUnitsbyCat" :key="trainingUnitCat" :value="trainingUnitCat.id" >
      {{trainingUnitCat.type}}
  </option>
    </b-form-select>
</b-input-group>

<b-input-group prepend="Trainingseinheit" class="mb-2 mr-sm-2 mb-sm-0" >
    <b-form-select
      id="inline-form-custom-select-trainingUnits"
      class="mb-2 mr-sm-2 mb-sm-0"
    
      :value="null"
      v-model="trainingUnit"
      
    >
    
    <option v-for="trainingCatSelect in trainingCatSelection" :key="trainingCatSelect" :value="trainingCatSelect.category_id" >
      {{trainingCatSelect.name}}
  </option>
    </b-form-select>
</b-input-group>

    <label class="sr-only" for="inline-form-input-rep">Wiederholungen</label>
    <b-input-group prepend="Wiederholungen" class="mb-2 mr-sm-2 mb-sm-0">
    <b-form-input
      id="inline-form-input-rep"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Beispiel 5/5/5/5"
      v-model="reps"
    ></b-form-input>
    </b-input-group>

    <label class="sr-only" for="inline-form-input-weight">Gewicht</label>
    <b-input-group prepend="Gewicht" class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input 
      id="inline-form-input-weight" 
      placeholder="Beispiel 5/15/25/35"
      v-model="weight"></b-form-input>
    </b-input-group>



    <b-button variant="primary" @click="addTrainingUnit(trainingPlan.id)" >Speichern</b-button>
  </b-form>
    </b-col>
   
  </b-collapse>
      

  </b-row>


<b-table 
 striped 
 hover 
 :items="trainingUnits" 
 :fields="fields"
 :busy.sync="isBusy"
 show-empty
 table-variant="primary"
 responsive
 selectable
  lazy
 >

      
  <template v-slot:cell(reps)="row">
   
   
        <b-form-input v-model="row.item.reps"   disabled/>
 
    
  
      </template>

<template v-slot:cell(id)="row">
   
   
        <b-button v-model="row.item.id" @click="editUnit(row.item.id)">Bearbeiten</b-button>
        <b-button v-model="row.item.id" @click="removeUnit(row.item.id,trainingPlan.id)">Löschen {{row.item.id}}</b-button>
    
  
      </template>

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

try {
this.isBusy = true
  this.memberID = this.$store.state.selection.memberSelection
  const response = await axios.get('http://localhost:8000/individualTraining/trainingList/'+this.memberID);
  this.isBusy = false
  this.trainingPlans = response.data

} catch (error) {
  this.isBusy = false
  console.log('failed to load db table')
  return this.trainingPlans=[]
}
  
  console.table(this.trainingPlans)
},
async fetchTrainingUnitsbyTPId(value){


 try {

   const response = await axios.get('http://localhost:8000/individualTraining/trainingUnitsbyListID/'+value);
   this.trainingUnits = response.data
   console.table(this.trainingUnits)
 
 } catch (error) {
   console.log('failed to load db table')
 }
  
},

async getTrainingUnitsByCat(){

try {

const response = await axios.get('http://localhost:8000/individualTraining/getTrainingCats');
this.trainingUnitsbyCat = response.data

console.table(this.trainingUnitsbyCat)
} catch (error) {
console.log('db did not load')  
}

},
async getTrainingCategorySelection(value){

try {

let response = await axios.get('http://localhost:8000/individualTraining/getTrainingCatSelection/'+value);

this.trainingCatSelection = response.data
console.table(this.trainingCatSelection) 
} catch (error) {
  console.log('db did not load')
}


},

addTrainingPlan(value){
let trainingPlan={'user':value,'name':this.trainingPlanName}

axios.post('http://localhost:8000/individualTraining/addPlan/', trainingPlan)
                 .then((res) => {
                      console.log(res)
              
              this.fetchTrainingsPlans()
                 })
                 .catch((error) => {
                   console.log(error)
                 
                 }).finally(() => {
                     //Perform action in always
                 });

this.fetchTrainingsPlans()

  

},

addTrainingUnit(value){
let arr = {
  "tpid":value,
  "trainingUnit":this.trainingUnit,
  "reps":this.reps,
  "weight":this.weight,
  }

   // alert(JSON.stringify(this.addTrainingUnitForm)+value)
   console.table(arr)
   this.trainingUnit=""
   this.reps=""
   this.weight=""
}
 ,
 
 editUnit(edit){

  console.log('edit'+' '+edit)
},
async removeUnit(remove,tpid){
//console.log(remove,tpid)

try {


 await axios.post('http://localhost:8000/individualTraining/removeTrainingUnit/'+remove)
                 .then((res) => {
                      console.log(res)

                        this.fetchTrainingUnitsbyTPId(tpid)
          
                 })
                 .catch((error) => {
                   console.log(error)
                 
                 }).finally(() => {
                     //Perform action in always
                 });

} catch (error) {

  console.log('dataset for id did not exist' +error)
}


}
  },
    
  watch: {

  '$store.state.selection.memberSelection': function() {
         this.fetchTrainingsPlans()
    
  },
   
  },
    data() {
      return {
        memberID:null,
        trainingPlanName:'',
        trainingUnitsbyCat:[],
        trainingCatSelection:[],
        trainingPlans:[],
        trainingUnits:[],

        trainingPlanForm:{
          memberID:null,
          trainingPlanForm:null,
        },

trainingPlandID:null,
fields:[
  
  {key:'name',label:'Name'},
  {key:'reps',label:'Wiederholungen'},
  {key:'weight',label:'Gewicht'},
  {key:'description',label:'Beschreibung'},
  {key:'id',label:' '},
],

trainingUnit:null,
reps:null,
weight:null,
  



      
      }
    },

    mounted(){
  
    this.fetchTrainingsPlans()
  
    }
  }
</script>

<style >

</style>