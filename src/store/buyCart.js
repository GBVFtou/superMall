import  store  from './index.js'
const buyCart = {
  state:{
		productList:[]
  },
  mutations:{
    addCounter(state,payLoad){
			payLoad.count++
		},
		addCart(state,payLoad){
			state.productList.push(payLoad)
		}
  },
	actions:{
		addToCart(context,loadProduct){
			return new Promise((resolve,reject)=>{
				loadProduct.isChecked = true
				let oldProduct = context.state.productList.find((item)=>item.id===loadProduct.id)
				if(oldProduct){
					context.commit('addCounter',oldProduct)
					resolve('当前商品数量+1')
				}else{
					loadProduct.count = 1
					context.commit('addCart',loadProduct)
					resolve('添加了新的商品')
				}
				console.log(context.state.productList)
			})
			
		},
		
	},
  getters:{

  },
}

export {
  buyCart,
}