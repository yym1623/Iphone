
<script setup>
import { ref } from 'vue';
import Camera from "simple-vue-camera";
import { useQuasar } from 'quasar'
const $q = useQuasar();

const emit = defineEmits(['down'])


const props = defineProps({
  cameraActive: {
    type: Boolean,
    default: false
  }
})


const cameras = ref();

const imgList = ref(($q.sessionStorage.getItem('imgList') === null ? [] : $q.sessionStorage.getItem('imgList')))

const snapshot = async () => {
  const blob = await cameras.value.snapshot();
  const url = URL.createObjectURL(blob);
  imgList.value.unshift({ url })
  console.log(imgList.value)
  // console.log(imgList.value)

  $q.sessionStorage.set('imgList', imgList.value)
}

const downModal = () => {

  // props로 가져온 데이터를 변경시켜서 그걸 보내주던가 (해당 받아온걸로 변경해야 하는거면), 그게 아니라 받아온게 아닌 단순 클릭시 해당 불리언값을 트루 펄스만 하는거면 그냥 emit으로 트루 펄스만 할당해서 보내서 써도 된다 -> 그게 해당 함수 데이터 에담긴다
  // props.cameraActive = false;
  emit('down', false)

}


</script>


<template>
  <div class="camera">
    <camera :resolution="{ width: 400, height: 300 }" ref="cameras"  autoplay />
    <q-btn class="snapshot" @click="snapshot" />
    <q-btn class="turn__snapshot" @click="snapshot" icon="autorenew" />
    <div @click="downModal()" class="line absolute-bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
.camera {
  position: absolute;
  // bottom: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
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
    margin: auto;
    &:active {
      border-radius: 50%;
      opacity: .7;
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
</style>