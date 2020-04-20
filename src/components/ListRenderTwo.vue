<template>
  <div>
          <div>
        <h3>排序</h3>
        <button @click="orderByAge(0)">默认</button>
        <button @click="orderByAge(2)">年龄⬆</button>
        <button @click="orderByAge(1)">年龄⬇</button>
        
      </div>
      <p>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</p>
      <h3>搜索列表</h3>
      <input type="text" placeholder="请输入要搜索的姓名" v-model="searchName" />
      <ul>
          <li v-for="(p, index) in filterpersons" :key="personsKeys[index]">
              {{index + 1}}) 姓名：{{p.name}}---性别：{{p.sex}}---年龄：{{p.age}}---电话{{p.phone}}
          </li>
      </ul>
      

  </div>
</template>

<script>
import shortId from 'shortid'
export default {

   name: 'ListRenderTwo',
   data() {
        return {
            searchName: '',
            persons: [
              {name: '张三' , age: 18 , sex: '男', phone: '18768990233'},
              {name: '李四' , age: 19 , sex: '女', phone: '18768990233'},
              {name: '王五' , age: 20 , sex: '男', phone: '18768990233'},
              {name: '赵六' , age: 21 , sex: '女', phone: '18768990233'},
              {name: '李四' , age: 19 , sex: '女', phone: '18768990233'},
              {name: '王五' , age: 20 , sex: '男', phone: '18768990233'},
              {name: '李思思' , age: 21 , sex: '女', phone: '18768990233'},
              {name: '李四四' , age: 19 , sex: '女', phone: '18768990233'},
              {name: '王五五' , age: 20 , sex: '男', phone: '18768990233'},
              {name: '杨幂' , age: 21 , sex: '女', phone: '18768990233'}
          ],
          personsKeys: [],
          orderType: 0  //排序
        }
   },
   mounted() {
      this.personsKeys = this.persons.map(v=>shortId.generate())
  },
  computed: {
    
    filterpersons() {
      // 1.获取数据
      let {searchName, persons,orderType} = this;  
      // 2.取出数组中的数据
      let arr = [...persons];
      // 3.过滤数组
      if(searchName.trim()){
        arr = persons.filter(p => p.name.indexOf(searchName) !== -1)
      }
      // 4.排序
      console.log(orderType);
      if (orderType) {
        arr.sort((p1, p2) => {
          if(orderType === 1){ //降序
             return p2.age - p1.age
          }else{  //升序
             return p1.age - p2.age
          }
        });
      }
      return arr;
    }
  },
  methods:{
    orderByAge(orderType){
        this.orderType = orderType;
    }
  }
}
</script>

<style>
ul{list-style: none}
ul li{ padding: 5px 0}
</style>