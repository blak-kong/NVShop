<template>
  <div class="main">
    <mt-input
      label="收货人"
      v-model="name"
      placeholder='请输入收货人姓名'
      :required="true">
    </mt-input>
    <mt-input
      label="联系电话"
      v-model="phone"
      placeholder='请输入联系电话'
      :required="true">
    </mt-input>
    <div class="select-address" @click="selectAddress">
      <p>所在地区</p>
      <span>{{cities ? cities : '请选择'}}</span>
      <i class="arrow-right"></i>
    </div>
    <div class="address">
      <input type="text" placeholder="请输入详细地址" v-model="address">
    </div>
    <div class="footer f-bgColor">
      保存
    </div>
  </div>
</template>

<script>
import addr from '@/../static/json/pca-code.json'

  export default {
    data() {
      return {
        name: '',
        phone:'',
        address: '',
        cities: ''
      }
    },
    methods: {
      selectAddress() {
        var arr = [];
        var value = '';
        var self = this;
        this.$picker(addr, {
          
          onChange(result) {
          console.log(result);
          },
          onConfirm(result) {
            console.log(result);
            for (var i in result) {
              arr.push(result[i].label)
            }
            value = arr.join(" ");
            self.cities = value;
          },
        })
      }
    },
    watch: {
      address() {
        console.log(this.address)
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../assets/style/arrow.less';
@import '../assets/style/variable.less';

.main {background: #fff;}

.select-address {
  position: relative;
  height: .88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: .28rem;
    color: #333;
    margin-left: .26rem;
  }
  span {
    flex: 1;
    text-align: right;
    margin-right: .7rem;
    font-size: .28rem;
    color: #999;
  }
  i {
    margin-top: .05rem;
  }
}

/**** 分割线 start ****/
.select-address:after, .select-address:before {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    height: .01rem;
    color: #ccc;
  }
.select-address:after {
  top: 0;
  border-top: .01rem solid #ccc;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
  z-index: 88;
  z-index: 15;
}
.select-address:before {
    bottom: 0;
    border-top: .01rem solid #ccc;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    z-index: 88;
    z-index: 15;
}
/**** 分割线 end ****/

.address {
  width: 100%;
  height: 1.7rem;
  font-size: .28rem;
  color: #999;
  padding: 0 .26rem;
  box-sizing: border-box;
  input {
    width: 100%;
    height: 60%;
    border: none;
  }
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: .28rem;
}
</style>
