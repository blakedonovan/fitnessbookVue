<template>

<div>

<div>
  <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</div>

  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
        <b-nav-item to="/users/profile" exact exact-active-class="active">Profil</b-nav-item>
        <b-nav-item to="/users/trainingsplans" exact exact-active-class="active">Trainingspläne</b-nav-item>
        <b-nav-item to="/users/biometrics" exact exact-active-class="active">Biometrie</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body>
     
      <router-view></router-view>

    </b-card-body>
  </b-card>
</div>
   
      
      
     

</template>

<script>
  export default {

    
    data() {
      return {
        form: {
          weight: '',
          size: '',
          age: '',
    
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.weight = ''
        this.form.size = ''
        this.form.age = ''
     
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>