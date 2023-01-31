<template>
  <!-- 首页轮廓 -->
  <div class="container">
    <Header />
    <Search />
    <Banner />
    <Nav />
    <Gap />
    <Nearby />
  </div>
  <!-- 底部导航 -->
  <Docker />
</template>
<script>
import Header from './Header.vue'
import Search from './Search.vue'
import Banner from './Banner.vue'
import Nav from './Nav.vue'
import Gap from './Gap.vue'
import Nearby from './Nearby.vue'
import Docker from '../../components/Docker.vue'
export default {
  name: 'Home',
  components: { Header, Search, Banner, Nav, Gap, Nearby, Docker }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
// 首页
.container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 49rem;
  overflow-y: auto;
  // background-color: olivedrab;
  // container_header
  // container_search
}
</style>
