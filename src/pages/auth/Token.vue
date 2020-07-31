<template>
  <h1>Login</h1>
</template>

<script>
export default {
  name: 'Token',
  mounted() {
    this.$store.commit('login', this.$route.params.token)
    this.$http
      .get('/auth/info')
      .then(() => {
        this.$router.push("/songs")
      })
  }
}
</script>