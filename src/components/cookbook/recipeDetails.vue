<template>
    <b-container fluid>
<div>
  <b-navbar type="light" variant="light" id="recipe_bar">
    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Searchx</b-button>
    <b-button>{{title}}</b-button>
    </b-nav-form>
  </b-navbar>
</div>

<b-form-group id="foodCat"  label-for="input-3" class=" col-6 w-25">
 <b-form-select v-model="catSelection" @change="getRecipesById">
  
<option v-for="cat in recipeCategories" v-bind:key="cat" :value="cat.category_id" lazy>

 {{cat.name}}
  </option>
  </b-form-select>
      </b-form-group>

      

{{catSelection}}
  
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
        recipeCategories:[],
        recipes:[],
        filteredRecipes:[],
     
        catSelection:0,
        errors:[]
      }
    },

async mounted(){
// fetch category selector , load recipes without selection   
      try{


      const recipeCat= await axios.get('http://localhost:8000/categories/recipeCategories')
      this.recipeCategories = recipeCat.data
      console.log(this.recipeCategories)



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