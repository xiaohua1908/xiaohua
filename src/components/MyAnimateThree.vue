<template>
  <div>
      <button @click="flag = !flag">切换</button>
      <p></p>
      <transition 
      enter-active-class="animated tada" 
      leave-active-class="animated bounceOutRight"
      :deration="{enter:'1000' , leave:'500'}" >
        <img v-if="flag" :src="pic" alt="">
      </transition>
  </div>
</template>

<script>
import animate from 'animate.css'
export default {
 name :"MyAnimateThree",
 data(){
     return{
        flag: true,
        pic: 'https://www.baidu.com/img/bd_logo1.png'
     }
 }
}
</script>

<style scoped>

</style>