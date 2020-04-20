<template>
  <div>
      <!-- 格式化人民币 -->
      <h3>格式化人民币</h3>
      <p>{{money | moneyFormate}}</p>
      <p>{{page | moneyFormate}}</p>
    <!-- 格式化日期 -->
    <h3>格式化日期</h3>
    <p>{{time | timeFormate}}</p>
    <p>{{time | timeFormate('HH:mm:ss')}}</p>
  </div>
</template>

<script>
import moument from 'moment'
export default {
    name:"Lkfilters",
    data(){
        return{
            money: 23232,
            page: 24567.332,
            time: new Date()
        }
    },
    mounted(){
      setInterval(() => {
          return this.time = new Date();
      }, 1000);
    },
    filters: {
        moneyFormate(value){
           return '￥' + Number(value).toFixed(2);
        },
        timeFormate(value, formate='YYYY-MM-DD HH:mm:ss'){
          return moument(value).format(formate);
        }
    }

}
</script>

<style>

</style>