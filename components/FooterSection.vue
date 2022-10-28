<template>
  <footer>
      <div class="banner">
        <img src="/logo.svg" />
      </div>
      <div class="socials">
        <a href="#">INSTAGRAM</a>
        <a href="#">BEEHANCE</a>
        <a href="#">LINKEDIN</a>
        <a href="#">ARTSTATION</a>
      </div>
  </footer>
</template>

<script>

</script>


<style scoped lang="scss">
  footer {
    padding: 64px 0;
  }
  
  .banner {
    width: 100%;
    overflow-x: hidden;

    img {
      width: 120%;
      margin: 0 -10%;
    }
  }

  .socials {
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 128px;

    a {
      text-decoration: none;
      color: black;
      font-weight: 900;
      font-style: italic;
      transition: color 160ms ease-in;
    }

    a:hover {
      color: #EC2127;
    }
  }

  @media only screen and (min-width: 1440px) {
    .banner img {
      width: 100%;
      margin: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .socials {
      padding: 0 32px;

      a {
        font-weight: 400;
        font-size: 0.8em;
      }
    }
  }
</style>
