<template>
  <div class="topnavAndBanner">
    <Topnav></Topnav>
    <div class="banner">
      <h1>YuYuanUI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/YuyuanW/yuyuan-ui">GitHub</a>
        <router-link to="/doc">Start</router-link>
      </p>
    </div>
  </div>
  <div class="yuyuan-icon">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-typescript-def"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-lighting"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import { inject, Ref } from 'vue';
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
$green: rgb(118 167 164);
$border-radius: 4px;
$color: rgb(98 147 144);
.topnavAndBanner {
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  color: $color;
  /* border:1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 0;

  /* background: lightgreen; */

  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      $h: 28px;
      border-radius: $border-radius;
      padding: 8px 24px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

.yuyuan-icon {
  margin: 64px auto;
  width: 400px;
  @media (max-width: 400px) {
    width: auto;
  }
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
