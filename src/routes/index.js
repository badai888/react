import Home from '../view/Home'
import About from '../view/About'
import Index from '../view/index'

const routes=[
  {
    path:'/home',
    component:Home,
    meta:{
      needlogin:true
    }
  },
  {
    path:'/about',
    component:About,
    meta:{
      needlogin:false
    }
  },
  {
    path:'/index',
    component:Index,
    meta:{
      needlogin:false
    }
  }
]
export default routes