<template>
  <div class="body-wrapper">

    <div class="hero">

      <video autoplay loop muted plays-inline class="drifting-car-video">
        <source src="/driftingcar.mp4" type="video/mp4">
      </video>
      
      <img src="/logo-main.png" class="logo-main" alt="logo"/>

    </div>

  </div>
</template>

<script>
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
  // max-width: 1280px;
  margin: 0 auto;
}

.hero {
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: rgba(0, 0, 0, 0.5);
  background: radial-gradient(rgba(0, 0, 0, 0.5),black);
}

.logo-main {
  width: 50%;
}

.drifting-car-video {
  width: inherit;
  height: inherit;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  object-fit: cover;
}

</style>