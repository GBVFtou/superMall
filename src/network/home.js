import {request} from '@/network/request.js'
import axios from 'axios'

export function getHomeMultidata(){
	return request({
		url:'/home/multidata'
	})
}


export function getHomeGoods(type,){
	return request({
		url:'/home/data',
		params:{
			type,
			page,
		},
	})
}

export function getHomeGoodsX(type){
	return new Promise((reslove,reject)=>{
		axios.get('homegoods.json').then(data=>{
			console.log(data)
			reslove(data.data)
		}) 
	})
}








