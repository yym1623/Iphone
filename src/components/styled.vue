<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

// 현재 사용 여부 가져오기
console.log($q.dark.isActive) // true, false

// 현재 설정된 상태 가져오기
console.log($q.dark.mode) // "auto", true, false

// 상태 설정하기
$q.dark.set(true) // or false or "auto"

console.log($q.dark.isActive) // true, false
// 토글
$q.dark.toggle()

</script>


<template>
  <div>
    <div class="transitions">
      <!-- transition-show / transition-hide & transition-prev / transition-next 또는 간단하게 transition props 를 사용하는 몇 가지 Quasar 컴포넌트가 있다 -->
      <q-menu
        transition-show="jump-down"
        transition-hide="jump-up"
      />
    </div>

    <!-- 타이포 그래피 - 스타일 네이밍(클래스) -->
    <!-- 외부 폰트를 퀘이사에서 사용할 경우 퀘이사에서 지정한 굵기를 지원해야만 사용가능하다 -->
    <!-- <div class="text-h3 bg-positive">텍스트1</div> -->
    <!-- <q-btn ref="test" class="text-h3" label="버튼"></q-btn> -->
    <!-- 간격 관련 - .q-(p|m)(t|r|b|l|a|x|y)-<bp>-(none|auto|xs|sm|md|lg|xl) -->
    <div class="row q-pa-xl bg-dark">
      <div class="col bg-primary">1</div>
      <div class="col bg-secondary">2</div>
      <div class="col bg-primary">3</div>
    </div>

    <!-- 자주 사용하는 -->
    <div>
      <!-- quasar input -> value가 안먹는다? -->
      <transition
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <!-- Wrapping only one DOM element, defined by QBtn -->
  <q-btn
    color="secondary"
    icon="mail"
    label="Email"
    class="shadow-up-20"
    />
</transition>
    </div>
    <q-scroll-area style="width: 400px; height: 500px;" class="bg-yellow">
  ...content expanding over the 500px height from container...
  <q-scroll-observer @scroll="scrollHandler" />
</q-scroll-area>
<q-video
      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    />
  </div>
</template>


<style lang="scss" scoped>
// 다크모드 -> 이따 테스트
// .body--light {
//   /* ... */
// }

// .body--dark {
//   /* ... */
// }
</style>