<template>
  <div>
    <div class="main" v-for="(item,index) of list" :key="index">
      <!-- 地址详情 -->
      <div class="address">
        <div class="address-icon">
          <i class="icon  mtui-icon-address"></i>
        </div>
        <div class="address__content">
          <div class="address__content-info">
            <span>收货人：{{item.name}}</span>
            <span>{{item.phone}}</span>
          </div>
          <div class="address__content-details">
            <p>{{item.address}}</p>
          </div>
        </div>
      </div>
      <!-- 默认地址 -->
      <div class="select-address">
          <div class="select-address__radio">
            <input type="radio" name="address" :value="index" v-model="currentValue"/>
            <div class="radio-icon" :class="[currentValue == index ? 'f-bgColor' : '']">
              <i class="mtui-icon-select"></i>
            </div>
            <p :class="[currentValue == index ? 'f-textColor' : '']">默认地址</p>
          </div>
          <div class="select-address__right">
            <div class="address-edit">
              <i class="mtui-icon-edit"></i>
              <p>编辑</p>
            </div>
            <div class="address-delete">
              <i class="mtui-icon-delete"></i>
              <p>删除</p>
            </div>
          </div>
      </div>
    </div>
    <router-link tag="div" class="footer f-bgColor" to="/addAddress">
      + 新增地址
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        currentValue:'0',
        list: [
          {
            name: '莫婷婷',
            phone: '123456789',
            address: '广东省 广州市 越秀区 越秀南路 185号 创举商务大厦 8楼'
          }, {
            name: '王以哲',
            phone: '123456789',
            address: '广东省 广州市 越秀区 越秀南路 185号 创举商务大厦 8楼'
          }, {
            name: '奥黛丽',
            phone: '123456789',
            address: '广东省 广州市 越秀区 越秀南路 185号 创举商务大厦 8楼'
          }
        ]
      }
    },
    watch: {
      currentValue(val) {
        console.log(val)
      },
    },
  }
</script>

<style lang="less" scoped>

@import '../assets/style/variable.less';

.main {margin: .2rem .24rem 0 .24rem;background: #fff;border-radius: .1rem;box-shadow:4px 0px 10px rgba(0,0,0,0.1);}

.address {
    position: relative;
    display: flex;
    padding: .37rem .27rem .31rem .26rem;
    box-sizing: border-box;
    .address-icon {
      display: inline-block;
      width: .27rem;
      margin-right: .23rem;
      i {
        display: inline-block;
        width: .27rem;
        height: .3rem;
      }
    }
    .address__content {
      display: inline-block;
      .address__content-info {
        width: 6rem;
        display: flex;
        justify-content: space-between;
        span {
          line-height: .48rem;
          font-size: .28rem;
          color: #333;
        }
      }
    }
    .address__content-details p {
      line-height: .48rem;
      font-size: .28rem;
      color: #333;
    }
  }

  /**** 分割线 start ****/
  .address:after, .address:before {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    height: .01rem;
    color: #ccc;
  }
  .address:before {
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

   /**** 选择默认地址 start ****/
  .select-address {
    width: 100%;;
    height: .8rem;
    line-height: .8rem;
    padding: 0 .34rem 0 .24rem;
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

    .select-address__right {
      float: right;
      display: flex;
      .address-edit {
        display: flex;
        align-items: center;
        color: #333;
        font-size: .28rem;
        margin-right: .54rem;
      }
      .address-delete {
        display: flex;
        align-items: center;
        color: #333;
        font-size: .28rem;
      }
    }
  }
  /**** 选择默认地址 end ****/

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
