<template>
  <div class="main">
    <h1></h1>
    <login />
  </div>
</template>
<script>
import login from "@/components/login.vue";
export default {
  name: "home-comp",
  components: {
    login,
  },
};
</script>
<style>
.main {
  height: 65vh;
}
</style>
