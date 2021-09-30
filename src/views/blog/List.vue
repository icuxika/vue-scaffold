<template>
  <div class="container">
    <n-layout>
      <n-grid x-gap="12" y-gap="24" :cols="1">
        <n-gi v-for="item in blogList" :key="item.id">
          <n-card
              :title="item.title"
              :segmented="{footer: 'soft'}"
              footer-style="padding: 8px 0"
          >
            <template #header-extra>
              <a href="#">查看全文</a>
            </template>
            {{ item.briefIntroduction }}
            <template #footer>
              <n-time :time="new Date(item.date)" format="yyyy年MM月dd日 hh:mm:ss"/>
            </template>
          </n-card>
        </n-gi>
      </n-grid>
    </n-layout>
    <n-layout class="pagination">
      <n-pagination
          v-model:page="page"
          v-model:page-size="pageSize"
          :item-count="itemCount"
          :page-sizes="[10, 20, 30, 40]"
          show-size-picker
          :on-update:page="pageUpdate"
          :on-update:page-size="pageSizeUpdate"
      />
    </n-layout>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

interface Blog {
  id: number;
  title: string;
  briefIntroduction: string;
  date: string;
}

const blogList: Blog[] = [
  {
    id: 1,
    title: 'Spring Boot 参数校验',
    briefIntroduction: '参数校验',
    date: '1970-01-01 08:00:00'
  },
  {
    id: 2,
    title: 'Spring Boot 参数校验',
    briefIntroduction: '参数校验',
    date: '1970-01-01 08:00:00'
  },
  {
    id: 3,
    title: 'Spring Boot 参数校验',
    briefIntroduction: '参数校验',
    date: '1970-01-01 08:00:00'
  },
  {
    id: 4,
    title: 'Spring Boot 参数校验',
    briefIntroduction: '参数校验',
    date: '1970-01-01 08:00:00'
  },
  {
    id: 5,
    title: 'Spring Boot 参数校验',
    briefIntroduction: '参数校验',
    date: '1970-01-01 08:00:00'
  }
]

const itemCount = ref(24)
const page = ref(1)
const pageSize = ref(10)

const pageUpdate = (value: number) => {
  page.value = value
  fetchPage()
}

const pageSizeUpdate = (value: number) => {
  pageSize.value = value
  page.value = 1
  fetchPage()
}

const fetchPage = () => {
  console.log(page.value)
  console.log(pageSize.value)
}
</script>

<style lang="scss" scoped>
.n-layout {
  padding: 24px 24px;
}

.pagination {
  display: flex;
  justify-content: center;
}
</style>
