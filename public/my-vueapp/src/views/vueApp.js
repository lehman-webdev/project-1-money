import Vue from 'vue';
<template>
  <section id="SmallBusiness">
  </section>
</template>

const url = "https://data.cityofnewyork.us/resource/ci93-uc8s.json";
//<script>
const vm = new Vue({
        el: '#app',
        data: {
          results: []
        },
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data
          })
        }
      });
//</script>