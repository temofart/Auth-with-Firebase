<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email">
    <input type="password" placeholder="Password">
    <button @click="login">Go</button>
    <p>or you can <router-link to="/sign-up">Create account</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function() {
    return {}
  },
  methods: {
    login: function() {
      this.$router.replace('hello')
    }
  }
}
</script>

<style lang="css" scoped>

</style>
