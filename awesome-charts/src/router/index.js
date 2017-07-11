import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'
import Nev from '@/components/Nev'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/2',
      name: 'Hello2',
      component: Hello2
    },
    {
      path: '/nev',
      name: 'Nev',
      component: Nev
    }
  ]
})
