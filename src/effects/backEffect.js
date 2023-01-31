import { useRouter } from 'vue-router'
export const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    console.log(1)
    router.back()
  }
  return handleBackClick
}
