<template>
    <div class="introduction">
      <h2>
        <p class="line-one">A creative studio telling stories that</p>
        <p class="line-two">amplify your brand’s voice.</p>
      </h2>
    </div>
</template>

<script>
export default {
  mounted: function() {
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(document.querySelector('.line-one'));
    observer.observe(document.querySelector('.line-two'));
  },
}
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

  .line-one {
    opacity: 0;
    transition: opacity 320ms ease-in;
    transition-delay: 320ms;
  }
  .line-two {
    opacity: 0;
    transition: opacity 320ms ease-in;
    transition-delay: 640ms;
  }

  .show {
    opacity: 1 !important;
  }

  @media only screen and (max-width: 768px) {
    .introduction h2 p {
      font-size: 1.2em;
      transition-delay: 0ms !important;
      opacity: 1 !important;
    }
  }
</style>
