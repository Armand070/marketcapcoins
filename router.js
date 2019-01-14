import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bitcoin from './views/Bitcoin.vue'
import Ethereum from './views/Ethereum.vue'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bitcoin',
      name: 'bitcoin',
      component: Bitcoin
    },
    {
      path: '/ethereum',
      name: 'ethereum',
      component: Ethereum
    },
    {
      path: '/event',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/show',
      name: 'event-show',
      component: EventShow
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    }
  ]
})
