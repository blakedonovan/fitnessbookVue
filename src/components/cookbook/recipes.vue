<template>
    <div>
  <b-card-group >
    <b-card title="Protein Pizza" img-src="https://thomassixt.de/wp-content/uploads/2019/08/thunfischpizza.jpg" img-alt="Image" img-top>
      
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

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
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
        value: 4.2
      }
    }
  }
</script>