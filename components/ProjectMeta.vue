<template>
  <div class="meta" :id="id">
    <h1>{{ title }}</h1>
    <div class="project-number">
      <h2>PROJECT {{ project_number }}</h2>
      <div class="bar"></div>
    </div>
    <p class="description">{{ description }}</p>
    <div class="tools-used">
      <h2>TOOLS USED</h2>
      <p>{{ tools_used }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "number", "description", "tools_used"],
  data: function () {
    return {
      id: `meta-${this.number}`,
      project_number: this.padStart(this.number + 1),
    };
  },
  mounted: function () {
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("show-meta");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(document.querySelector(`#${this.id}`));
  },
  methods: {
    padStart: function (number) {
      let length = 0;
      let n = Math.abs(number);
      let absoluteNumber = n;
      do {
        n /= 10;
        length++;
      } while (n >= 1);
      const prefix = Array(Math.max(3 - length + 1, 0)).join(0);
      return number < 0 ? `-${prefix}${absoluteNumber}` : prefix + number;
    },
  },
};
</script>


<style scoped lang="scss">
.meta {
  h1 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 6px;
    color: white;
    transform: translateX(-1px);
    letter-spacing: 0.2em;
    opacity: 0;
    transition: letter-spacing 1200ms ease-in-out, opacity 240ms ease-in;
  }

  .project-number {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
    color: white;
    opacity: 0;
    transition: opacity 240ms ease-in;
    transition-delay: 120ms;

    h2 {
      font-size: 1rem;
      font-weight: 400;
      margin-right: 15px;
      color: white;
    }

    .bar {
      background-color: white;
      height: 2px;
      flex: 0;
      transition: opacity 240ms ease-in, flex 1200ms ease-in-out;
    }
  }

  .description {
    line-height: 1.8rem;
    text-align: justify;
    white-space: pre-line;
    margin-bottom: 60px;
    color: white;
    opacity: 0;
    transition: opacity 240ms ease-in;
    transition-delay: 240ms;
  }

  .tools-used {
    h2 {
      font-size: 1rem;
      font-weight: 400;
      margin-right: 15px;
      color: white;
      margin-bottom: 12px;
      opacity: 0;
      transition: opacity 240ms ease-in;
      transition-delay: 360ms;
    }

    p {
      line-height: 1.8rem;
      opacity: 0;
      color: white;
      transition: opacity 240ms ease-in;
      transition-delay: 480ms;
    }
  }
}

.show-meta {
  h1 {
    opacity: 1;
    letter-spacing: 0.06em;
  }

  .project-number {
    opacity: 1;

    .bar {
      flex: 1;
    }
  }

  .description {
    opacity: 1;
  }

  .tools-used {
    h2 {
      opacity: 1;
    }

    p {
      opacity: 1;
    }
  }
}
</style>