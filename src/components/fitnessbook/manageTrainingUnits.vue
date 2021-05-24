<template>
  <div>
    <h1>{{memberID}}</h1>
hi
  </div>
</template>
<script>
export default {
  watch: {
    memberID () { 
      return null 
    },
    
  },
  name: 'manageTrainingUnits',

  mounted () {
      
   console.log(this.$store.state.selection.memberSelection);
  
},
  data() {
      return {
    
       memberID:this.$store.state.selection.memberSelection,
   
      }
    },
    computed(){


    },

}


</script>



<style scoped>
li{
    height: 40px;
    width: 100%;
    padding: 15px;
    border: 1px solid saddlebrown;
    display: flex;
    justify-content: center;
    align-items: center;
  }  
a {
  color: #42b983;
}
</style>