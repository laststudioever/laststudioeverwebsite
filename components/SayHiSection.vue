<template>
  <div class="say-hi">
    <div class="message">
      <p>We’d love to work with you!</p>
    </div>
    <form 
      name="subsribers"
      class="form"
      method="post"
      action="/hello"
      netlify
      >
      <input type="email" placeholder="email@example.com" name="email"/>
      <button type="submit">SAY HI</button>
    </form>
  </div>
</template>

<script>

</script>


<style scoped lang="scss">
  .say-hi {
    padding: 64px 16px;
  }

  .message {
    width: 100%;
    max-width: 512px;
    margin: 0 auto;
    margin-bottom: 32px;
    line-height: 1.6em;
    text-align: center;
    
    p {
      margin-bottom: 16px;
      font-size: 1.2em;
    }
  }

  .form {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    
    input {
      width: 100%;
      padding: 16px;
      outline: none;
      border: none;
      background-color: transparent;
      border-bottom: 2px solid #999;
      text-align: center;
      margin-bottom: 16px;
    }

    input:focus {
      border-bottom-color: black;
    }

    button {
      width: 100%;
      padding: 16px;
      outline: none;
      border: none;
      background-color: #EC2127;
      color: white;
      font-weight: 900;
      font-size: 1.6em;
      cursor: pointer;
    }

    button:hover {
      background-color: #c81c22;
    }

    button:active {
      background-color: #93171c;
    }
  }
</style>
