<template>
  <div>
    导航栏 | <router-link to="/">YuYuan1</router-link> | <router-link to="/2">YuYuan2</router-link>
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
