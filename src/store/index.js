import { createStore } from 'vuex'

// 把购物车放入缓存
const setLocalCartData = (state) => {
  // 把购物相关数据解构出来/获取购物车数据
  const { cartData } = state
  // 对象转json字符串
  const cartDataString = JSON.stringify(cartData)
  // 保存到localStorage
  localStorage.cartData = cartDataString
}
// 从缓存中获取购物车数据
const getLocalCartData = () => {
  let result = {}
  // 判断localStorage里面是否有数据
  if (localStorage.cartData) {
    result = JSON.parse(localStorage.cartData)
  }
  // 返回数据
  return result
}
export default createStore({
  state: {
    // 从缓存中获取数据
    cartData: getLocalCartData()
  },
  getters: {},
  mutations: {
    // 购物车变更
    changeItemToCart (state, payload) {
      // 商铺Id，商品名称，商品id，商品详情，商品数量变化
      const { shopId, shopName, itemId, itemInfo, num } = payload
      // 判断有无shopId
      let shopInfo = {}
      if (state.cartData[shopId]) {
        // 如果通过shopId可直接获取商铺信息，则直接赋值
        shopInfo = state.cartData[shopId]
      } else {
        // 如果通过shopId不可获取商铺信息，则初始化
        shopInfo.shopName = shopName
        shopInfo.itemList = {}
      }
      // 判断有无itemId,有取，无加
      let item = {}
      if (shopInfo.itemList[itemId]) {
        item = shopInfo.itemList[itemId]
      } else {
        item = itemInfo
        item.count = 0
      }
      // 数量改变
      item.count += num
      // 数量为0清除
      if (item.count === 0) {
        delete shopInfo.itemList[itemId]
      } else {
        // 加一个选中状态
        item.checked = true
        // item加到shopInfo
        shopInfo.itemList[itemId] = item
      }
      // 判断商铺下购物车是否为空
      if (JSON.stringify(shopInfo.itemList) !== '{}') {
        // shopInfo加到cartData
        state.cartData[shopId] = shopInfo
      } else {
        delete state.cartData[shopId]
      }
      setLocalCartData(state)
    },
    // 切换选中状态
    changeItemChecked (state, payload) {
      const { shopId, itemId } = payload
      const item = state.cartData[shopId].itemList[itemId]
      item.checked = !item.checked
      setLocalCartData(state)
    },
    // 清空购物车
    clearCart (state, payload) {
      const { shopId } = payload
      state.cartData[shopId].itemList = {}
      setLocalCartData(state)
    },
    // 切换购物车是否全选(???全不选)
    setAllChecked (state, payload) {
      const { shopId } = payload
      const shopInfo = state.cartData[shopId]
      for (const key in shopInfo.itemList) {
        shopInfo.itemList[key].checked = true
      }
      setLocalCartData(state)
    }
  },
  actions: {},
  modules: {}
})
