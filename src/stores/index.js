import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModal = defineStore('Active', () => {
  // vue3 composition 방법
  // ref()는 state 속성이 됨.
  // computed()는 getters가 됨.
  // function()은 actions가 됨.
  // store를 호출할때는 그냥 불러오면 반응형이 안되므로 computed로 불러와야 반응형이 적용된다 (ref붙여서도? 안댐?)
  // 반응형 -> computed로 가져오거나 storeToRefs로 받아오거나 (이건 상태만 가능)
  //  -> computed로 store에서 받아올때다 (내보낼때도 ref, computed 등등으로 안내보내면 받아올때 computed해도 효과없는지 확인하기)
  const cameraActive = ref(false)
  const photoActive = ref(false)
  const itemBoxActive = ref(false)

  const cameraBtn = () => {
    cameraActive.value = true
  }
  const photoBtn = () => {
    itemBoxActive.value = false;
    photoActive.value = true
  }

  const itemBoxBtn = () => {
    itemBoxActive.value = true;
  }
  // 다른페이지에서 클릭으로 바꾼 데이터도 해당 부모 파일에서 컴퓨티드로 가져와서 실시간 동적으로 바뀌기 때문에 적용된다
  const downBtn = () => {
    cameraActive.value = false
  }
  return { cameraActive, photoActive, itemBoxActive, cameraBtn, photoBtn, itemBoxBtn, downBtn }
})
