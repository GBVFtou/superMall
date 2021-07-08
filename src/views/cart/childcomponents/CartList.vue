<template>
	<div class="cart-list">
		<scroll class="content" ref="scroll">
			<cart-list-item 
			v-for="(item,index) in productList"
			:key = "index"
			:product="item"
			></cart-list-item>
		</scroll>
	</div>
</template>

<script>
	import Scroll from '@/components/common/scroll/Scroll.vue'
	
	import CartListItem from '@/views/cart/childcomponents/CartListItem.vue'
	
	export default{
		name:'CartList',
		components:{
			Scroll,
			CartListItem,
		},
		computed:{
			productList(){
				return this.$store.state.buyCart.productList
			}
		},
		activated() {
			this.$refs.scroll.refresh()
		},
		mounted() {
			console.log(this.$store.state.buyCart.productList)
		}
	}
</script>

<style scoped="">
	.cart-list{
		height: calc(100% - 49px - 44px);
	}
	.content{
		height: 100%;
		overflow: hidden;
	}
</style>
