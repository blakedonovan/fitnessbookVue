<template>
    <b-container fluid>

  <b-button>
    <b-link :to="{path: '/cookbook/recipes'}">Back</b-link>
  </b-button>

 
<b-card  >{{RecipeName}}
      <b-card-text v-for="recipeInfo in RecipeDetails " v-bind:key="recipeInfo" lazy>
 <li> {{recipeInfo.Zutat}} -{{recipeInfo.ingredient_amount}} g</li>


 
      </b-card-text>



      <template #footer>
        <b-button >Bearbeiten</b-button>
        <small class="text-muted"> </small>
      </template>
    </b-card>



</b-container>




</template>

<style scoped>
.recipe_bar {
  color: rgb(37, 13, 104);
}

#foodCat{
  color: rgb(0, 204, 255);
}
</style>

<script>
import axios from 'axios'


  export default {
  
    data() {
      return {
      title:'recipeDetails',
  recipeId:0,
  RecipeName:'',
    RecipeDetails:[],     
            ingredients: [],  
        errors:[]
      }
    },

async mounted(){
// fetch category selector , load recipes without selection   
      


   

      
      
    



      },

      async created  () {

        try{
        this.recipeId = this.$route.params.recipeId;

         this.RecipeDetailFetch = await axios.get('http://localhost:8000/recipes/recipeDetail/'+this.recipeId)
          this.RecipeDetails = this.RecipeDetailFetch.data
          this.ingredients =this.RecipeDetailFetch.data
          console.log(this.RecipeDetails)
          }catch(e){
            this.errors.push(e)

      }
    
  },
  watch: {
   

  },
      methods:{

       
      }



  }
</script>