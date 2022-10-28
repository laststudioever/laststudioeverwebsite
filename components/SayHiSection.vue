<template>
  <div class="say-hi">
    <div class="message">
      <p>We’d love to work with you!</p>
    </div>
    <form class="form" data-netlify=true id="sub-form" onsubmit="return false">
      <input type="email" placeholder="email@example.com" name="email" v-model="email" />
      <button @click="hello">SAY HI</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      email: ""
    }
  },
  methods: {
    hello(event) {
      const subForm = document.getElementById("sub-form")
      const formData = new FormData(subForm)

      console.log(new URLSearchParams(formData).toString())

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => console.error(error))
    }
  }
}


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
