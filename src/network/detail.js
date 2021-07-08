import axios from 'axios'
export function getDetail(id){
		return new Promise((reslove,reject)=>{
			axios.get('http://localhost:8080/detailgoods.json')
			.then(data=>{
				console.log(data)
				reslove(data.data[id])
			}) 
		})
}

export class Goods{
	constructor(detail) {
	    this.itemInfo = detail.itemInfo
			this.colums = detail.columns
			this.service = detail.service
	}
}

