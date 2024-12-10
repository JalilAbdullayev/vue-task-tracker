<script>
export default {
  name: "Footer"
}
</script>

<template>
  <footer>
    <p>
      Copyright &copy; 2024
    </p>
    <router-link to="/about">
      About
    </router-link>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 30px;
  text-align: center;
}

a {
  color: #333;
}
</style>