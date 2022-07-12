<template>
  <div class="project-display">
    <div class="content-holder"><nuxt-content :document="project" /></div>
    <div class="meta-holder"><ProjectMeta
      v-bind:title="project.title"
      v-bind:number="number"
      v-bind:description="project.description"
      v-bind:tools_used="project.tools_used" /></div>
  </div>
</template>

<script>
export default {
  props: ["project", "number"],
  mounted: function () {
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('media-enter');
          observer.unobserve(entry.target);
        }
      });
    });

    let project_media = document.querySelectorAll('.content-holder img, .content-holder video');

    project_media.forEach(media => {
      observer.observe(media);
    });
  },
};
</script>

<style scoped lang="scss">
.project-display {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 60px;

  ::v-deep .content-holder {
    grid-column: 1 / 9;
    overflow-x: clip;

    img {
      width: 100%;
      margin-bottom: 120px;
      opacity: 0;
      transform: scale(1.05) translateY(60px);
      transition: transform 1200ms ease-in-out, opacity 600ms ease-in-out;
    }
    
    video {
      width: 100%;
      margin-bottom: 120px;
      opacity: 0;
      transform: scale(1.05) translateY(60px);
      transition: transform 1200ms ease-in-out, opacity 600ms ease-in-out;
    }

    .media-enter {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .meta-holder {
    grid-column: 10 / -2;
    margin-top: 60px;
    position: sticky;
    top: 60px;
    max-height: 100vh;
  }
}

@media only screen and (max-width: 768px) {
  .project-display {
    ::v-deep .content-holder {
      grid-row: 2;
      grid-column: 1 / -1;
      padding: 0;

      img {
        width: 100%;
        margin-bottom: 24px;
      }

      video {
        width: 100%;
        margin-bottom: 24px;
      }
    }

    .meta-holder {
      grid-row: 1;
      grid-column: 1 / -1;
      padding: 0 24px;
      margin-top: 0;
      margin-bottom: 30px;
      position: inherit;
    }
  }
}
</style>