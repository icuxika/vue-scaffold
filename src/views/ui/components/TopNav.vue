<template>
  <div class="topnav">
    <router-link to="/ui" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-ICUXIKA"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/ui/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import type {Ref} from 'vue'
import {inject} from "vue";

interface Props {
  toggleMenuButtonVisible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  toggleMenuButtonVisible: false
})
const menuVisible = inject<Ref<boolean>>('menuVisible')
const toggleMenu = () => {
  if (menuVisible !== undefined) {
    menuVisible.value = !menuVisible.value
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  color: #3f19a6;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: inline-block;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out($color: #000000, $amount: 0.9);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
