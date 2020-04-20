<template>
  <div>
      <h3>姓名：{{name}}</h3>
      <h3>年龄: {{age}}</h3>
      <p>{{person}}</p>

      <button @click="logPerson('小话', 30)">调用方法</button>
  </div>
</template>

<script>
export default {
 name: "PropsComponent",
//  props: ['name','age']
//  props: { 
//      name: String,
//      age: Number,
//      person: Object,
//      logPerson: Function
//      }
  props: { 
     name: {type: String, required: true, default:'小话'},
     age: {type: Number, required: true, default:0},
     person: Object,
     logPerson: Function
  }
    

}
</script>

<style scoped>

</style>>

</style>