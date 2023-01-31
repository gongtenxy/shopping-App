<template>
  <div class="container__banner">
    <img
      src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202191609589.png"
      alt=""
      class="container__banner__img"
    />
  </div>
</template>
<script>
export default {
  name: 'Banner'
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.container__banner {
  text-align: center;
  margin-top: 12rem;
  height: 88.8rem;
  &__img {
    width: 339rem;
    height: 86rem;
  }
}
</style>
