<template>
  <div class="shop-info">
    <div class="shop-info__left">
      <img class="shop-info__left__img" :src="item.imgUrl" alt="" />
    </div>
    <div
      :class="{ 'shop-info__right': true, 'shop-info__right--bordered ': showBorder }"
    >
      <div class="shop-info__right__title">
        {{ item.title }}
      </div>
      <div class="shop-info__right__tags">
        <div
          v-for="(tagItem, tagIndex) of item.tags"
          :key="tagIndex"
          class="shop-info__right__tags__item"
        >
          {{ tagItem }}
        </div>
      </div>
      <div class="shop-info__right__notice">
        {{ item.notice }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'showBorder']
}
</script>
<style lang="scss" scoped>
@import '../style/mixins.scss';
@import '../style/variables.scss';
.shop-info {
  display: flex;
  margin-bottom: 12rem;
  &__left {
    margin-right: 16rem;
    &__img {
      width: 56rem;
      height: 56rem;
    }
  }
  &__right {
    background-color: #fff;
    flex-grow: 1;
    &--bordered {
      border-bottom: 1rem solid #f1f1f1;
    }
    &__title {
      font-family: PingFangSC-Regular;
      font-size: 16rem;
      color: $content-fontcolor;
      margin-bottom: 8rem;
    }
    &__tags {
      display: flex;
      margin-bottom: 8rem;
      &__item {
        font-family: PingFangSC-Regular;
        font-size: 13rem;
        color: $content-fontcolor;
        margin-right: 16rem;
      }
    }
    &__notice {
      font-family: PingFangSC-Regular;
      font-size: 13rem;
      color: #e93b3b;
      margin-bottom: 12rem;
    }
  }
}
</style>
