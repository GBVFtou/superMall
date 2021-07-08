import axios from 'axios'

export function request(config){
	const instance = axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout:5000
	})
	instance.interceptors.request.use(config => {
		/* console.log('发送成功') */
		return config
	},err => {
		console.log(err)
	})
	instance.interceptors.response.use(res => {
		// console.log('返回成功')
		return res
	},err =>{
		console.log(err)
	})

	return instance(config.url)
}



