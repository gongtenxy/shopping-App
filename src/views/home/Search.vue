<template>
  <div class="container__search">
    <span class="iconfont container__search__iconfont">&#xe65c;</span>
    <input
      type="text"
      class="container__search__input"
      placeholder="山姆会员商店优惠商品"
    />
  </div>
</template>
<script>
export default {
  name: 'Search'
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.container__search {
  text-align: center;
  position: relative;
  color: #b7b7b7;
  &__input {
    width: 339rem;
    height: 32rem;
    background: #f5f5f5;
    border-radius: 16rem;
    padding-left: 44rem;
    box-sizing: border-box;
    &::-webkit-input-placeholder {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      line-height: 16rem;
    }
    &:-moz-placeholder {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      line-height: 16rem;
    }
    &::-moz-placeholder {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      line-height: 16rem;
    }
    &:-ms-input-placeholder {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      line-height: 16rem;
    }
  }
  &__iconfont {
    position: absolute;
    left: 34rem;
    top: 6rem;
    font-size: 16rem;
  }
}
</style>
