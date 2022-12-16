<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="container" style="width: 40%; background-color: aquamarine">
        <h1 class="lble">Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label class="lble" for="email"><b>Email</b></label>
        <input
          type="text"
          v-model="email"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />

        <label class="lble" for="psw"><b>Password</b></label>
        <input
          type="password"
          v-model="Password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        />

        <label class="lble" for="psw-repeat"><b>Repeat Password</b></label>
        <input
          type="password"
          v-model="Repeat_Password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          required
        />
        <hr />

        <p>
          By creating an account you agree to our
          <a href="#">Terms & Privacy</a>.
        </p>
        <button type="submit" class="registerbtn">Register</button>
      </div>

      <div class="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "regis-ter",
  data() {
    return {
      email: "",
      Password: "",
      Repeat_Password: "",
    };
  },
  methods: {

    // ********Old Mthod********

    // handleSubmit() {
    //   let data = {
    //     email: this.email,
    //     Password: this.Password,
    //     Repeat_Password: this.Repeat_Password,
    //   };
    //   axios.post("https://jsonplaceholder.typicode.com/posts",data)
    //   .then(
    //     res =>{
    //         console.log(res)
    //     }
    //   )
    //   .catch(
    //     err =>{
    //         console.log(err)
    //     }
    //   )
    // },

    // ****** New Method *******

    async handleSubmit(){
        let response = await axios.post("https://jsonplaceholder.typicode.com/posts",{
         email: this.email,
         Password: this.Password,
         Repeat_Password: this.Repeat_Password,  
        });
        console.log(response);
        if (response) {
            this.$route.push("http://localhost:8080/login")
        }
       
    }
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

/* Add padding to containers */
.lble {
  color: black;
  margin-left: 10px;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  /* border: 1px solid #f1f1f1; */
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #04aa6d;
  /* color: white; */
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  /* background-color: #f1f1f1; */
  text-align: center;
}
</style>
