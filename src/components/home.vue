<template>
    <div class="home" >
    我是首页
    <input type="text" @input="throtteScroll">
    </div>
</template>

<script>
export default {
  name: 'home',
  props: {
  },
  data() {
    return {

    }
  },
  mounted() {
    // window.onscroll = this.throtteScroll();
    // window.addEventListener('scroll',this.throtteScroll(), true);
  },
  methods: {
    // 节流
    throttle(fn, delay) {
      let prevTime = Date.now();
      return function() {
        console.log('*****')
        let curTime = Date.now();
        if(curTime - prevTime > delay){
          fn.apply(this, arguments)
          prevTime = curTime;
        }
      }
    },
    // aa(fn, delay){
    //   console.log('aaaaaaaaaaa', delay)
      
    //   return function(){
    //     fn.apply(this, arguments)
    //   }
    // },
    throtteScroll() {
      console.log(111)
      this.throttle(function() {
        console.log('节流');
      }, 100)
      // this.aa(function() {
      //   console.log('节流');
      // }(), 100);
    }
  }
}
</script>
<style scoped>
.home {
  height: 1000px;
}
</style>