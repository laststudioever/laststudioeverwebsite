<template>
    <div class="introduction">
      <h2>
        <p class="line-one">A creative studio telling stories that</p>
        <p class="line-two">amplify your brand’s voice.</p>
      </h2>
    </div>
</template>

<script>

</script>


<style scoped lang="scss">
  .introduction {
    padding: 64px 32px;

    h2 p {
      font-size: 2em;
      text-align: center;
      padding: 4px 0;
      font-weight: 400;
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
