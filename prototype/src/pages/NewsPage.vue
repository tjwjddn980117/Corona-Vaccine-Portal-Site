<template>
  <div>
<<<<<<< HEAD
    <div>
      <side-bar></side-bar>
    </div>
    <div id="height" class="main">
      <h1 class="issue" id="header">CORONA ISSUE</h1>
      <div id="width" class="main_container">
        <div class="main_title">CORONA HEADLINE</div>
        <div class="main_left_btn">감염병 뉴스</div>
        <div class="main_right_btn">코로나 뉴스</div>
      </div>
    </div>
  </div>
</template>
<script>
  import SideBar from '../components/SideBar.vue'
  export default {
    components: {
      SideBar
    },
    name: 'NewsPage',
    data() {
      return {
        windowWidth: 0,
        windowHeight: 0,
      }
    },
    methods: {},
    mounted() {
      const vm = this;
      window.addEventListener('resize', () => {
        vm.windowWidth = window.innerWidth;
        vm.windowHeight = window.innerHeight;
        document.getElementById('width').style.width = `${vm.windowWidth-360}px`;
        document.getElementById('header').style.width = `${vm.windowWidth-360}px`;
        document.getElementById('height').style.height = `${vm.windowHeight}px`;
        // console.log(vm.windowWidth)
      });
    },
    created() {

    }
  }
</script>
<style>
  .issue {
    padding-top: 60px;
    padding-top: 30px;
    color: #adc9ff;
    font-size: 100px;
    margin: 0;
    float: right;
  }

  .main {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .main_container {
    margin: 0;
    width: 100%;
    height: 100%;
    float: right;
    border: 2% solid black;
  }

  .main_title {
    width: 100%;
    height: 500px;
    float: left;
    border-bottom: 2% solid black;
    background-color: rgb(183, 0, 255);
  }

  .main_left_btn {
    width: 50%;
    height: 100%;
    float: left;
    border-bottom: 2% solid black;
    border-right: 2 solid black;
    background-color: rgb(0, 255, 64);
  }

  .main_right_btn {
    width: 50%;
    height: 100%;
    float: left;
    border-bottom: 2px solid black;
    background-color: rgb(208, 255, 0);
  }
=======
    <side-bar></side-bar>
    
  </div>
</template>
<script>
import SideBar from '../components/SideBar.vue'
  export default {
  components: { SideBar },
    name: 'NewsPage',
    data() {
      return {}
    },
    methods: {},
    created() {}
  }
</script>
<style>
>>>>>>> 8dba1ebb1525f2da3b3b75ef7e4c73457d5d870e
</style>