import  store  from './index.js'



const homeFeature = {
  state:{
    name:'GBVF',
		config:[
			{
				url:require('@/assets/img/homefeature/1.jpg'),
				link:'https://list.vip.com/100678455.html?ff=6|11|2|1|1',
				title:'玖姿JUZUI女装专场',
				discount:'1折起'
			},
			{
				url:require('@/assets/img/homefeature/2.jpg'),
				link:'https://list.vip.com/100698163.html?ff=6|11|2|1|2',
				title:'安奈儿JUZUI童装专场',
				discount:'2折起 | 部分商品单品牌折上在享受2件85折扣'
			},
			{
				url:require('@/assets/img/homefeature/3.jpg'),
				link:'https://list.vip.com/100676234.html?ff=6|11|2|1|3',
				title:'太平鸟女装-夏末特惠专场',
				discount:'1折起'
			},
			{
				url:require('@/assets/img/homefeature/4.jpg'),
				link:'https://list.vip.com/100678455.html?ff=6|11|2|1|4',
				title:'阿迪达斯集团-运动服专场',
				discount:'1折起'
			},
			{
				url:require('@/assets/img/homefeature/5.jpg'),
				link:'https://list.vip.com/100678455.html?ff=6|11|2|1|5',
				title:'曼妮芬内衣&家居服专场',
				discount:'1折起'
			},
			{
				url:require('@/assets/img/homefeature/6.jpg'),
				link:'https://list.vip.com/100678455.html?ff=6|11|2|1|6',
				title:'安踏ANTA热销爆款男女运动&儿童鞋服专场',
				discount:'1折起'
			},
			{
				url:require('@/assets/img/homefeature/7.jpg'),
				link:'https://list.vip.com/100678455.html?ff=6|11|2|1|7',
				title:'丽丽Lily商务女装秋上新专场',
				discount:'1折起'
			},
			{
				url:require('@/assets/img/homefeature/8.jpg'),
				link:'https://list.vip.com/100678455.html?ff=6|11|2|1|8',
				title:'枸年-宁夏好枸杞专场',
				discount:'1折起'
			},
		],
		
		
  },
  mutations:{
    setName(state,name){
      state.name = name
    },
  },
  getters:{
    fullName(state){
      return state.name + '偷'
    },
    getMainCounter(mainMoudule){
      return store.state.counter
    },
  },
}

export {
  homeFeature,
}
