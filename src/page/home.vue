<style lang="less" scoped>
@import '../assets/style/arrow.less';
p{border: 1px solid #e5e5e5; font-size: .3rem;}

</style>
<template>
    <div class="container">
        <p class="arrow-top textColor">home</p>
        <p class="arrow-right">home</p>
        <p class="arrow-bottom">home</p>
        <p class="arrow-left">home</p>
        <router-link to="/productDetail">productDetail</router-link>
        <br>
        <router-link to="/selectAddress">selectAddress</router-link>
        <br>
        <router-link to="/addAddress">addAddress</router-link>
        <br>
        <p class="arrow-top_strong">home</p>
        <p class="arrow-right_strong">home</p>
        <p class="arrow-bottom_strong">home</p>
        <p class="arrow-left_strong">home</p>
    </div>
</template>
<script>
import {getTest} from '@/utils/request.js'
export default {
    created(){
        // getTest(data=>{
        //     console.log("成功",data)
        // },err=>{
        //     console.log("失败",err)
        // });

        // this.$messagebox.confirm('我是普通的confirm').then((action) => {
        //     console.log(action);
        // });
    }
}
</script>
