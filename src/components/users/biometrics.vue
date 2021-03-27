<template>
  <div>
    <line-chart :styles="myStyles"/>
    <b-button @click="increase()">Show Biometrics</b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      height: 300
    }
  },
  methods: {
    increase () {
     this.height += 10
    }
  },
  computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}
</script>