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
        class="container__input__username container__input__item"
        placeholder="请输入手机号"
        v-model="phone"
      />
      <input
        type="text"
        class="container__input__password container__input__item"
        placeholder="请输入密码"
        v-model="password"
      />
      <input
        type="text"
        class="container__input__confirm-password container__input__item"
        placeholder="确认密码"
        v-model="confirmPassword"
      />
    </div>
    <div class="container__button">
      <button class="container__button__register" @click="handleRegister">
        注册
      </button>
    </div>
    <div class="container__content">
      <a href="javascript:;" class="container__content__a" @click="handleLogin"
        >已有账号去登录</a
      >
    </div>
  </div>
  <Toast v-if="isShow" :message="toastMessage" />
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { showToastEffect } from '../../components/Toast.vue'
const userRegisterEffect = (showToast) => {
  const data = reactive({
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const router = useRouter()
  const handleRegister = async () => {
    if (data.password !== data.confirmPassword) {
      showToast('密码不一致!')
    } else {
      // 调用接口
      try {
        // 非空校验
        if (data.phone === '') {
          showToast('手机号不能为空！')
          return
        }
        if (data.password === '') {
          showToast('密码不能为空！')
          return
        }
        if (data.confirmPassword === '') {
          showToast('确认密码不能为空！')
          return
        }
        if (data.confirmPassword !== data.password) {
          showToast('密码不一致！')
          return
        }
        // 调用数据逻辑
        const result = await post('/api/user/register', {
          phone: data.phone,
          password: data.password
        })
        if (result.data.code === '0000') {
          // 注册成功自动登录
          localStorage.setItem('isLogin', 'true')
          router.push({ name: 'Home' })
        } else {
          showToast('注册失败...')
        }
      } catch (error) {
        showToast('发送请求失败!')
      }
    }
  }
  // 返回数据
  const { phone, password, confirmPassword } = toRefs(data)
  return {
    phone,
    password,
    confirmPassword,
    handleRegister
  }
}
const userLoginEffect = () => {
  const router = useRouter()
  const handleLogin = () => {
    router.push({ name: 'Login' })
  }
  return { handleLogin }
}
export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { isShow, toastMessage, showToast } = showToastEffect()
    const { phone, password, confirmPassword, handleRegister } =
      userRegisterEffect(showToast)
    const { handleLogin } = userLoginEffect()
    return {
      handleLogin,
      handleRegister,
      phone,
      password,
      confirmPassword,
      isShow,
      toastMessage
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
    &__item {
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
    &__register {
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
  }
}
</style>
