<script setup>

import { useModal } from "@/stores/index.js";

const store = useModal();

const downModal = () => {
  // 버튼으로의 함수호출은 상관없고 해당 데이터가 반응형으로 와야 바뀐다 -> 버튼은 실행만 시키고 변하는건 데이터니깐
  store.downBtn()
}


</script>

<template>
  <div @click="downModal()" class="line absolute-bottom"></div>
</template>

<style lang="scss" scoped>
.line {
  position: absolute;
    bottom: 10px;
    margin: auto;
    width: 200px;
    height: 5px;
    background: #eee;
    border-radius: 50px;
}
</style>