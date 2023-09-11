<script setup>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar();

const imgList = [
  { imgSrc: ('/assets/kakao.png') },
  { imgSrc: ('/assets/appstore.png') },
]

const bannerImgList = [
  { imgSrc: ('/assets/call.png') },
  { imgSrc: ('/assets/message.png') },
  { imgSrc: ('/assets/kamera.png') },
  { imgSrc: ('/assets/setting.png') },
]


let today = new Date()
let hours = today.getHours();
let minutes = today.getMinutes();

// 삼항이나 계산 같은거 할때 ()로 구분좌가 없으면 어디까지가 계산인지 잘 안먹혀서 의도하지 않는게 나올때가 있다 ()로 구분해 주기
let todayDate = ref((hours.toString().length === 1 ? '0' + hours : hours) + ':' + (minutes.toString().length === 1 ? '0' + minutes : minutes));

setInterval(() => {
  todayDate.value
}, 60000);


// const mode = ref(false);

// watch(mode, () => {
//   if($q.dark.isActive === false) {
//     $q.dark.set(true)
//   } else {
//     $q.dark.set(false)
//   }
// })
</script>
<template>
  <!-- mobile -->
  <div class="container">
    <div class="bg">
      <!-- top -->
      <div style="height: 25px" class="header row justify-around items-center">
        <!-- <div> -->
          <div class="date q-ml-lg">{{ todayDate }}</div>
        <!-- </div> -->
        <div class="row items-center camera">
          <div></div>
          <div></div>
          <div class="mike"></div>
          <div></div>
          <div></div>
        </div>
        <div class="q-mr-md">
          <q-btn dense flat icon="signal_cellular_alt" />
          <q-btn dense flat icon="5g" />
          <q-btn dense flat icon="battery_5_bar" />
        </div>
      </div>
      <!-- main -->
      <div class="q-pa-md">
        <div class="q-ml-md q-mt-md grid" >
          <q-img
            v-for="img in imgList" :key="img"
            :src="img.imgSrc"
            spinner-color="white"
          />
        </div>
      </div>
      <!-- bottom -->
      <div class="q-pa-md absolute-bottom bottom">
        <div class="banner shadow-5 q-pa-md row justify-between">
          <q-img :src="img.imgSrc" v-for="img in bannerImgList" :key="img"/>
        </div>
      </div>
    </div>

    <!-- <q-btn round color="white" />
    <q-btn round color="black" /> -->
  </div>
</template>


<style lang="scss" scoped>
$light-color: #fff;
$dark-color: #1d0c0c;
// .body--light {
  
// }

// .body--dark {

// }
.container {
  position: relative;
  width: 400px;
  margin: auto;
  .bg {
    height: 100vh;
    background-image: url('/assets/iphone_default_bg.webp');
    background-position: center;
    background-size: 100%;
  }

  .header {
    .date {
      font-weight: bold;
      font-size: 18px;
    }
    .camera {
      width: 180px;
      height: 30px;
      background: #000;
      border-radius: 0 0 20px 20px;
      margin-left: 20px;
    }
  }
  
  .grid {
    display :grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    div {
      border-radius: 10px;
      width: 64px;
      height: 64px;
      
    }
  }

  .bottom {
    .banner {
      border-radius: 10px;
      div {
        border-radius: 10px;
        width: 64px;
        height: 64px;
      }
    }
  }
}

</style>