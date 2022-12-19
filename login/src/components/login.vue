<template>
  <form @submit.prevent="handleSubmit">
    <div class="main" style="margin-left: 25%">
      <label class="lbl1"  for="userid" style="margin-left: 30%">Email</label>
      <input type="email" class="form-control" name="email" placeholder="email" v-model="email" />
      <br />
      <label class="lbl2" for="password">Password</label>
      <input type="password" class="form-control"  name="password" placeholder="password" v-model="password" />
      <button type="button" class="btn btn-primary" v-for="btn1 in buttons" :key="btn1.id"
       :disabled="btn1.disabled" @click="addUser(), toggleLoaders(), buttonClicked( btn1 )">
        <span style="font-size: 1.5vw;">Login</span>
      </button>
      <div v-if="isLoading">
        <loader />
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";
import setAuthHeader from "@/utils/setAuthHeader";
import loader from "@/components/loader.vue";

export default {
  name: "post_api",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      buttons:[{id: 1, text: 'Button 1', disabled: false }],
    };
  },
  components: {
    loader,
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
          this.$router.push({ name: "te-st" });
        });
    },

    toggleLoaders() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 6000);
    },

    buttonClicked (buttons) {
      buttons.disabled = true;
    },
  },
};
</script>
<style>
body {
  margin: 8%;
  background-image: url("@/assets/2314983.webp");
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  color: #fff;
}
.main {
  border-radius: 20px;
  position: relative;
  margin-left: 30%;
  width: 40%;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
}

label {
  position: relative;
  margin-top: 20px;
  margin-left: 10%;
  color: #fff;
  font-size: 3vw;
  justify-content: center;
  font-weight: bold;
}

.btn {
  width: 50%;
  height: 50px;
  margin-top: 20px;
  margin-left: 40%;
}
.form-control{
  width: 140%;
}
</style>
