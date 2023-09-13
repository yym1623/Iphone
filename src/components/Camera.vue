
<script setup>
import { ref, defineAsyncComponent  } from 'vue';
import Camera from "simple-vue-camera";
import { useQuasar } from 'quasar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const Line = defineAsyncComponent(() => import('./Line.vue'))

const $q = useQuasar();

const swiperList = ref([ "타임랩스", "비디오", "사진", "파노라마", "인물사진"])

const image = ref()

const cameras = ref();

const imgList = ref(($q.sessionStorage.getItem('imgList') === null ? [] : $q.sessionStorage.getItem('imgList')))

const snapshot = async () => {
  const blob = await cameras.value.snapshot();
  const url = URL.createObjectURL(blob);
  imgList.value.unshift({ url })
  image.value.src = url

  $q.sessionStorage.set('imgList', imgList.value)

  // 찍는 효과로 쓰자 (전환 효과)
  const devices = await cameras.value?.devices(["videoinput"]);
  const device = devices[0];
  cameras.value?.changeCamera(device.deviceId);
}

</script>


<template>
  <div class="camera">
    <q-btn class="top__toggle" icon="expand_less"  />
    <camera :resolution="{ width: 400, height: 300 }" ref="cameras" />
    <swiper class="swiper" :slides-per-view="5"  simulateTouch>
      <swiper-slide v-for="(swiper, i) in swiperList" :key="swiper" @click="swiperFocus(i)" :class="{ swiperFocus : i === 2}" class="swiperItem">{{ swiper }}</swiper-slide>
    </swiper>
    <q-btn class="image__box"  />
    <img ref="image" alt="">
    <q-btn class="snapshot" @click="snapshot" />
    <q-btn class="turn__snapshot" icon="autorenew" />
    <Line />
  </div>
</template>

<style lang="scss" scoped>
.camera {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  .top__toggle {
    position: absolute;
    left: 0;
    right: 0;
    top: 10px;
    margin: auto;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #333;
    color: #fff;
  }
  .image__box {
    width: 50px;
    height: 50px;
    border-radius: 10%;
    background: #fff;
    position: absolute;
    bottom: 48px;
    left: 30px;
    margin: auto;
    &:active {
      border-radius: 50%;
      opacity: .7;
    }
  }
  .snapshot {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: auto;
    &:active {
      border-radius: 50%;
      opacity: .7;
    }
  }
  .turn__snapshot {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #333;
    position: absolute;
    bottom: 50px;
    right: 30px;
    color: #fff;
    margin: auto;
    &:active {
      border-radius: 50%;
      opacity: .7;
    }
  }
  .swiper {
    position: absolute;
    bottom: 150px;
    color: #fff;
    width: 100%;
    .swiperItem {
      text-align: center;
      cursor: pointer;
    }
    .swiperItem.swiperFocus {
      color: #ffa700
    }
  }
}
</style>