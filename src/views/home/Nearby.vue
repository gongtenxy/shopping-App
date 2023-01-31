<template>
  <div class="container__nearby">
    <div class="container__nearby__title">附近店铺</div>
    <router-link :to="`/shop/${item.id}`" v-for="item of nearbyItems" :key="item.id">
      <ShopInfo :item="item" :showBorder="true" />
    </router-link>
  </div>
  <Toast v-if="isShow" :message="toastMessage" />
</template>
<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import Toast, { showToastEffect } from '../../components/Toast.vue'
import ShopInfo from '../../components/ShopInfo.vue'
// 附近店铺相关
const userNearbyEffect = (showToast) => {
  const nearbyItems = ref([])
  const getNearbyItems = async () => {
    try {
      // 接口, 获取数据
      const result = await get('/home/nearby')
      if (result.data.code === '0000') {
        nearbyItems.value = result.data.data
      } else {
        showToast('获取数据失败')
      }
    } catch (error) {
      showToast('请求接口失败!!!')
    }
  }
  getNearbyItems()
  return { nearbyItems }
}
export default {
  name: 'Nearby',
  components: { Toast, ShopInfo },
  setup () {
    // const nearbyItems = [
    //   {
    //     id: 1,
    //     imgUrl:
    //       'https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202211407079.png',
    //     title: '沃尔玛-1',
    //     tags: ['月售1万+', '起送¥0', '基础运费¥5'],
    //     notice: 'VIP尊享满89元减4元运费券（每月3张）'
    //   }
    // ]
    const { isShow, toastMessage, showToast } = showToastEffect()
    const { nearbyItems } = userNearbyEffect(showToast)
    return {
      isShow,
      toastMessage,
      nearbyItems
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.container__nearby {
  padding: 16rem 18rem;
  &__title {
    font-family: PingFangSC-Medium;
    font-size: 18rem;
    color: $content-fontcolor;
    margin-bottom: 14rem;
  }
}
</style>
