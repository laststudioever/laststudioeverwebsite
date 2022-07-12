<template>
  <div class="about">
    <div class="introduction">
      <p>We are Last Studio Ever.</p>
      <p>
        This site is a database of my procedural artwork.
      </p>
    </div>
    <div class="contact">
      <h1>CONTACT</h1>
      <p><a href="mailto:220usamaahmed@gmail.com">220usamaahmed@gmail.com</a></p>
      <p><a href="https://github.com/220usamaahmed">Github</a></p>
    </div>
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
    
    observer.observe(document.querySelector('.introduction'));
    observer.observe(document.querySelector('.contact'));
  },
}
</script>


<style scoped lang="scss">
.about {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 120px 0;

  // background-color: pink;

  .introduction {
    grid-column: 2 / 6;
    opacity: 0;
    transition: opacity 240ms ease-in;

    p {
      color: white;
      margin-bottom: 12px;
      line-height: 1.8rem;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }

  .contact {
    grid-column: 10 / -1;
    opacity: 0;
    transition: opacity 240ms ease-in;
    transition-delay: 240ms;

    h1 {
      color: white;
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 12px;
    }

    p {
      margin-bottom: 12px;
      letter-spacing: 1px;

      a {
        text-decoration: underline;
        color: white;
      }
    }
  }

  .show {
    opacity: 1;
  }
}

@media only screen and (max-width: 768px) {
  .about {
    padding: 60px 24px;

    .introduction {
      grid-column: 1 / -1;

    }

    .contact {
      display: none;
      margin-top: 60px;
      grid-column: 1 / -1;
    }
  }
}
</style>
