<script setup>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar();


let today = new Date()
let hours = today.getHours();
let minutes = today.getMinutes();

// 삼항이나 계산 같은거 할때 ()로 구분좌가 없으면 어디까지가 계산인지 잘 안먹혀서 의도하지 않는게 나올때가 있다 ()로 구분해 주기
let todayDate = (hours.toString().length === 1 ? '0' + hours : hours) + ':' + (minutes.toString().length === 1 ? '0' + minutes : minutes);

setInterval(() => {
  todayDate
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
  <div v-if="$q.platform.is.mobile">
    <div class="bg">
      <!-- top -->
      <q-bar style="height: 25px" class="row justify-evenly">
        <div>
          <div>{{ todayDate }}</div>
        </div>
        <div class="row items-center camera">
          <div></div>
          <div></div>
          <div class="mike"></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <q-btn dense flat icon="signal_cellular_alt" />
          <q-btn dense flat icon="5g" />
          <q-btn dense flat icon="battery_5_bar" />
        </div>
      </q-bar>
      <!-- main -->
      <div class="q-pa-md">
        <div class="q-pa-sm grid" >
          <q-btn padding="xl" color="white" v-for="btn in 24" :key="btn"  />
        </div>
      </div>
      <!-- bottom -->
      <div class="q-pa-md absolute-bottom">
        <div class="banner shadow-5 q-pa-md row justify-between">
          <q-btn padding="xl" color="gray" />
          <q-btn padding="xl" color="gray" />
          <q-btn padding="xl" color="gray" />
          <q-btn padding="xl" color="gray" />
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

.bg {
  // width: 100%;
  height: 100vh;
  background-image: url('../assets/iphone_default_bg.webp');
  background-position: center;
  background-size: 100%;
}

.banner {
  border-radius: 10px;
}

.grid {
  display :grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  button {
    border-radius: 10px;
  }
}

.camera {
  align-self: center;
  width: 200px;
  height: 25px;
  background: #000;
  border-radius: 0 0 20px 20px;
  margin-left: 30px;
  .mike {

  }
}

</style>