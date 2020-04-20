<template>
  <div>
      <button @click="btnClick">删除父组件的P标签</button>
  </div>
</template>

<script>
export default {
 name:"CustomEvent",
 data(){
     return{}
 },
 methods: {
     btnClick(){
        //  告诉父组件点击按钮
         this.$emit('btnClick',{name:'哈哈哈' , sex: '男'});
     }
 }
}
</script>

<style>

</style>