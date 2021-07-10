<template>
  <div class="container">
    <TopNav :toggleMenuButtonVisible="false" />
    <div class="banner">
      <h1>Vue3 UI</h1>
      <h2>Vue3 UI 框架</h2>
      <p class="actions">
        <a href="#">Github</a>
        <router-link to="/ui/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript书写</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import TopNav from "./components/TopNav.vue";
</script>

<style lang="scss" scoped>
.container {
  background: linear-gradient(
    90deg,
    rgba(146, 143, 194, 1) 0%,
    rgba(150, 240, 228, 1) 35%,
    rgba(3, 178, 200, 1) 76%,
    rgba(3, 182, 207, 1) 79%,
    rgba(2, 189, 218, 1) 84%,
    rgba(1, 198, 232, 0.7189250700280112) 94%,
    rgba(0, 212, 255, 1) 100%
  );
  // 圆弧
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #3f19a6;

  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #e95939;
      color: white;
      display: inline-block;
      border-radius: 4px;
      padding: 8px 24px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;

    > ul {
      > li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
    j > ul {
      > li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas: "icon title" "icon text";
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 24px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
</style>
