<template>
  <form @submit.prevent="handleSubmit">
    <div class="main" style="margin-left: 30%">
      <label for="userid" style="margin-left: 30%">Email</label>
      <div class="eml">
        <input type="text" name="email" placeholder="email" v-model="email" />
      </div>
      <br />
      <div class="eml">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          v-model="password"
        />
      </div>
      <div>
        <button class="btn" @click="addUser()">Login</button>
        <!-- <button class="btn1" @click="getPost()">Get Data</button> -->
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";
import setAuthHeader from "@/utils/setAuthHeader";

export default {
  name: "post_api",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    addUser() {
      // let result =
      axios
        .post("https://dev.icc-health.com/dev/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("User-Data", response.data.token);
          setAuthHeader(response.data.token);
          this.$router .push({ name: "te-st"}) 
          //.get("https://dev.icc-health.com/dev/patient?search=crystalo@icc-health.com&orderBy=DESC&orderField=lastMessageSent&filter=WNL&page=2&isActive=1&fromDate=1665990335&toDate=1666854335")
           // .then((response) => console.log(response.data))
           // .catch((err) => console.log(err.response));
        });
      //   .catch((err) => console.log(err.response));
      // console.warn("result", result);
    },
    // getPost() {
    //   axios
    //     .get(
    //         "https://dev.icc-health.com/dev/login")
    //     .then((response) => console.log(response.data))
    //     .catch((err) => console.log(err.response));
    // },
  },

  // async handleSubmit(){
  //   let response = await axios.post("https://dev.icc-health.com/dev/login",{
  //       email: this.email,
  //       password: this.password,
  //   });
  //   console.log(response);

  // }
};
</script>
<style>
h1 {
  color: #fff;
}
.eml {
  margin-left: 20%;
  width: 50%;
}
.main {
  margin-left: 20%;
  width: 50%;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
}
.in {
  width: 40%;
}
#chk {
  display: none;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
label {
  margin-left: 20%;
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
}

.btn {
  width: 50%;
  height: 50px;
  margin-left: 20%;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
}
.btn1 {
  width: 50%;
  margin-top: 10px;
  height: 50px;
  margin-left: 20%;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
}

.login {
  height: 460px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: 0.8s ease-in-out;
}
.login label {
  color: #573b8a;
  transform: scale(0.6);
}

#chk:checked ~ .login {
  transform: translateY(-500px);
}
#chk:checked ~ .login label {
  transform: scale(1);
}
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>
