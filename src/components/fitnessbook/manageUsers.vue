

<template>
<div>
{{title}} {{memberID}}
</div>
</template>

<script>
export default {
   
  created () {

  },

  computed:{

  

  }, 
  methods: {
  },
  props: {

   
  },
  watch: {
    
  },
data(){

return{

    title:'Benutzer Verwaltung',
    memberID:this.$store.state.selection.selected,
}
}
}
</script>

