<template>
	<span @click="sendNum"></span>
</template>

<script>
	export default{
		name:'SwiperArrow',
		props:['arrowNumber'],
		methods:{
			sendNum(){
				this.$emit('getNum',this.arrowNumber)
			}
		}
	}
</script>

<style>
</style>
