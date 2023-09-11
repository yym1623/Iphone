<script setup>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' // 색깔은 사용안하고 있다고 해도(setup script에선 따로 컴포넌트 지정안한다) 아래에서 사용하고 있다
// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'

const $q = useQuasar();

const modules = ref([ ])

const imgList = [
  { imgSrc: ('/assets/call.png') },
  { imgSrc: ('/assets/message.png') },
  { imgSrc: ('/assets/kamera.png') },
  { imgSrc: ('/assets/setting.png') },
]

let today = new Date(); 
// let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
let week = ['일', '월', '화', '수', '목', '금', '토'];
let dayOfWeek = week[new Date().getDay()];
let hours = today.getHours();
let minutes = today.getMinutes();

// 삼항이나 계산 같은거 할때 ()로 구분좌가 없으면 어디까지가 계산인지 잘 안먹혀서 의도하지 않는게 나올때가 있다 ()로 구분해 주기
let todayYear = ref((month.toString().length === 1 ? '0' + month : month) + '월' + (day.toString().length === 1 ? '0' + day : day) + '일' + dayOfWeek + '요일'  );
let todayDate = ref((hours.toString().length === 1 ? '0' + hours : hours) + ':' + (minutes.toString().length === 1 ? '0' + minutes : minutes));

setInterval(() => {
  todayDate.value
  todayYear.value
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
  <div class="container">
    <div class="bg">
      <!-- top -->
      <div style="height: 25px" class="header row justify-around">
        <!-- <div> -->
          <div class="date q-ml-lg">{{ todayDate }}</div>
        <!-- </div> -->
        <div class="camera">
          <div></div>
          <div></div>
          <div class="mike"></div>
          <div></div>
          <div></div>
        </div>
        <div class="items q-mr-md">
          <q-btn dense flat icon="signal_cellular_alt" />
          <q-btn dense flat icon="5g" />
          <q-btn dense flat icon="battery_5_bar" />
        </div>
      </div>
      <!-- main -->
      <div class="q-pa-md">
        <div class="q-ml-md q-mt-md grid" >
          <q-img src="/assets/kakao.png" />
        </div>
      </div>
      <!-- bottom -->
      <div class="q-pa-md absolute-bottom bottom">
        <div class="banner shadow-5 q-pa-md row justify-between">
          <q-img :src="img.imgSrc" v-for="img in imgList" :key="img"/>
        </div>
      </div>
    </div>
    <swiper class="rightSwiper" :modules="modules" :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange" direction="vertical"   simulateTouch>
      <!-- 내리는 효과 주기 위해서 첫번째 element 생략 -->
      <swiper-slide class="swiperItem"></swiper-slide>
      <swiper-slide class="swiperItem">
        <div class="bg">
        <!-- top -->
          <div style="height: 25px" class="relative-position header row justify-around">
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
            <div class="items q-mr-md">
              <q-btn dense flat icon="signal_cellular_alt" />
              <q-btn dense flat icon="5g" />
              <q-btn dense flat icon="battery_5_bar" />
            </div>
          </div>
          <div class="mainDate row justify-center items-center">
            <div style="text-align: center">
              <div class="text-h5 text-weight-bold">{{ todayYear }}</div>
              <div class="text-h2 text-weight-bold">{{ todayDate }}</div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
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
      width: 170px;
      height: 25px;
      background: #000;
      border-radius: 0 0 30px 30px;
      margin-left: 45px;
    }
    .items {
      margin-top: -3px;
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
  .rightSwiper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    .swiperItem {
      .bg {
        height: 100vh;
        background-image: url('/assets/iphone_default_bg.webp');
        background-position: center;
        background-size: 100%;
        .header {
          .date {
            font-weight: bold;
            font-size: 18px;
          }
          .camera {
            width: 170px;
            height: 25px;
            background: #000;
            border-radius: 0 0 30px 30px;
            margin-left: 45px;
          }
          .items {
            margin-top: -5px;
          }
        }
        .mainDate {
          width: 100%;
          height: 200px;
          color: #fff;
        }
      }
    }
  }
}

</style>