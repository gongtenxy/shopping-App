<template>
  <div class="container__header">
    <div class="container__header__left">
      <span class="iconfont container__header__left__position-iconfont"
        >&#xe70a;</span
      >
      <span class="container__header__left__position-text"
        >北京理工大学国防科技园2号楼10层</span
      >
    </div>
    <div class="container__header__right">
      <span class="iconfont container__header__right__notice-iconfont"
        >&#xe64c;</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.container__header {
  display: flex;
  justify-content: space-between;
  padding: 16rem 19.2rem;
  &__left {
    width: 310rem;
    @include ellipsis;
    &__position-iconfont {
      font-size: 16rem;
      margin-right: 9.7rem;
    }
    &__position-text {
      font-family: PingFangSC-Regular;
      font-size: 16rem;
      color: $content-fontcolor;
    }
  }
  &__right__notice-iconfont {
    font-size: 16rem;
  }
}
</style>
