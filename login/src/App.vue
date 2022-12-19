<template>
  <div>
    <Suspense>
      <template #default>
    <RouterView />
  </template>
  <template #fallback>
    loding Data
  </template>
  </Suspense>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
   
    };
  },
  components: {
    
  },
  methods: {
    
  },
};
</script>
<style>
</style>
