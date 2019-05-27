<template>
<div class="businesses">
    <v-container class="container" id="app" grid-list-sm>
      <h3 class="text-center">Black Owned Businesses</h3>
        <v-layout>
      <v-flex class="columns medium-4" v-for="(result, index) in results" :key="index">
        <v-card class="card">
          <div class="card-divider">
            <p> {{ result.vendor_formal_name }}</p>
            <h4>{{result.website}}</h4>
          </div>
          <v-card class="card-section">
            <p> {{ result.business_description }}</p>
          </v-card>
          <v-card class="card-divider">
            <p>Read more at: <a :href="result.website" target="_blank"> {{ result.website }}</a> or call {{ result.telephone}}</p>
          </v-card>
        </v-card>
        <br>
        <br>
      </v-flex>
        </v-layout>
    </v-container>
  
  <footer class = "footer2">
                Copyright&copy; by BlkBiz inc. All rights reserved.
            </footer>
</div>
</template>
<style>

body{
background-color: black;
}

.card{
border: 5px solid red;
border-collapse: separate;
border-spacing: 20px;
}


</style>
<script>
export default {
  data() {
    return {
      results: []
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://data.cityofnewyork.us/resource/ci93-uc8s.json').then((response) => {
                    console.log(response);
                    this.results = response.data
    })
  }
}
</script>