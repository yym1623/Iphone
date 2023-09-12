
<script setup>
import { ref } from 'vue';
import Camera from "simple-vue-camera";
import { useQuasar } from 'quasar'

const $q = useQuasar();

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


</script>


<template>
  <div>
    <camera :resolution="{ width: 400, height: 662 }" ref="cameras"  autoplay />
    <q-btn @click="snapshot" color="parimary" label="샷" />
  </div>
</template>

<style lang="scss" scoped>

</style>