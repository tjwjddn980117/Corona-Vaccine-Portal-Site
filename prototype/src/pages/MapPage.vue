<template>
  <div style = "padding: 0px 0px 0px 300px;">
    <side-bar></side-bar>
    <div class = "map_title">
        <p>코로나 확진자 동선</p>
    </div>
      <header>
      <div class = "Big_status">
        <div class = "map_mainMap">

          <div class = "simple_status">
            <div class="statu_1 status"><p class="s_content"> 확진자 </p></div>
            <div class="statu_2 status"><p class="s_content"> 완치자 </p></div>
            <div class="statu_3 status"><p class="s_content"> 사망자 </p></div>
          </div>
          <div class = "mainMapBlank">
          </div>

          <div class = "state_status">
              <p class="s_content"> 도시별로 select 할 수 있게 </p>
          </div>
        </div>
      </div>
    </header>
    <el-scrollbar height="400px">

  <!--<p class="item" v-for="item in 80" v-bind:key="item">{{ item }}</p>-->
  </el-scrollbar>
  </div>
</template>
<script>
import SideBar from '../components/SideBar.vue'
  export default {
  components: { SideBar },
    name: 'MapPage',
    data() {
      return {
        state_options: [{value:'서울', label:'option1'},{value: '부산', label:'option2'},{value: '경기', label:'option3'},{value: '창조관', label:'option4'},{value:'야발거 살려줘',label:'option5'}],
        value:''
      }
    },
    methods: {},
    created() {}
  }
</script>
<style>
  .map_title{
    border-radius: 4px;
    background-color: rgb(190, 183, 183);
    left: 300px;
    right: 0px;
    height: 50px;
    margin: 10px;
  }
  .map_title p{
    width:300px;
    margin: 0 auto;
    height:50px;
    line-height:50px;
    text-align:center;
    font-size:x-large;
    font-weight: bold;
  }
  .Big_status{
    border-radius: 4px;
    background-color:rgb(190, 183, 183);
    left: 300px;
    right: 0px;
    height: 1000px;
    margin: 10px;
    padding: 10px;
  }
  .mainMapBlank{
    height:700px;
  }
  .simple_status{
    border-radius: 8px;
    background-color: rgb(206, 194, 194);
    left: 20px;
    top: 30px;
    height: 66px;
    width: 200px;
    margin: 5px;
    padding: 3px;
  }
  .status{
    display:inline-table;
    float: left;
    height: 60px;
    width: 60px;
    border-radius: 5px;
    background-color: rgb(250, 246, 246);
    margin: 3px;
  }
  .s_content {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-weight: bold;
  }
  .state_status{
    border-radius: 8px;
    background-color: rgb(206, 194, 194);
    float: right;
    height:66px;
    width: 200px;
    margin: 5px; 
    padding: 3px;
    bottom:0px;
  }
  .map_mainMap{
    border-radius: 4px;
    background-color:rgb(240, 236, 236);
    left: 0;
    right: 0;

    height: 98%;
    border: 30px;
    padding: 10px;
  }
</style>