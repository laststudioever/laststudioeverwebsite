<template>
    <div class="gallery">
      <div class="item">
        <!-- <img src="/Agha/28-6-2020 B R06.png" alt="Frame 1"> -->
        <video autoplay muted loop>
          <source src="/Agha/website_cut.webm" type="video/webm">
        </video>
      </div>
      <div class="item">
        <img src="/Agha/WoodR02.png" alt="Frame 1" />
        <!-- <img src="/Agha/Chunking R12.png" alt="Frame 2"> -->
      </div>
      <div class="item">
        <img src="/Agha/TennisBall.png" alt="Frame 2" />
        
      </div>
    </div>
</template>

<script>

</script>


<style scoped lang="scss">
  .gallery {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 16px;
    row-gap: 16px;

    .item {
      background-color: lightgray;
      height: 512px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    // TODO: Better implementation for transition-delays
    .item:nth-child(3n+1) {
      grid-column: 1 / -1;
      transition-delay: 960ms;
    }

    .item:nth-child(3n+2) {
      grid-column: 1 / 8;
      transition-delay: 1280ms;
    }

    .item:nth-child(3n+3) {
      grid-column: 8 / -1;
      transition-delay: 1600ms;
    }
  }

  .line-one {
    opacity: 0;
  }
  .line-two {
    opacity: 0;
    transition: opacity 320ms ease-in;
    transition-delay: 640ms;
    
  }

  @media only screen and (max-width: 960px) {
    .item {
      grid-column: 1 / -1 !important;
      height: 100vw !important;
      transition-delay: 0ms !important;
      opacity: 1 !important;
    }
  }
</style>
