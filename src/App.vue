<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/params/65/Title:jspang website is very good">params</router-link> |
    <router-link to="/">goHome</router-link> |

    <router-link to="/hi1">Hi1</router-link> |
    <router-link to="/jspang">jspang</router-link> |
    <router-link to="/home1">home1</router-link> |
    <router-link to="/3423">我是瞎写的</router-link> |
    
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
