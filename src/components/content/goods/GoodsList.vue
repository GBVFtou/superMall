<template>
	<div class="goods-list">
		
		<goods-list-item v-for="(item,index) in goods" :key=index  :goods-item="item" ></goods-list-item>
		
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default{
		name:'GoodsList',
		components:{
			GoodsListItem,
		},
		data(){
			return {
			}
		},
		props:{
			goods:{
				type:Array,
				default(){
					return []
				},
			},
		},
	}
</script>

<style>
</style>
