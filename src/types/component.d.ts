/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import CommonSwiper from '@/components/CommonSwiper.vue'
import CommonGuess from '@/components/CommonGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    CommonSwiper: typeof CommonSwiper
    CommonGuess: typeof CommonGuess
  }
}
