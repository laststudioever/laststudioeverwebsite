<template>
  <div class="body-wrapper">
    <AboutSection />

    <div v-for="(project, index) in projects" v-bind:key="index">
      <div><ProjectDisplay :project="project" :number="index" /></div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const projects = await $content().sortBy('order').fetch();

    return { projects };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 12px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 1px;
}

body {
  background-color: black;
}

.body-wrapper {
  max-width: 1280px;
  margin: 0 auto;
}

</style>