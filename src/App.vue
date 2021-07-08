<template>
	<div id='app'>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<main-tab-bar v-if="isTabBar"></main-tab-bar>
	</div>
</template>

<script>
	import MainTabBar from '@/components/content/maintabbar/MainTabBar.vue'
	export default {
		name:'App',
		components:{
			MainTabBar
		},
		data(){
			return {
				isTabBar:true
			}
		},
		mounted() {
			this.$bus.$on('closeTabBar',()=>{
					this.isTabBar=false
			}),
			this.$bus.$on('openTabBar',()=>{
					this.isTabBar=true
			})
		}
	}
</script>

<style >
	*{
	
		
	}
</style>
