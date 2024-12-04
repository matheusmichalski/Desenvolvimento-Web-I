import { createRouter, createWebHistory } from 'vue-router'
import Cabecalho from '@/components/global/HeaderVue.vue'
import Banner from '@/components/BannerVue.vue'
import Info from '@/components/TopicsVue.vue'
import Conteudo from '@/components/MainVue.vue'
import Blocks from '@/components/TextBlocksVue.vue'
import Subscribe from '@/components/SubscribeVue.vue'
import Rodape from '@/components/global/FooterVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cabecalho',
      name: 'cabecalho',
      component: Cabecalho,
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner,
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
    {
      path: '/text',
      name: 'text',
      component: Text,
    },
    {
      path: '/conteudo',
      name: 'conteudo',
      component: Conteudo,
    },
    {
      path: '/blocks',
      name: 'blocks',
      component: Blocks,
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: Subscribe,
    },
    {
      path: '/rodape',
      name: 'rodape',
      component: Rodape,
    },
  ],
})

export default router
