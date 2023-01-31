<template>
  <div class="container">
    <!-- 订单头部 -->
    <div class="container__top">
      <div class="container__top__header">
        <div @click="handleBackClick" class="container__top__header__back">
          &#xe697;
        </div>
        <div class="container__top__header__text">确认订单</div>
      </div>
      <div class="container__top__receiver">
        <div class="container__top__receiver__left">
          <div class="container__top__receiver__left__title">收货地址</div>
          <div class="container__top__receiver__left__address">
            北京理工大学国防科技园2号楼10层
          </div>
          <div class="container__top__receiver__left__info">
            <div class="container__top__receiver__left__info__name">
              瑶妹（先生）
            </div>
            <div class="container__top__receiver__left__info__phone">
              18911024266
            </div>
          </div>
        </div>
        <div class="container__top__receiver__right">
          <div class="container__top__receiver__right__icon">&#xe694;</div>
        </div>
      </div>
    </div>
    <!-- 订单列表 -->
    <div class="container__order">
      <div class="container__order__shop-name">{{ shopName }}</div>
      <div class="container__order__info">
        <div
          v-for="item of cartItems"
          :key="item.id"
          class="container__order__info__item"
        >
          <div class="container__order__info__item__left">
            <img
              :src="item.imgUrl"
              alt=""
              class="container__order__info__item__left__image"
            />
          </div>
          <div class="container__order__info__item__right">
            <div class="container__order__info__item__right__name">
              {{ item.name }}
            </div>
            <div class="container__order__info__item__right__price">
              <div class="container__order__info__item__right__price__left">
                ¥{{ item.promotionPrice }} x {{ item.count }}
              </div>
              <div class="container__order__info__item__right__price__right">
                ¥{{ (item.promotionPrice * item.count).toFixed(2) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单底部 -->
    <div class="container__bottom">
      <div class="container__bottom__left">
        实付金额
        <span class="container__bottom__left__total-price">¥62</span>
      </div>
      <div class="container__bottom__right">提交订单</div>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useBackRouterEffect } from '../../effects/backEffect'
const useOrderEffect = () => {
  const store = useStore()
  const route = useRoute()
  // 商铺ID
  const shopId = route.params.shopId
  // 购物车数据
  const cartData = store.state.cartData
  // 商铺名称
  const shopName = cartData[shopId].shopName
  // 购物车商品列表
  const cartItems = cartData[shopId].itemList
  return { shopName, cartItems }
}
export default {
  name: 'OrderConfirmation',
  setup () {
    const { shopName, cartItems } = useOrderEffect()
    const handleBackClick = useBackRouterEffect()
    return { shopName, cartItems, handleBackClick }
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 49px;
  background-color: #f8f8f8;
  &__top {
    &__header {
      height: 139px;
      background-image: linear-gradient(
        0deg,
        rgba(0, 145, 255, 0) 4%,
        #0091ff 50%
      );
      background-repeat: no-repeat;
      &__back {
        font-size: 24px;
        color: #fff;
        position: absolute;
        left: 18.5px;
        top: 18px;
      }
      &__text {
        text-align: center;
        padding-top: 21px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #ffffff;
      }
    }
    &__receiver {
      width: 339px;
      height: 111px;
      background-color: #fff;
      border-radius: 4px;
      margin: 0 auto;
      position: relative;
      top: -74px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      &__left {
        &__title {
          font-family: PingFangSC-Medium;
          font-size: 16px;
          color: #333333;
          margin-bottom: 16px;
        }
        &__address {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          margin-bottom: 8px;
        }
        &__info {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #666666;
          display: flex;
          &__name {
            margin-right: 6px;
          }
        }
      }
      &__right {
        display: flex;
        align-items: center;
        font-size: 17px;
        color: #666;
      }
    }
  }
  &__order {
    border-radius: 4px;
    width: 339px;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
    top: -58px;
    padding: 16px;
    padding-bottom: 6px;
    box-sizing: border-box;
    &__shop-name {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #333333;
      margin-bottom: 16px;
    }
    &__info {
      &__item {
        display: flex;
        margin-bottom: 6px;
        &__left {
          &__image {
            width: 46px;
            height: 46px;
            margin-right: 16px;
          }
        }
        &__right {
          flex-grow: 1;
          &__name {
            margin-top: 2px;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #333333;
            margin-bottom: 8px;
          }
          &__price {
            display: flex;
            justify-content: space-between;
            &__left {
              font-family: PingFangSC-Regular;
              font-size: 28px;
              color: #e93b3b;
              transform: scale(50%, 50%);
              transform-origin: left top;
              &::first-letter {
                font-size: 20px;
              }
            }
            &__right {
              font-family: PingFangSC-Regular;
              font-size: 28px;
              color: #000000;
              text-align: right;
              transform: scale(50%, 50%);
              transform-origin: right top;
              &::first-letter {
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
  &__bottom {
    display: flex;
    width: 375px;
    height: 49px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    &__left {
      padding-left: 24px;
      box-sizing: border-box;
      width: 277px;
      background-color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333333;
      line-height: 49px;
      &__total-price {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #333333;
        text-align: right;
        line-height: 49px;
      }
    }
    &__right {
      width: 98px;
      background: #4fb0f9;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #ffffff;
      text-align: center;
      line-height: 49px;
    }
  }
}
</style>
