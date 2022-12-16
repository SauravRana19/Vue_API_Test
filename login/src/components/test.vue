<template>
  <div>
    <h1>User-Data</h1>
    <!-- <div> 
        <h1>{{ name }}</h1>
    </div> -->

    <!-- <h2 style="color: black">
          {{ post.data }}
        </h2> -->
    <div class="tbl">
      <table style="border: 1px solid black">
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
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "tes-t",
  //   components: {},
  data() {
    return {
      name: "h-lo",
      post: [],
    };
  },
  methods: {
    getdata() {
      axios.get("https://dev.icc-health.com/dev/patient").then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
    },
  },
  mounted() {
    let vr = this.getdata();
    console.log(vr);
  },
};
</script>
<style>
td {
  border: 2px solid rgb(255, 0, 149);
  width: 20px;
}
.tbl {
  margin-left: 20%;
}
th{
  text-align: left;
  text-transform: uppercase;
  font-size: large;
  padding: 10px;
  border: 2px solid red;
}
</style>
