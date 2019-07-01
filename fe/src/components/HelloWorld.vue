<template>
  <div>
    {{ message }}
    <v-btn @click="setMessage()">button</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello world !'
    }
  },
  methods: {
    setMessage() {
      this.message = 'Reactive Vue !'
    }
  }
}
</script>

