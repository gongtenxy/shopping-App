<template>
  <div class="container">
    <div class="container__portrait">
      <img
        class="container__portrait__img"
        src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202221429453.png"
        alt=""
      />
    </div>
    <div class="container__input">
      <input
        type="text"
        class="container__input__username"
        placeholder="请输入手机号"
        v-model="phone"
      />
      <input
        type="text"
        class="container__input__password"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div class="container__button">
      <button class="container__button__login" @click="handleLogin">
        登录
      </button>
    </div>
    <div class="container__content">
      <a
        href="javascript:;"
        class="container__content__a"
        @click="handleRegister"
        >立即注册</a
      >
      <span class="container__content__gap">|</span>
      <a href="jacvascript:;" class="container__content__a">忘记密码</a>
    </div>
  </div>
  <Toast v-if="isShow" :message="toastMessage" />
</template>
<script>
import axios from 'axios'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { showToastEffect } from '../../components/Toast.vue'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 登录相关
const userLoginEffect = (showToast) => {
  const data = reactive({
    phone: '',
    password: ''
  })
  const router = useRouter()
  const handleLogin = async () => {
    try {
      // 请求接口
      const result = await post('/user/login', {
        phone: data.phone,
        password: data.password
      })
      if (result.data.code === '0000') {
        // 记录登录状态
        localStorage.setItem('isLogin', 'true')
        localStorage.setItem('userId', result.data.data.id)
        // 跳转首页
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败，用户或密码不正确...')
      }
    } catch (error) {
      showToast('发送请求失败！')
    }
  }
  // 返回数据
  const { phone, password } = toRefs(data)
  return {
    phone,
    password,
    handleLogin
  }
}
// 注册相关
const userRegisterEffect = () => {
  const router = useRouter()
  // 立即注册
  const handleRegister = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegister }
}
export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { isShow, toastMessage, showToast } = showToastEffect()
    const { phone, password, handleLogin } = userLoginEffect(showToast)
    const { handleRegister } = userRegisterEffect()
    return {
      phone,
      password,
      handleLogin,
      handleRegister,
      isShow,
      toastMessage,
      showToast
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  // 头像
  &__portrait {
    margin-top: 120rem;
    margin-bottom: 40rem;
    text-align: center;
    &__img {
      width: 66rem;
      height: 66rem;
    }
  }
  // 输入框, 用户名/手机号 密码
  &__input {
    text-align: center;
    &__username,
    &__password {
      width: 295rem;
      height: 48rem;
      background: #f9f9f9;
      border: 1rem solid rgba(0, 0, 0, 0.1);
      border-radius: 6rem;
      margin-bottom: 16rem;
      font-family: PingFangSC-Regular;
      font-size: 16rem;
      color: rgba(0, 0, 0, 0.5);
      padding-left: 16rem;
      box-sizing: border-box;
    }
  }
  // 登录按钮
  &__button {
    margin-bottom: 16rem;
    text-align: center;
    &__login {
      width: 295rem;
      height: 48rem;
      background: #0091ff;
      box-shadow: 0 4rem 8rem 0 rgba(0, 145, 255, 0.32);
      border-radius: 4rem;
      font-family: PingFangSC-Regular;
      font-size: 16rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      line-height: 48rem;
    }
  }
  &__content {
    text-align: center;
    &__a {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      color: rgba(0, 0, 0, 0.5);
      letter-spacing: 0;
    }
    &__gap {
      margin: 0 12rem;
      font-family: PingFangSC-Regular;
      font-size: 12rem;
      color: rgba(0, 0, 0, 0.5);
      letter-spacing: 0;
    }
  }
}
</style>
