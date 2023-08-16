import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AddRoom from '../components/AddRoom.vue'
import ChatComp from '../components/ChatComp.vue'
import LogIn from '../components/LogIn.vue'
import RoomComp from '../components/RoomComp.vue'

const routes = [
  {
    path: '/chat/:nickname/:roomid/:roomname',
    name: 'Chat',
    component: ChatComp
  },
  {
    path: '/room/:nickname',
    name: 'RoomList',
    component: RoomComp
  },
  {
    path: '/add-room',
    name: 'AddRoom',
    component: AddRoom
  },
  {
    path: '/',
    name: 'Login',
    component: LogIn
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
