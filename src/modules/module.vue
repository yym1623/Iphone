<script setup>
// ref - 전체 반응형 (데이터 접근을 위해 value를 붙여서 가져와야 한다)
// reative - 배열, 객체만 반응형 (문자열은 사용 불가, 따로 ref처럼 value를 안 붙이고 바로 접근)

import { defineAsyncComponent, ref } from 'vue' 
import { uid, useQuasar } from 'quasar'

const $q = useQuasar();

// components - 첫 글자 대문자(암묵적 규칙)
const Member = defineAsyncComponent(() => import('./components/member.vue'))



const members = ref($q.sessionStorage.getItem('members') || [])

// Member를 추가하는 메서드
const addMember = () => {
  // unshift - 배열 앞에 추가
  // shift - 배열 뒤에 추가
  members.value.unshift({ mid: uid(), name: '', team: '', contact: '' })
}


// Member 정보를 수정하는 메서드
const upsert = (data, done) => {
  const findMember = members.value.find(m => m.mid === data.mid)
  const storageMembers = $q.sessionStorage.getItem('members') || []
  const findStorageMember = storageMembers.find(m => m.mid === data.mid)

  if (findMember) {
    findMember.name = data.name
    findMember.team = data.team
    findMember.contact = data.contact

    if (findStorageMember) {
      // get으로 불러와서 넣어주면 업데이트가 된다? set으로 다시 업뎃해야하는게 아니라?
      findStorageMember.name = data.name
      findStorageMember.team = data.team
      findStorageMember.contact = data.contact
    }
    else
      storageMembers.unshift(findMember)
  }

  $q.sessionStorage.set('members', storageMembers)

  done()
}

// Member 정보를 제거하는 메서드
const remove = (mid) => {
  const findIndex = members.value.findIndex(m => m.mid === mid)
  const storageMembers = $q.sessionStorage.getItem('members') || []
  const findStorageIndex = storageMembers.findIndex(m => m.mid === mid)

  if (findIndex !== -1) {
    members.value.splice(findIndex, 1)

    if (findStorageIndex !== -1)
      storageMembers.splice(findStorageIndex, 1)
  }

  $q.sessionStorage.set('members', storageMembers)
}


</script>


<template>
  <!-- 최상위 컴포넌트 2개여도 오류 안걸림? -->
  <div class="row justify-end q-pb-sm">
    <q-btn dense icon="add" round color="positive" @click="addMember" />
  </div>
  <div class="row q-col-gutter-lg">
    <div v-for="m in members" :key="m" class="col-6 col-md-4">
      <!-- props로 :data 처럼 이름 정해서 보내서 똑같이 받아서 사용하는 거 처럼 -->
      <!-- 반대로 emit?으로 받아올때도 emit으로 넘기는 이름의 데이터나 함수명을 @뒤에 똑같이 붙여 실행해줄 수 있다 -->
      <!-- EMIT 넘어온걸 받으면 받은거지만 -> EX) :DATA=DATA , @를 붙여서하면 자동 클릭 & 해당 데이터가 반응하면 해당 함수가 호출되는걸로 앞에 붙은게 : & @냐에 따라 달라지는 건가? -->
      <Member :data="m" @upsert="upsert" @remove="remove" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>