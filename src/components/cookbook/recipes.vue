<template>
    <div>

<div class="w-25">
<b-form-group id="input-group-3"  label-for="input-3">
 <b-form-select v-model="catSelection">
<option v-for="cat in recipeCategories" v-bind:key="cat" lazy>

  {{cat.name}} - {{cat.category_id}}
  </option>
  </b-form-select>
      </b-form-group>

      
</div>
{{catSelection}}
  
<ul>
<div v-for="recipe in recipes" v-bind:key="recipe">
  {{recipe.recipe_name}}
  </div>
</ul>
</div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        recipeCategories:[],
        recipes:[],
        cat:"",
        catSelection:""
      }
    },

async mounted(){
// fetch category selector , load recipes without selection   
      try{


      const recipeCat= await axios.get('http://localhost:8000/categories/recipeCategories')
      this.recipeCategories = recipeCat.data
      console.log(this.recipeCategories)

      const recipes = await axios.get('http://localhost:8000/recipes/recipe')
      this.recipes = recipes.data
      //console.log(this.recipes)
      
      }catch(e){
    
    this.errors.push(e)

      }
      },


  }
</script>