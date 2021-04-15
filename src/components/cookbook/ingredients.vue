
<template>
 <div>
   <div>
<div class="col-1">
  <b-button v-b-toggle.collapse-1 variant="success" size="sm">Zutat hinzufügen</b-button>
</div>
  <b-collapse id="collapse-1" class="mt-2 mb-3">
  <div>


 

  <b-form inline @submit.prevent="checkForm" method="post" id="handleIngredient" v-model="IngredientForm">
    <label class="sr-only" for="inline-form-input-Zutat">Zutat</label>
    <b-form-input
      id="inline-form-input-Zutat"
      class="ml-3 mb-2 mr-sm-2 mb-sm-0 sm"
      placeholder="Zutat"
      v-model="IngredientForm.ingredient"
      ref="ingredient"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-Fett">Fett</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input 
      id="inline-form-input-Fett" 
      placeholder="Fett"
      v-model="IngredientForm.fat"
      ></b-form-input>
    
    </b-input-group>

   <label class="sr-only" for="inline-form-input-Kohlenhydrate">Kohlenhydrate</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input 
      id="inline-form-input-Kohlenhydrate" 
      placeholder="Kohlenhydrate"
      v-model="IngredientForm.carbs"
      ></b-form-input>
    </b-input-group>

    <label class="sr-only" for="inline-form-input-Protein">Protein</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input 
      id="inline-form-input-Protein"
       placeholder="Protein"
       v-model="IngredientForm.protein"
       ></b-form-input>
    </b-input-group>


 <label class="sr-only" for="inline-form-input-Protein">Kalorien</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input 
      id="inline-form-input-Kalorien"
       placeholder="Kalorien"
       v-model="IngredientForm.kcal"
       ></b-form-input>
    </b-input-group>

    <b-button variant="primary" v-b-toggle.collapse-1  v-on:click="checkForm" class="xs" >Speichern</b-button>
  </b-form>

</div>

  </b-collapse>
</div>


<div class="col-auto">
 <b-input-group  class="mt-2 mb-2 pl-1 " >
<b-input-group-prepend is-text>
        <b-icon icon="search" variant="success"></b-icon>
      </b-input-group-prepend>
    <b-form-input  v-model="search" placeholder="Zutat suchen" >

    </b-form-input>
   </b-input-group>


  </div>

  
<b-table  
 

 sticky-header
:items="ingridients" 
:fields="nutritionCat"
:sort-by.sync="sortBy"
:sort-desc.sync="sortDesc"
 sort-icon-right
 dark="true"
:filter=search
 lazy
>

</b-table>

  
   </div>
 
  
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      
      return {

  //table handling
  search:'',   // search string for table 
  errors:'',
 sortBy: 'Zutat',
 sortDesc: false,
//table handling

IngredientForm:{
ingridient:'',
fat:null,
carbs:null,
protein:null,
kcal:null

},
IngredientHandler:'',


    ingridients:[],

    nutritionCat: [
      {key:'',sortable:false},
      { key: 'Zutat' , sortable: true },
      { key: 'Fett', sortable: true },
      { key: 'Kohlenhydrate', sortable: true },
      { key: 'Protein', sortable: true },
      { key: 'Kcal', sortable: true }
        ],

      }
    },

computed:{

},


    async mounted(){
      
      try{
  

      const response = await axios.get('http://localhost:8000/cookbook/ingredient')
      this.ingridients = response.data
      

      }catch(e){
    
    this.errors.push(e)

      }
      },

   methods:{


        checkForm: function() { 
var zutat = document.
getElementById("inline-form-input-Zutat")
.value


var fat = document.
getElementById("inline-form-input-Fett")
.value


alert(zutat+" "+fat)

           axios.get('http://localhost:8000/cookbook/addIngredients'+{zutat}+{fat}).
         then(function(){

 //console.log(response)
         })
     


    },
       
      }

}
      
  

  
</script>


