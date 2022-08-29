<template>
  <div>
    导航栏 | 
    <router-link to="/">Home</router-link> | 
    <router-link to="/doc">Doc</router-link> | 
    <router-link to="/test">Test</router-link>
  </div>
  <hr/>
  <router-view />
</template>

<script>
import YuYuan from './components/YuYuan.vue'

export default {
  name: 'App',
  components: {
    YuYuan
  }
}
</script>
