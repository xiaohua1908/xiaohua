<template>
  <div>
     <h3>遍历数组</h3>
     <ul>
         <li v-for="(person, index) in persons" :key="personskeys[index]">
            ID: {{personskeys[index]}}-----------姓名: {{person.name}} , 年龄: {{person.age}} , 性别： {{person.sex}}
         </li>
     </ul>

     <h3>遍历对象</h3>
     <ul>
         <li v-for="(item, key) in persons[0]">
            ID: {{key}}-------{{item}}
         </li>
     </ul>
  </div>
</template>

<script>
import shortId from 'shortid'
export default {
 name: "ListRender",
 data() {
      return {
          persons: [
              {name: '张三' , age: 18 , sex: '男'},
              {name: '李四' , age: 19 , sex: '女'},
              {name: '王五' , age: 20 , sex: '男'},
              {name: '赵六' , age: 21 , sex: '女'},
          ],
          personskeys:[]
      }
 },
  mounted() {
      this.personskeys = this.persons.map(v=>shortId.generate())
  }
}
</script>

<style scoped>
ul{list-style: none}
</style>