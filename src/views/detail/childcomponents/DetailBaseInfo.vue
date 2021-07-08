<template>
	<div class="base-info" v-if="Object.keys(goodsInfo).length !==0">
		<div class="item-info" >
			<div class="price">{{'￥'+goodsInfo.itemInfo.price}}</div>
			<div class="old-price">{{'￥'+goodsInfo.itemInfo.oldPrice}}</div>
			<div class="desc" v-if="goodsInfo.itemInfo.desc">{{goodsInfo.itemInfo.desc}}</div>
		</div>  
		<div class="colums">
			<div class="sales">{{goodsInfo.colums[0]}}</div>
			<div class="collect ">{{goodsInfo.colums[1]}}</div>
			<div class="time">{{goodsInfo.colums[2]}}</div>
		</div>
		<div class="service">
			<div class="service-one">☑{{goodsInfo.service[0].icon}}</div>
			<div class="service-two">☑{{goodsInfo.service[1].icon}}</div>
			<div class="service-three">☑{{goodsInfo.service[2].icon}}</div>
			<div class="service-three">☑{{goodsInfo.service[3].icon}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"BaseInfo",
		props:{
			goodsInfo:{
				type:Object,
				default(){
					return {}
				},	
			},
		},
		data(){
			return {
			}
		},
		computed:{
		},
		created(){
		},
	}
</script>

<style scoped="">
	.item-info,.colums,.service{
		/* margin: 0px 40px; */
		display: flex;
		margin-top: 10px;
		
	}
	.price,.old-price,.desc{
		display: inline-flex;
		
	}
	.price{
		color: deeppink;
		font-size: 20px;
	}
	.old-price{
		margin-top: 6px;
		font-size: 14px;
		text-decoration: line-through;
	}
	.desc{
		color:#FF0000;
		margin-top: 2px;
		font-size: 18px;
		margin-right: 1px;
	}
	.colums{
		color: #696969;
		
	}
	.sales,.collect,.time{
		flex: 1;
	}
	.collect{
		text-align:center;
	}
	.time{
		text-align:center;
		/* margin-right: 30px; */
	}
	.service-one,.service-two,.service-three{
		flex: 1;
		
	}
	.service-three{
		text-align: center;
		padding-right: 10px;
	}
</style>
