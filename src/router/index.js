import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './../views/HomePage.vue'
import CasinoPage from '../views/CasinoPage.vue'
import BallBet from '../views/BallBet.vue'
import PromotionPage from '../views/PromotionPage.vue'
import ContractPage from '../views/ContractPage.vue'
import BacaraPage from '../views/BacaraPage.vue'
import GameOnlinePage from '../views/GameOnlinePage.vue'
import SlotOnlinePage from '../views/SlotOnlinePage.vue'
import FireFishPage from '../views/FireFishPage.vue'
import DooBallPage from '../views/DooBallPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      route: 'Home',
      component: HomePage,
      name: '',
      redirect: ''
    }
  ]
})

router.addRoute('HomePage', { path: '', component: HomePage })
router.addRoute('CasinoPage', { path: encodeURI(`/คาสิโนออนไลน์`), component: CasinoPage })
router.addRoute('BallBet', { path: encodeURI(`/แทงบอลออนไลน์`), component: BallBet })
router.addRoute('PromotionPage', { path: encodeURI(`/โปรโมชั่น`), component: PromotionPage })
router.addRoute('ContractPage', { path: encodeURI(`/ติดต่อเรา`), component: ContractPage })
router.addRoute('BacaraPage', { path: encodeURI(`/บาคาร่า`), component: BacaraPage })
router.addRoute('GameOnlinePage', { path: encodeURI(`/เกมพนันออนไลน์`), component: GameOnlinePage })
router.addRoute('SlotOnlinePage', { path: encodeURI(`/สล็อตออนไลน์`), component: SlotOnlinePage })
router.addRoute('FireFishPage', { path: encodeURI(`/ยิงปลา`), component: FireFishPage })
router.addRoute('DooBallPage', { path: encodeURI(`/ดูบอลออนไลน์`), component: DooBallPage })

export default router
