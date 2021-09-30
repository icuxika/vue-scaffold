<template>
  <n-config-provider :theme="theme" :locale="locale" :date-locale="dateLocale">
    <n-dialog-provider>
      <n-message-provider>
        <router-view/>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "../store";

const store = useStore();
const theme = computed(() => store.state.index.naiveUITheme);
const locale = computed(() => store.state.index.naiveUILocale);
const dateLocale = computed(() => store.state.index.naiveUIDateLocale);
</script>

<style scoped>

</style>
