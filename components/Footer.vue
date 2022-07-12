<template>
  <footer class="footer">
    <div class="copyright">
      <p>© 2021 Colatz. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
</script>


<style scoped lang="scss">
.footer {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 24px;

  .copyright {
    grid-column: 2 / 6;
    transition: opacity 240ms ease-in;

    p {
      color: grey;
      margin-bottom: 12px;
      line-height: 1.8rem;
      font-size: 0.8rem;
    }
  }
}

@media only screen and (max-width: 768px) {
  .footer {
    padding: 0 24px;
    margin-bottom: 16px;

    .copyright {
      grid-column: 1 / -1;
    }
  }
}
</style>
