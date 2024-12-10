<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String
  },
  methods: {
    onClick() {
      console.log('clicked');
    }
  }
}
</script>

<template>
  <button @click="onClick()" :style="{backgroundColor: color}">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  display: inline-block;
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }
}


.btn-block {
  display: block;
  width: 100%;
}
</style>