<template>
	<div class="toast" v-if="this.isShow">{{message}}</div>
</template>

<script>
	export default{
		name:'Toast',
		data(){
			return {
				message:'',
				isShow:false,
			}
		},
		methods:{
			show(message,duration){
				duration = duration || 2000
				this.isShow = true
				this.message = message
				setTimeout(()=>{
					this.isShow = false
					this.message = ''
				},duration)
			}
		}
	}
</script>

<style>
	.toast{
		position: absolute;
		margin: auto;
		top: 50%;
		left: 50%;
		padding: 5px 8px;
		transform: translate(-50%,-50%);
		background-color: #A3A3A5;
		z-index: 99;
	}
	
</style>
