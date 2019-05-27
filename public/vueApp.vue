import Vue from 'vue';
<template>
  <section id="SmallBusiness">
    <feed>
      <slot />
    </feed>
  </section>
</template>
<script>
const url = "https://data.cityofnewyork.us/resource/ci93-uc8s.json";

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
</script>