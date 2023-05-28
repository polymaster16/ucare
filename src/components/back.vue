<template>
  <div @click="router.go(-1)"
   class="back-container" v-bind:class="rootClassName">
    <svg viewBox="0 0 1024 1024" class="back-icon">
      <path
        d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"
      ></path>
    </svg>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style scoped>
.back-container {
  width: 100%;
  height: 43px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}
.back-icon {
  width: 55px;
  height: 65px;
  margin-top: 3%;
  transition: 0.3s;
  margin-left: 2%;
}
.back-icon:hover {
  width: 70px;
  height: 81px;
}



@media(max-width: 474px) {
  .back-container {
    width: 474px;
  }
}
</style>
