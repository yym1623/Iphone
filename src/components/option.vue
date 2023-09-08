<script setup>
// $q 객체는 quasar -> useQuasar에서 가져와서 넣어서 사용한다
import { useQuasar } from 'quasar'

const $q = useQuasar();

// 조건에 따라 렌더링이 되고 안되고 차이는 성능에 이슈가 크다
// 플랫폼 감지 - $q.platform.is.mobile 이런식으로 해당 플랫폼에 들어온게 맞는지 확인할 수 있다 -> 조건으로 해당 플랫폼 별로 별도의 설정을 만들 수 있다 -> 조건에 맞게 렌더링 되므로 css보다 더 좋다
// 스크린 플러그인 - 너비에 따라 반응형 ui 사용이 가능하다, 하지만 조건에 맞게 렌더링이 아닌 조건 아닌것도 일단 가져와서 단순 css도 js로 처리되므로 성능 이슈 발생 -> 반응형은 조건에 맞게 렌더링 되는 css를 사용하자
</script>

<template>
  <div>
  
  </div>
</template>

<style lang="scss" scoped>

</style>