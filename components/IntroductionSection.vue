<template>
    <div class="introduction">
      <h2>
        <p>We are a multidisciplinary studio telling stories through film and visual arts.</p>
      </h2>
    </div>
</template>

<script>

</script>


<style scoped lang="scss">
  .introduction {
    padding: 64px 32px;

    h2 p {
      max-width: 480px;
      margin: 0 auto; 
      font-size: 2em;
      text-align: center;
      padding: 4px 0;
      font-weight: 400;
      line-height: 1.6em;
    }
  }

  @media only screen and (max-width: 768px) {
    .introduction h2 p {
      font-size: 1.2em;
      transition-delay: 0ms !important;
      opacity: 1 !important;
    }
  }
</style>
