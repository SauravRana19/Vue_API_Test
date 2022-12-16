<template>
  <div class="main">
    <h1>User-Data</h1>
    <!-- <div v-for="items in post" :key="items">
      <h3>
        {{ items.data}}
        
        
      </h3> -->
 

    <h2 style="color: aliceblue;" >
        {{post.data.id}}
    </h2>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "us-ers",
  data() {
    return{
        post:[]
    };   
  },
  methods: {
    getPost() {
      axios
        .get("https://dev.icc-health.com/dev/patient")
        .then((response) => {
          console.log(response.data);
          this.post = response.data;
        });
    },
  },
  mounted(){
    let vr = this.getPost();
    console.log(vr)
  }
};
</script>
<style>
.main {
  height: 65vh;
}
</style>
