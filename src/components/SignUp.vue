<template>
  <div class="signUp">
    <h3>New Account</h3>
    <input type="text" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Create</button>
    <p>If you already have an account, please <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data: function() {
    return {}
  },
  methods: {}
}
</script>

<style lang="css" scoped>

</style>
