<template>
  <div>
    <h1>User-Data</h1>
    <div class="lodr" v-if="isLoading">
        <loader />
      </div>
    <!-- <div> 
        <h1>{{ name }}</h1>
    </div> -->

    <!-- <h2 style="color: black">
          {{ post.data }}
        </h2> -->
    <table class="table">
      <table
        style="width: 10%; height: auto; align-items: center; margin-left: 20%"
      >
        <tr>
          <th>email</th>
          <th>firstName</th>
          <th>genderName</th>
          <th>lastName</th>
          <th>address</th>
          <th>country</th>
          <th>fullName</th>
        </tr>
        <tr v-for="item in post.data" v-bind:key="item.id">
          <td>{{ item.email }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.genderName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.fullName }}</td>
        </tr>
      </table>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "tes-t",
   components: {
    
   },
  data() {
    return {
      name: "h-lo",
      post: [],
      isLoading: true,
    };
  },
  methods: {
    getdata() {
      axios.get("https://dev.icc-health.com/dev/patient").then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
    },
    toggleLoaders() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
  mounted() {
    let vr = this.getdata();
    console.log(vr);
    this. toggleLoaders();
  },
};
</script>
<style>
th {
  padding: 10px;
  border: 1px solid black;
}

td {
  padding: 10px;
  border: 1px solid black;
  text-align: left;
}

tr:nth-child(even) {
  background-color: white;
}

tr:nth-child(odd) {
  background-color: #eee;
}
h1{
  text-align: center;
}

   .lodr:after {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    left:40%;
    bottom: 40%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: rgb(95, 237, 73) transparent rgb(95, 237, 73)transparent;
    animation: loader 1.5s linear infinite;
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
