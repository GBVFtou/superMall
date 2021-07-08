<template>
	<div class="detail-bottom-bar">
		<div class="left">
			<div class="left-start">
				<img src="@/assets/img/detail/detailbottombar/01.png"/>
				<div>客服</div>
			</div>
			<div class="left-middle">
				<img src="@/assets/img/detail/detailbottombar/02.png"/>
				<div>店铺</div>
			</div>
			<div class="left-end">
				<img src="@/assets/img/detail/detailbottombar/03.png"/>
				<div>收藏</div>
			</div>
		</div>
		<div class="right">
			<div class="right-start" @click="addToCart">加入购物车</div>
			<div class="right-end">购买</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"DetailBottomBar",
		methods:{
			addToCart(){
				this.$emit('addToCart')
			}
		}
		
	}
</script>

<style scoped="">
  .detail-bottom-bar{
		position: fixed;
		height: 49px;
		position: fixed;
		bottom: 5px;
		left: 0%;
		right: 0%;
		width: 100%;
		display: flex;
		
		
		
	}
	.left,.right{
		width: 50%;
		display: flex;
	}
	.left{
		background-color: #F2F5F8;
	
	}
	.left-start,.left-middle,.left-end{
		width: 33%;
		text-align: center;
		font-size: 14px;
	}
	.right{
		
	}
	.right-start,.right-end{
		width: 50%;
		font-size: 16px;
		line-height: 49px;
		text-align: center;
	}
	.right-start{
		background-color: orange;
	}
	.right-end{
		background-color: deeppink;
		color: white;
	}
	img{
		margin-top: 5px;
		width: 30%;
	}
	
	
</style>
