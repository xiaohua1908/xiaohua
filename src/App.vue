<template>

<div id="app">

 <Todolist />

</div>

</template>

<script>
// import ListRender from './components/ListRender'
// import ListRenderTwo from './components/ListRenderTwo'
// import DemoEvent from './components/DemoEvent'
// import Lkfilters from './components/Lkfilters'
// import MyAnimateThree from './components/MyAnimateThree'
// import LifeCicle from './components/LifeCicle'
// import PropsComponent from './components/PropsComponent'
// import CustmonEvent from './components/CustmonEvent'
import Todolist from './components/Todolist'





export default {
  name: "App",
  components: {
    // ListRenderTwo
    // DemoEvent
    // Lkfilters
    // MyAnimate
    // MyAnimateTwo
    // MyAnimateThree
    // LifeCicle
    // PropsComponent
    // CustmonEvent
    Todolist
    },
    data(){
      return { 
      }
    },
    methods:{ 
         
      }
    
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
