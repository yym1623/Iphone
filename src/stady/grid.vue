<script setup>

</script>


<template>
  <div class="style">
    <div class="flexs">
      <!-- flex -->
      <!-- 기본 flex 정의 - row (flex), column -->
      <!-- 기본 flex 옵션 값 - inline, reverse, nowrap, reverse-wrap -->
      <!-- 정렬 옵션 값 -->
      <!-- 수평 - justify + start, end, center, between, around, evenly -->
      <!-- 수직 - items + start, end, center, stretch, baseline -->
      <!-- 수평, 수직 - content + start, end, center, stretch, between, around -->

      <!-- 크기 분배 -->
      <!-- 기본 크기 정의 - col -> col- auto ~ 12까지 있다, + grow, shrink -->
      <!-- col & auto 차이점 - col은 필요한 경우 축소나 늘리면서 모든 공간을 차지하려고 한다, auto는 셀이 렌더링 해야 하는 공간만 채우도록 한다 -->
      <!-- grow, shrink - grow - 셀이 렌더링에 필요한 최소 공간만 채운다 (더 많이 가능하면 확장한다), shrink - 셀이 렌더링에 필요한 최대 공간으로 채운다(사용 공간이 충분하지 않으면 축소한다) -->

      <!-- 래핑 - row를 12에 맞출 필요는 없다? - col-12가 한줄? - 그럼 12만 안넘으면 ex col-2, col-8은 한 줄에 나온다? -->
      <!-- row는 기본적으로 래핑 됩니다. 이를 비활성화하려면 no-wrap을 활성화 해라 -->

      <!-- 부모로 정의된 flex - 자식 요소가 개별로 정의 하기 -->
      <!-- 수평 & 수직 - self + start, center, baseline, end, stretch -->
      <!-- 순서 - order + first, last -->

      <!-- 반응형 - col + xs ,sm, md, lg, xl로 창 너비에 따라서 지정해줄 수 있다 -->
      <!-- ex) col-md-7, offset-lg-3, col-xs-auto -->
      <!-- ex) col-xs-12 col-sm-6 col-md-4 -> 초소형에서는 세로로, 소형에서는 나란히, 중형에서는 한 줄에 -->

      <!-- 한 줄에 12개 포인트만 표시할 수 있으니 맞게 설정하면 된다 -->
      <!-- flexbox grid column에서 자동 레이아웃은 일부 column의 중단점 너비를 설정하면 나머지 column은 자동으로 너비가 조정되는(나머지 12에 맞게?) 것을 뜻합니다. -->
      <!-- col-{breakpoint}-auto를 사용한 column은 그 콘텐츠에 따라 너비가 자연스럽게 조정됩니다 -->
      <!-- 래핑 - 단일 row에 column들의 너비 값이 12 포인트를 넘는 경우, 초과되는 column들은 순차적으로 새 라인으로 줄 바꿈 됩니다. -->
      <!-- offset - qcolumn을 우측으로 이동시킬 때 .offset-md-* 클래스를 사용하세요. 이 클래스들은 column의 좌측 여백을 그 너비(*) 만큼 늘린다 -->
      <div class="container row">
        <div class="item col">item 1</div>
        <div class="item col">item 2</div>
        <div class="item col">item 3</div>
      </div>
    </div>
    <div id="grid"></div>
  </div>
</template>


<style lang="scss" scoped>
// .style {
//   border-top: .5px solid #000;
//   .flexs {
//     .container {
//       .item {
//         &:nth-child(1) {
//           background: blue;
//         }
//         &:nth-child(2) {
//           background: red;
//         }
//         &:nth-child(3) {
//           background: green;
//         }
//       }
//     }
//   }
// }
</style>