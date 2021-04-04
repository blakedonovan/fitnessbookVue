
<template>
 <div>
   
<div class="col-2">
    <b-form-input v-model="search" placeholder="Zutat suchen" class="mb-1 pl-1" >

    </b-form-input>
  
  </div>
<b-table  

 sticky-header
:items="ingridients" 
:fields="nutritionCat"
:sort-by.sync="sortBy"
:sort-desc.sync="sortDesc"
 sort-icon-right

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

    ingridients:'',
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