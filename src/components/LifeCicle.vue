<template>
  <div>
    <!-- Vue生命周期 -->
    <p v-if="isShow">{{str1}}</p>
    <p v-else>{{str2}}</p>
    <button @click="destory">销毁</button>
  </div>
</template>

<script>
export default {
  name: "LifeCicle",
  beforeCreate() {
    console.log("1:beforeCreate()");
  },
  data() {
    return {
      isShow: false,
      str1: "撩课学院",
      str2: "itLike.com"
    };
  },
  methods: {
    destory() {
      this.$destroy();
    }
  },
  created() {
    console.log("2:created()");
  },
  beforeMount() {
    console.log("3:beforeMount()");
  },
  mounted() {
    console.log("4:mounted()");
    this.intervalId = setInterval(() => {
      console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
      this.isShow = !this.isShow;
    }, 1000);
  },
  beforeUpdate() {
    console.log("5:beforeUpdate()");
  },
  updated() {
    console.log("6:updated()");
  },
  beforeDestroy() {
    console.log("7: beforeDestroy()");
    //  清除定时器
    clearInterval(this.intervalId);
  },
  destroyed() {
    console.log("8: destroyed()");
  }
};
</script>

<style>
</style>