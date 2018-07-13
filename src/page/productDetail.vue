<style lang="less" scoped>
@import '../assets/style/variable.less';

.banner{height: 7.5rem;}
.banner__image{width: 100%;}

.product{padding: .3rem; font-size: .3rem; background-color: white; margin-bottom: .2rem;}
.product-price{line-height: .6rem; color: @redColor;}
.product-title{line-height: .44rem;}


.detail{margin-bottom: 1rem;}
.detail-title{font-size: .3rem; display: flex; align-items: center; justify-content: space-around; height: .98rem; background-color: white;}
.detail-title i{border-top: 1px solid #E5E5E5; width: 2.6rem; display: inline-block;}
.detail-info img{width: 100%;}

// 底部购买按钮
.action{position: fixed; width: 100%; left: 0; bottom: 0; height: 1rem; display: flex; z-index: 2; background-color: white;}
.action-item{flex: 1; height: 1rem; color: white; font-size: .26rem; text-align: center;}
.cart{width: 1rem; height: .6rem; position: relative; text-align: center;}
.cart img{width: .48rem; height: .48rem;}
.cart p{font-size: .24rem; color: #666; line-height: .24rem;}
.info-select{color: #666;}
</style>
<template>
    <div class="container">
        <!-- 轮播图 -->
        <div class="banner">
            <mt-swipe :auto="3000" @change="bannerChange" @before="beforeChange" @end="endEvent">
                <mt-swipe-item v-for="(v, i) in result.showImages" :key="i">
                    <img class="banner__image" :src="v" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 商品详情 -->
        <div class="product">
            <div class="product-price">￥266.00</div>
            <div class="product-title">珀莱雅人鱼公主玻尿酸面膜贴女海藻补水 保湿面膜</div>
        </div>

        <!-- 商品详情 -->
        <div class="detail">
            <div class="detail-title">
                <i></i>
                <span>商品详情</span>
                <i></i>
            </div>
            <div class="detail-info">
                <img src="../assets/images/product/bg_gfwx.png" alt="">
            </div>
        </div>

        <!-- action bar -->
        <div class="action">
            <div class="action-item flex-center">
                <div class="cart">
                    <img src="../assets/images/icon/cart.png" alt="">
                    <p>购物车</p>
                    <mt-badge colorType="primary" type="circle">1</mt-badge>
                </div>
            </div>
            <div class="action-item flex-center s-bgColor">加入购物车</div>
            <div class="action-item flex-center f-bgColor" @click="modelVisible = true">立即购买</div>
        </div>
        <product-model :product="result" :visible="modelVisible" @onModelSubmit="onModelSubmit" @onTypeChange="onTypeChange"></product-model>
    </div>
</template>
<script>
import productModel from '@/components/product-model';
export default {
    components: {
        productModel
    },
    data() {
        return {
            bannerIndex: 0,

            modelVisible: false,
            // 实体数据
            result: {
                showImages: [
                    require('../assets/images/product/bg_zgcx.png'),
                    require('../assets/images/product/bg_gfwx.png'),
                    require('../assets/images/product/bg_gfwz.png'),
                ],
                commoditySpecifications: [
                    {
                        commoditySpecificationItems: [
                            {
                                name: '黄色',
                                showImage: '',
                            },{
                                name: '红色',
                                showImage: '',
                            },
                        ],
                        name: '颜色',

                        //交互变量
                        selectedIndex: 0,
                    },{
                        commoditySpecificationItems: [
                            {
                                name: 'L码',
                                showImage: '',
                            },{
                                name: 'M码',
                                showImage: '',
                            },
                        ],
                        name: '尺码',

                        //交互变量
                        selectedIndex: 0,
                    },
                ],
                specificationItems: [
                    {
                        id: 1,
                        costPrice: 10,
                        merchantCode: 'C200',
                        name: '',
                        itemNames: ['黄色','L码'],
                        price: 100,
                        weight: 0.1,
                        inventory: 100,
                    },
                    {
                        id: 1,
                        costPrice: 10,
                        merchantCode: 'C200',
                        name: '',
                        itemNames: ['黄色','M码'],
                        price: 110,
                        weight: 0.1,
                        inventory: 100,
                    },
                    {
                        id: 1,
                        costPrice: 10,
                        merchantCode: 'C200',
                        name: '',
                        itemNames: ['红色','M码'],
                        price: 120,
                        weight: 0.1,
                        inventory: 100,
                    },
                    {
                        id: 1,
                        costPrice: 10,
                        merchantCode: 'C200',
                        name: '',
                        itemNames: ['红色','L码'],
                        price: 130,
                        weight: 0.1,
                        inventory: 0,
                    },
                ]
            }
        };
    },
    methods: {
        bannerChange(index) {
        },
        beforeChange(obj) {
            this.bannerIndex = obj.newIndex;
        },
        endEvent(index) {
        },

        //选择商品类型
        onTypeChange(value){
            this.result.commoditySpecifications[value.index].selectedIndex = value.i;
        },
        //确定商品
        onModelSubmit(value){
            this.modelVisible = false;
            console.log(value)
        }
    },
}
</script>
