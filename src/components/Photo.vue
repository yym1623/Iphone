<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useQuasar } from 'quasar'

const Line = defineAsyncComponent(() => import('./Line.vue')); 

const $q = useQuasar();

const imgList = ref($q.sessionStorage.getItem('imgList'));
console.log(imgList.value[0].url.slice(5))
</script>

<template>
  <div class="photo">
    <div class="q-ma-md">
      <div>
        <div class="text-h3">사진</div>
      </div>
      <div class="row justify-between">
        <div>나의 앨범</div>
        <div>전체 보기</div>
      </div>
      <div>
        <img src="http://127.0.0.1:5173/f3bca68f-ac24-4d6b-82c3-6d36da0dff97" alt="">
        <!-- <q-img v-for="img in imgList" :key="img" :src="img" /> -->
      </div>
      <div></div>
      <div class="fixed-bottom row justify-center">
        <div class="row justify-between q-pa-sm">
          <q-btn icon="" label="보관함" />
          <q-btn icon="" label="For You" />
          <q-btn icon="" label="앨범" />
          <q-btn icon="" label="검색" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <Line />
  </div>
</template>

<style lang="scss" scoped>
.photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: #fff;

}
</style>