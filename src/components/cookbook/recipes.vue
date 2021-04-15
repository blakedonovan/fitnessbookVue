<template>
    <div>
  <b-card-group >
    <b-card title="Protein Pizza" img-src="https://thomassixt.de/wp-content/uploads/2019/08/thunfischpizza.jpg" img-alt="Image" img-size="200px" img-top>
      
        <div>
    <b-form-rating v-model="value" :locale="locale" show-value precision="1"></b-form-rating>
    
  </div>
      <b-card-text>
         

        Eiweiß : 120g || Kohlehydrate : 50g || 

        Zubereitung: 

      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    
  </b-card-group>



</div>
</template>
<script>
  export default {
    data() {
      return {
        
        locale:0,
        value: 4.2
      }
    }
  }
</script>