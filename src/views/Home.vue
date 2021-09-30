<template>
  <n-layout-header bordered>
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <ul class="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/ui">UI</router-link>
      </li>
      <li>
        <router-link to="/blog">Blog</router-link>
      </li>
    </ul>
    <div class="extra">
      <a class="search" href="#">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
      </a>
      <a class="sign-in" href="#">Sign in</a>
      <a class="sign-up" href="#">Sign up</a>
    </div>
  </n-layout-header>
  <n-layout-content content-style="padding: 24px;">
    <n-button>naive-ui</n-button>
    <n-card>
      <n-space>
        <n-button @click="store.dispatch('index/setEnableDarkTheme', true)">深色</n-button>
        <n-button @click="store.dispatch('index/setEnableDarkTheme', false)">浅色</n-button>
      </n-space>
    </n-card>
  </n-layout-content>
  <n-layout-footer bordered>成府路</n-layout-footer>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "../store"
import {useLoadingBar} from "naive-ui"

const store = useStore()
const prop = computed(() => store.state.blog.prop)
const setProp = () => {
  store.dispatch('blog/setProp', true)
}

const loadingBar = useLoadingBar();
loadingBar.start();
setTimeout(() => {
  loadingBar.finish();
}, 1000)
</script>

<style lang="scss" scoped>
.n-layout-header {
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 16px;
  font-weight: bold;

  & .logo {
    display: flex;

    & img {
      margin-left: 16px;
      width: 32px;
    }
  }

  & .menu {
    display: flex;

    & li {
      margin-left: 16px;
    }
  }

  & .extra {
    margin-left: auto;

    & a {
      margin-right: 16px;
    }

    & .sign-in {
      background-color: #ea7d9f;
      padding: 8px 16px;
      border-radius: 8px;
      color: white;
    }

    & .sign-up {
      background-color: #ea7d9f;
      padding: 8px 16px;
      border-radius: 8px;
      color: white;
    }

  }
}
</style>
