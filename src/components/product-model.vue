<style lang="less" scoped>
@import '../assets/style/variable.less';
// 弹窗
.popup{position: fixed; z-index: 3;}
.popup-mask{position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,.6); z-index: 998;}
.popup-cont{position: fixed; width: 100%; background-color: white; z-index: 999; left: 0; bottom: 0;}

.model{height: 11rem;}
.model-product{display: flex; padding: .3rem; box-sizing: border-box; position: relative;}
.model-product_image{width: 2rem; height: 2rem; margin-right: .2rem; flex-shrink: 0;}
.model-product_info{flex: 1; align-self: flex-end; line-height: .6rem; font-size: .26rem;}
.info-price{font-size: .34rem; color: @redColor;}

.model-close{position: absolute; width: .8rem; height: .8rem; top: 0; right: 0;}
.model-close span{display: inline-block; height: .04rem; background-color: #666; border-radius: .1rem; width: .4rem; position: absolute; top: 50%; left: 50%; margin-top: -.02rem; margin-left: -.2rem;}
.model-close span:first-child{transform: rotate(45deg);}
.model-close span:last-child{transform: rotate(-45deg);}

.model-scroll{height: 6.4rem; overflow-y: auto; padding-left: .3rem; padding-right: .3rem;}
.model-type{
    .item{margin-bottom: .2rem;}
    .item-name{line-height: .6rem; font-size: .28rem; margin-bottom: .1rem;}
    .item-list{display: flex; margin-left: -.2rem; flex-wrap: wrap;}
    .item-list_item{color: #999; font-size: .24rem; line-height: .5rem; border-radius: .5rem; min-width: 1.2rem; text-align: center; margin-left: .2rem; margin-bottom: .2rem; background-color: #EEEEEE; padding-left: .12rem; padding-right: .12rem; box-sizing: border-box;}
    .item-list_item.cur{color: white;}
}

.model-qty{height: 1rem; padding-left: .3rem; padding-right: .3rem; align-items: center; font-size: .3rem;}

.model-submit{color: white; line-height: 1rem; text-align: center; font-size: .3rem;}

.fade-enter-active, .fade-leave-active, .fade2-enter-active, .fade2-leave-active {
  transition: all .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  bottom: -100%;
}
</style>
<template>
    <div class="popup">
        <transition name="fade">
            <div v-if="visible" class="popup-mask"></div>
        </transition>
        <transition name="fade2">
        <div v-if="visible" class="popup-cont">
            <div class="model">
                <div class="model-product">
                    <img class="model-product_image" src="../assets/images/product/order.png" alt="">
                    <div class="model-product_info">
                        <div class="info-price">￥{{curProduct.price.toFixed(2)}}</div>
                        <div style="line-height: .3rem; color: #666;">库存量：{{curProduct.inventory}}</div>
                        <div class="info-select">已选：{{curProduct.itemNames.join(',')}}</div>
                        <div class="model-close">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <!-- 类型 -->
                <div class="model-scroll">
                    <div class="model-type">
                        <div class="item" v-for="(value, index) in product.commoditySpecifications" :key="index">
                            <div class="item-name">{{value.name}}</div>
                            <div class="item-list">
                                <div :class="['item-list_item', value.selectedIndex == i ? 'f-bgColor cur' : '']" v-for="(v, i) in value.commoditySpecificationItems" :key="i" @click="onTypeChange(index,i)">{{v.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 数量 -->
                <div class="model-qty flex-between">
                    <div>数量</div>
                    <div>
                        <mt-stepper @on-change="chagneStepper" />
                    </div>
                </div>
                <!-- 确定 -->
                <div class="model-submit f-bgColor" @click="onModelSubmit">确定</div>
            </div>
        </div>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            quantity: 1,
        }
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
        visible: false,
    },
    methods: {
        //选择类型
        onTypeChange(index,i){
            this.$emit("onTypeChange",{index:index,i:i})
        },
        //数量加减
        chagneStepper(value){
            this.quantity = value;
        },
        //确定
        onModelSubmit(){
            if(this.curProduct.inventory > 0){
                this.$emit("onModelSubmit",{
                    // hasSelected: this.hasSelected,
                    quantity: this.quantity,
                    product: this.curProduct
                })
            }else{
                this.$Toast('库存量不足，请选择其他款式的商品吧')
            }
        }
    },
    computed: {
        curProduct(){
            let result = null;
            let hasSelected = '';

            for(let i of this.product.commoditySpecifications){
                hasSelected += i.commoditySpecificationItems[i.selectedIndex].name;
            }

            for(let i of this.product.specificationItems){
                for(let j of i.itemNames){
                    if(hasSelected.indexOf(j) > -1){
                        if(j == i.itemNames[i.itemNames.length - 1]) result = i;
                        else continue;
                    }else break;
                }
            }
            return result;
        }
    }
}
</script>
