<template>
  <div>
      <button @click="flag = !flag">切换</button>
      <p></p>
      <transition name="bounce">
        <img v-if="flag" :src="pic" alt="">
      </transition>
  </div>
</template>

<script>
export default {
 name :"MyAnimateTwo",
 data(){
     return{
        flag: true,
        pic: 'https://www.baidu.com/img/bd_logo1.png'
     }
 }
}
</script>

<style scoped>
/* .box{
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
} */
.bounce-enter-active{
  animation: bounce .5s;
}
.bounce-leave-active{
  animation: bounce .5s reverse;
}
@keyframes bounce {
  0%{
    transform: scale(0)
  }
  25%{
     transform: scale(0.2)
  }
  50%{
    transform: scale(0.4)
  }
  75%{
     transform: scale(0.6)
  }
  100%{
    transform: scale(1)
  }
}
</style>