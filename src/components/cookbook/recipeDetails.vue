<template>
    <b-container fluid>

  <b-button>
    <b-link :to="{path: '/cookbook/recipes',params: { userId: 123 }}">Back</b-link>
  </b-button>

<b-card-group deck>
<b-card  img-src="https://placekitten.com/g/150/50" img-alt="Image" img-height="150px" img-width="50px" img-top v-for="recipe in recipes" v-bind:key="recipe" lazy>
      <b-card-text>
  {{recipe.recipe_name}}
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
</b-card-group>
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
  
        recipes:[],
        filteredRecipes:[],
     
        catSelection:0,
        errors:[]
      }
    },

async mounted(){
// fetch category selector , load recipes without selection   
      try{


   

      const recipes = await axios.get('http://localhost:8000/recipes/recipe/')
      this.recipes = recipes.data
      console.log(this.recipes)
      
      }catch(e){
    
    this.errors.push(e)

      }
      },

      created () {
        
  },
  watch: {
   

  },
      methods:{

        getRecipesById: async function(){
          
          this.filteredRecipes = await axios.get('http://localhost:8000/recipes/recipeId/'+this.catSelection)
          this.recipes = this.filteredRecipes.data
   
          console.log(this.recipes)
        }
      }



  }
</script>