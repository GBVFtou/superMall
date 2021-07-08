<template>
	<span @click="sendIndex"></span>
</template>

<script>
	export default{
		name:'SwiperBarItem',
		props:['imgIndex'],
		methods:{
			sendIndex(){
				this.$emit('getIndex',this.imgIndex)
			}
		}
	}
</script>

<style>
</style>
