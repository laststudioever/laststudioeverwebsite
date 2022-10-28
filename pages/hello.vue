<template>
  <div class="hello">
    <img src="/waving-hand_1f44b.png" alt="">
    <h2>Hello!</h2>
    <p>Thankyou for reaching out. We will get back to you very soon!</p>
  </div>
</template>

<style>

</style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,900;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 12px;
  font-family: "Halvetica", "Raleway", sans-serif;
  letter-spacing: 1px;
}

.hello {
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 128px;
    height: 128px;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 6.4em;
    margin-bottom: 16px;
    font-style: italic;
  }

  p {
    font-size: 1.6em;
  }
}
</style>