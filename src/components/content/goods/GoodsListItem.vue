<template>
	<div class="goods-item">
		<img v-lazy="goodsItem.imgUrl" @load="imageLoad" @click="itemClick"  alt="" />
		<div class="goods-money">
			<span class="goods-title">{{ goodsItem.title }}</span>
			<span class="goods-reduced-price">{{ getReducedPrice }}</span>
			<span class="goods-original-price">{{ gerOriginalPrice }}</span>
			<span class="goods-discount">{{ goodsItem.discount }}</span>
		</div>
		<div class="goods-msg">
			<span>{{ goodsItem.msg }}</span>
		</div>
		
	</div>

</template>

<script>
	export default{
		name:'GoodsListItem',
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			},
		},
		computed:{
			getReducedPrice(){
				return '￥'+ this.goodsItem.reducedPrice
			},
			gerOriginalPrice(){
				return '￥'+ this.goodsItem.originalPrice
			}
		},
		methods:{
			imageLoad(){
				this.$bus.$emit('itemImageLoad')
			},
			itemClick(){
				this.$router.push('/detailone/'+this.goodsItem.id)
				
				// 参数在链接上显示
				// this.$router.push({path: '/details', query: {id: 666}});
				// this.$route.query.id;
				 
				// 参数不在链接上显示
				// this.$router.push({ name: 'details', params: { userId: 123 }});
				// {{this.$route.params.userId}};
				 
				// 注：采用params在必须要要在路由上配置name，否则undefined
				// routes: [
				//      {
				//           path: '/details',
				//           name: 'details',
				//           component: resolve => require(['../components/details'], resolve)
				//      }

			}
		}
		
		
	}
</script>

<style>
	.goods-item{
		display: inline-block;
		width: 48%;
		margin: 1%;
	}
	.goods-money{
		display: inline-flex;
		margin: 4px;	
	}
	.goods-msg{
		color: dimgray;
		font-size: 12px;
	}
	.goods-item img{
		width: 100%;
		height: 160px;
	}
	.goods-title{
		background: -webkit-linear-gradient(left,#FF69B4,mediumpurple);
		color: white;
		display: inline-block;
		font-size: 12px;
		line-height: 20px;
		height: 20px;
		border: 1px solid;
		border-radius: 35%;
		
		
	}
	.goods-reduced-price{
	
		font-size: 20px;
		line-height: 20px;
		height: 	20px;
	}
	.goods-original-price{
		text-decoration: line-through;
		padding: 3px;
		font-size: 12px;
		margin-right: 2px;
		color: gray;
	}
	.goods-discount{
		padding: 3px;
		font-size: 12px;
		color: gray;
	}
	
</style>
