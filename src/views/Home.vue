<template>
  <div class="home">
    <div @click="setfoo">
        点我啊
    </div>
    <div @click="login"></div>
    <router-link to="/about">About</router-link>

<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  methods: {
    setfoo () {
      this.$store.dispatch('test')
    },
    login () {
      this.$store.dispatch('login')
    }
  }
}
</script>
<style lang="scss" scoped>
    .home{
        div{
            width: 60px;
            height: 40px;
            background-color: #42b983;
        }
    }

</style>
