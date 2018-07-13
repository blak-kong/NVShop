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
    <div class="change-address">
      <div class="select-address__radio">
        <div class="radio-icon" :class="[isValue ? 'f-bgColor' : '']">
          <i class="mtui-icon-select"></i>
        </div>
        <p @click="valueChange" :class="[isValue ? 'f-textColor' : '']">默认地址</p>
      </div>
      <div @click="deleteAddress" class="deleteAddress f-textColor">清空当前地址</div>
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
        cities: '',
        isValue: false,
        currentValue: false,
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
      },
      valueChange() {
        this.isValue = !this.isValue;
      },
      deleteAddress() {
        this.$messagebox.confirm('确定清空地址？').then((action) => {
          console.log(action)
          if (action === 'confirm') {
            this.cities = '';
            this.address = '';
          }
        });
      }
    },
    watch: {
      address() {
        console.log(this.address)
      },
      currentValue(val) {
        console.log(val)
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
    height: 100%;
    border: none;
  }
}

.change-address {
  width: 100%;;
  height: .8rem;
  line-height: .8rem;
  display: flex;
  justify-content: space-between;
  padding: 0 .34rem 0 .24rem;
  background: #F5F5F5;
  box-sizing: border-box;
  z-index: 100;
  /**** 单选框 start ****/
  .select-address__radio {
    position: relative;
    display: inline-block;
    input {
      position: absolute;
      width: 100%;
      height: .8rem;
      opacity: 0;
    }
    p {
      margin-left: .48rem;
      color: #333;
      font-size: .28rem;
    }
    .radio-icon {
      position: absolute;
      top: .24rem;
      width: .3rem;
      height: .3rem;
      border-radius: 100%;
      border: .01rem solid #ccc;
      background: #fff;
      .mtui-icon-select {
        position: absolute;
        left: -.02rem;
        bottom: 0;
        font-size: .14rem;
        color: #fff;
      }
    }
  }
  /**** 单选框 end ****/
  .deleteAddress {
    font-size: .28rem;
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
