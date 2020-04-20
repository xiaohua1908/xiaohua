<template>
  <div class="page">
      <div class="input-box">
          <input type="text" v-model="msg" @keyup.enter="listAdd">
      </div>
      <ul>
          <li v-for="(item,n) in list" :key="n">
              <p>{{item.msg}}</p>
              <p><button @click="listEdit(item,n)">编辑</button><button @click="listDel(index)">删除</button></p>

          </li>
      </ul>
  </div>
</template>

<script>
export default {
 name: "Todolist",
 data(){
    return {
      msg: '',
      list: [
          {msg:'sasdasdas'}
      ],
      editIndex: -1,
    }
 },
 methods: {
     listAdd(){
        //  添加
         if(this.msg) {
             if(this.editIndex >= 0 ){
        // this.list.splice(this.editIndex,1,{msg: this.msg});
        this.list[this.editIndex].msg = this.msg
             }
             else{this.list.push({msg:this.msg});}

           
           this.msg=''
         }
         else{
             alert('请输入内容');
         }
     },
    //  编辑
     listEdit(item,index){
         this.editIndex = index
         this.msg = item.msg;
     },
    //  删除
    listDel(index){
       this.list.splice(index,1)
    }
 }
}
</script>

<style scoped>
*{ box-sizing: border-box}
.page{
    width: 300px; margin: 50px auto;

}
input{ width:100%; padding: 10px; outline: none;}
input:focus{ border-color: green;}
ul{ list-style: none; text-align: left; margin: 0; padding: 10px 0;}
li{ line-height: 30px;box-shadow: 0 0 10px rgb(0, 0, 0, 0.3);
}
</style>