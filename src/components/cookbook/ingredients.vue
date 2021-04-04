
<template>
 <div>
   
<div class="col-auto">
  
    <b-form-input v-model="search" placeholder="Zutat suchen" class="mb-2 pl-1 " >

    </b-form-input>
  
  </div>
<div>
  <b-button v-b-toggle.collapse-1 variant="success" size="sm">Zutat hinzufügen</b-button>
  <b-collapse id="collapse-1" class="mt-2 mb-3">
  <div>
  <b-form inline >
    <label class="sr-only" for="inline-form-input-Zutat">Zutat</label>
    <b-form-input
      id="inline-form-input-Zutat"
      class="mb-2 mr-sm-2 mb-sm-0 sm"
      placeholder="Zutat"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-Fett">Fett</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-Fett" placeholder="Fett"></b-form-input>
    </b-input-group>

   <label class="sr-only" for="inline-form-input-Kohlenhydrate">Kohlenhydrate</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-Kohlenhydrate" placeholder="Kohlenhydrate"></b-form-input>
    </b-input-group>

    <label class="sr-only" for="inline-form-input-Protein">Protein</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-Protein" placeholder="Protein"></b-form-input>
    </b-input-group>

    <b-button variant="primary" class="xs">Speichern</b-button>
  </b-form>
</div>
  </b-collapse>
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
  search:'',   // search string for table 
  errors:'',
 sortBy: 'Zutat',
 sortDesc: false,
 

    ingridients:[],
    nutritionCat: [
      {key:'',sortable:false},
      { key: 'Zutat', sortable: true },
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
  

      const response = await axios.get('http://localhost:8000/cookbook/ingredients')
      this.ingridients = response.data
      //console.log(response.data) // uncomment if data loads 

      }catch(e){
    
    this.errors.push(e)

      }
      }


      
  }

  
</script>


