<template>
  <div class="cart">
		<!-- 导航 -->
		<nav-bar class="nav-bar">
			<div slot="center">购物车{{cartLength}}</div>
		</nav-bar>
		<!-- 商品列表 -->
		<cart-list class="cart-list" ></cart-list>
		
		<!-- 底部汇总 -->
		<cart-bottom-bar></cart-bottom-bar>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
   
	import CartList from '@/views/cart/childcomponents/CartList.vue'
	import CartBottomBar from '@/views/cart/childcomponents/CartBottomBar.vue'
	
	
	export default {
    name:'Cart',
		components:{
			NavBar,
			CartList,
			CartBottomBar,
		},
		computed:{
			cartLength(){
				return this.$store.state.buyCart.productList.length
			}
		},
		mounted(){
			
		}
  }
</script>

<style scoped="">
	.cart{
		
	}
	.nav-bar{
		background-color: hotpink;
		color: white;
	}
	
</style>
