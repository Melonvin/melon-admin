import Vue from 'vue'
import 'normalize.css' // css reset

// element-ui
import Element from 'element-ui'
import '@/styles/element-variables.scss'

// 全局样式
import '@/styles/global.scss'

Vue.use(Element)

const melon = {
  async install() {

  }
}

Vue.use(melon)