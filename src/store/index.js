import Vue from 'vue'
import Vuex from 'vuex'

import repositorios from './modules/repositorios';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    repositorios
  }
})
