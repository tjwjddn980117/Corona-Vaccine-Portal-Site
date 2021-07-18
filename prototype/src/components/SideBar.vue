<template>
    <div>
        <side-bar-600></side-bar-600>
        <!-- 햄버거 바 추가 시 설정할 예정 2021.07.19
        <div v-if="windowHeight>600">
            <side-bar-600></side-bar-600>
        </div>
        <div v-else>
            <img class='minileft' src="@/assets/square.png" width="50" height="50" />
        </div>
        -->
    </div>
</template>
<script>
import SideBar600 from './SideBar600.vue';
    export default {
  components: { SideBar600 },
        name: 'SideBar',
        data() {
            return {
                windowHeight: 0,
                txt: '',
            }
        },
        watch: {

        },

        mounted() {
            const vm = this;
            window.addEventListener('resize', () => {
                vm.windowHeight = window.innerWidth;
            });
        },
        // sidebarResize() {
        //     const vm = this;
        //     if(vm.windowHeight<600){
        //         console.log('aaa');
        //     }
        // },
        created() {

        },
    }
</script>
<style>
    .minileft {
        position: fixed;
        top: 10px;
        left: 10px;
    }

</style>