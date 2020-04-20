<template>
  <div>
      <button @click="showe = !showe">切换</button>
      <transition name="fade">
       <div class="box" v-if="showe">撒旧克丹尼手机看</div>
      </transition>
  </div>
</template>

<script>
export default {
 name :"MyAnimate",
 data(){
     return{
        showe: false
     }
 }
}
</script>

<style scoped>
.box{
  width: 200px; height: 200px;
  background-color: red;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateX(200px) scale(3)
}
.fade-enter-active,.fade-leave-active{
  transition: all 2s ease-in-out;
}
</style>