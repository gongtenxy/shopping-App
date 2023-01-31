<template>
  <div class="docker">
    <span
      :class="{docker__item:true, docker__item_active:index===0}"
      v-for="(item,index) of dockerItems"
      :key="item.icon"
    >
      <span class="docker__item__iconfont iconfont" v-html="item.icon"></span>
      <span class="docker__item__text">{{ item.text }}</span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerItems = [
      { icon: '&#xe639;', text: '首页' },
      { icon: '&#xe60b;', text: '购物车' },
      { icon: '&#xe63e;', text: '订单' },
      { icon: '&#xe61b;', text: '我的' }
    ]
    return {
      dockerItems
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/mixins.scss';
@import '../style/variables.scss';
// 底部导航样式
.docker {
  width: 375rem;
  height: 49rem;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0 -1rem 1rem 0 #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 10rem;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $content-fontcolor;
    &__iconfont {
      font-size: 20rem;
    }
    &__text {
      margin-top: 2rem;
      font-family: PingFangSC-Regular;
      font-size: 20rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
    &_active {
      color: #1fa4fc;
    }
  }
}
</style>
