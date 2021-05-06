<template>
<div>

 <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs lazy>

          
     
        <b-nav-item to="/fitnessbook/manageUsers" exact exact-active-class="active">Benutzerverwaltung</b-nav-item>
        <b-nav-item to="/fitnessbook/manageTrainingUnits" exact exact-active-class="active">Trainings Einheiten</b-nav-item>
        
      </b-nav>
    </b-card-header>

    <b-card-body>
     
      <router-view></router-view>

    </b-card-body>
  </b-card>
</div>
   
</template>


<style scoped>

</style>
