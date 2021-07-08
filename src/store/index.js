import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import mutations from './mutations.js'
import {ADDINFOGBVF} from './mutation-type.js'
import actions from './actions.js'
import getters from './getters.js'
import {homeFeature}  from './homeFeature.js'
import {buyCart} from './buyCart.js'

const store =  new Vuex.Store({
	state:{
		
	},
	mutations,
	actions,
	getters,
	modules:{
		homeFeature,
		buyCart,
	},
})
export default store
