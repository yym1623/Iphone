<script setup>
import { ref, watch, defineAsyncComponent } from 'vue'
import { useQuasar } from 'quasar'
import faceIO from '@faceio/fiojs'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { onClickOutside } from "@vueuse/core"

const camera = defineAsyncComponent(() => import('./camera.vue'))

const cameraActive = ref(false)

const cameraOpen = () => {
  console.log('trues')
  cameraActive.value = true;
}


import 'swiper/css'
import 'swiper/css/pagination'

const $q = useQuasar();

const itemBox = ref(false);
const itemBoxActive = ref();

onClickOutside(itemBoxActive, () => {
  itemBox.value = false
})

const itemBoxOpen = () => {
  itemBox.value = true;
}

const modules = ref([ ])

const imgList = [
  { imgSrc: ('/assets/photo.png') },
  { imgSrc: ('/assets/calculator.png') },
  { imgSrc: ('/assets/setting.png') },
  { imgSrc: ('/assets/files.png') },
  { imgSrc: ('/assets/calendar.png') },
  { imgSrc: ('/assets/notes.png') },
  { imgSrc: ('/assets/app-store.png') },
]

const bannerImgList = [
  { imgSrc: ('/assets/phone.png') },
  { imgSrc: ('/assets/message.png') },
  { imgSrc: ('/assets/contacts.png') },
  { imgSrc: ('/assets/camera.png') },
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

const down = (data) => {
  // 슬라이드 - css 트랜스폼 처리하잔
  cameraActive.value = data;
}


setInterval(() => {
  todayDate.value
  todayYear.value
}, 60000);
 

const faceio = new faceIO("fioacab4");
// face id 신규 등록
const enrollNewUser = () => {
  faceio.enroll({
    }).then(userInfo => {
      console.log(userInfo)
      $q.sessionStorage.set('userKey', userInfo.facialId);
    }).catch(errCode => {
      console.log(errCode)
    })
}
function authenticateUser(){
    // Authenticate a previously enrolled user
    faceio.authenticate({
        "locale": "auto" // Default user locale
    }).then(userData => {
        console.log("Success, user identified")
        // Grab the facial ID linked to this particular user which will be same
        // for each of his successful future authentication. FACEIO recommend 
        // that your rely on this Facial ID if you plan to uniquely identify 
        // all enrolled users on your backend for example.
        console.log("Linked facial Id: " + userData.facialId)
        // Grab the arbitrary data you have already linked (if any) to this particular user
        // during his enrollment via the payload parameter of the enroll() method.
        console.log("Payload: " + JSON.stringify(userData.payload)) 
        // {"whoami": 123456, "email": "john.doe@example.com"} set via enroll()
    }).catch(errCode => {
        // handle authentication failure. Visit:
        // https://faceio.net/integration-guide#error-codes
        // for the list of all possible error codes
    })
}
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
    <div class="bg" :class="{ itemBoxs : itemBox }">
      <!-- top -->
      <div class="header row justify-evenly">
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
          <q-btn dense flat icon="battery_4_bar" />
        </div>
      </div>
      <!-- main -->
      <div class="q-pa-md mainItem">
        <div class="q-ml-md q-mt-md grid" >
          <q-img class="item_f" src="/assets/kakaotalk.png" />
          <div ref="itemBoxActive" :class="{ itemBoxs : itemBox }" class="itemBox" @click="itemBoxOpen">
            <template v-if="itemBox">
              <q-img :src="img.imgSrc" v-for="img in imgList" :key="img" />
            </template>
            <template v-else>
              <q-img :src="img.imgSrc" v-for="img in imgList.slice(0, 4)" :key="img" />
            </template>
          </div>
        </div>
      </div>
      <!-- bottom -->
      <div class="q-pa-md absolute-bottom bottom">
        <div class="banner shadow-5 q-pa-md row justify-between">
          <q-img :src="img.imgSrc" v-for="(img, index) in bannerImgList" :key="img" @click="(index === 3  ? cameraOpen() : none)"/>
        </div>
      </div>
      <div v-if="cameraActive"><camera @down="down" :cameraActive="cameraActive" /></div>
    </div>
    <swiper class="rightSwiper" :modules="modules"  direction="vertical" simulateTouch>
      <!-- 내리는 효과 주기 위해서 첫번째 element 생략 -->
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
              <q-btn dense flat icon="battery_full_alt" />
            </div>
          </div>
          <div class="mainDate row justify-center items-center">
            <div style="text-align: center">
              <div class="text-h5 text-weight-bold">{{ todayYear }}</div>
              <div class="text-h2 text-weight-bold">{{ todayDate }}</div>
            </div>
          </div>
          <div class="bottomData q-mb-lg row absolute-bottom justify-around items-center ">
            <q-btn  class="bottomItem" icon="flashlight_on" />
            <q-btn @click="enrollNewUser" class="bottomItem" label="얼굴 인식" />
            <q-btn class="bottomItem" icon="photo_camera" />
          </div>
          <div class="line absolute-bottom"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiperItem"></swiper-slide>
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
  height: 700px;
  margin: auto;
  .bg {
    height: 100%;
    background-image: url('/assets/iphone_default_bg.webp');
    background-position: center;
    background-size: 100%;
  }
  .bg.itemBoxs {
    // background: inherit;
    z-index: 1;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .header {
    height: 25px;
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

  .mainItem {
    .grid {
      display :grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      .item_f {
        border-radius: 10px;
        width: 58px;
        height: 58x;
        cursor: pointer;
        &:active {
          opacity: .7;
        }
      }
      .itemBox {
        width: 58px;
        height: 58px;
        background: #eee;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        border-radius: 10px;
        padding: 5px;
        cursor: pointer;
        &:active {
          opacity: .7;
        }
        div {
          border-radius: 10px;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
      .itemBox.itemBoxs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        position: absolute;
        padding: 20px;
        z-index: 100;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 250px;
        height: 250px;
        background: #eee;
        cursor: auto;
        &:active {
          opacity: 1;
        }
        div {
          border-radius: 10px;
          width: 58px;
          height: 58px;
          cursor: pointer;
          &:active {
            opacity: .7;
          }
        }
      }
    }
  }
  
  .bottom {
    .banner {
      border-radius: 10px;
      div {
        border-radius: 10px;
        width: 64px;
        height: 64px;
        cursor: pointer;
        &:active {
          opacity: .7;
        }
      }
    }
  }
  .rightSwiper {
    display: none;
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
        .bottomData {
          .bottomItem {
            // width: 50px;
            height: 45px;
            border-radius: 50%;
          }
        }
        .line {
          margin: auto;
          margin-bottom: 10px;
          width: 200px;
          height: 5px;
          background: #eee;
          border-radius: 50px;
        }
      }
    }
  }
}

</style>