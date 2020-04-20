<template>
<div>
    <!-- 事件修饰符 -->
   <button @click="clickBtn('111', $event)">点我</button>
   <h3>事件修饰符</h3>
   <a href="www.itlike.com" @click.prevent="aclick">撩课</a>
   <!-- 冒泡 -->
   <div style="width:100px; height:100px; background-color:red" @click="divClick">
       <button @click.stop="btnClick">点我吧</button>
   </div>
   <!-- 按键修饰符 -->
   <h3>按键修饰符</h3>
   <input type="text" @keyup.enter="dealKey">
</div>
</template>

<script>
export default {
    name:"DemoEvent",
    methods:{
        clickBtn(args, event){
           console.log(args);
           console.log(event);

           
        },
        aclick() {
           alert(10);
        },
        btnClick(){
           alert("点击了里面的按钮");
        },
        divClick(){
            alert("点击了父标签");
        },
        dealKey(event){
            alert(event['keyCode']);
        }
    }

}
</script>

<style>

</style>