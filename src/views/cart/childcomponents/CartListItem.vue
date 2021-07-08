<template>
	<div class="item">
		<div class="item-selector">
			<check-button   :isChecked="product.isChecked" @click.native="checkItem"></check-button>
		</div>
		<div class="item-img">
			<img :src="this.product.image" alt="商品图片"/>
		</div>
		<div class="item-info">
			<div class="title">{{this.product.title}}</div>
			<div class="describe">{{this.product.describe}}</div>
			<div class="item-bottom">
				<div class="price">{{this.product.price}}</div>
				<div class="count">{{this.product.count}}</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import CheckButton from '@/components/content/checkbutton/CheckButton.vue'
	export default{
		name:'CartListItem',
		components:{
			CheckButton,
		},
		props:{
			product:{
				type:Object,
				default(){
					return {}
				},
			}
		},
		data(){
			return {
			}
		},			
		methods:{
			checkItem(){
				if(this.product.isChecked){
					this.product.isChecked =false
				}else{
					this.product.isChecked =true
				}
				console.log(this.product.isChecked)
			},
		},
		mounted() {
			console.log(this.product)
		}
	}
</script>

<style scoped="">
	  *{
			margin: 0px;
			padding: 0px;
		}
		.item{
			display: flex;
			width: calc(100%-10px);
			height: 100px;
			padding: 5px;
			border-bottom: #ccc solid 1px;
		}
		.item-selector{
			width: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.item-img{
			width: 80px;
			height: 100%;
		}
		.item-img img{
			width: 80px;
			height: 100%;
			display: block;
			border-radius:5px ;
		}
		.item-info{
			width: calc(100% - 40px - 80px);
			position: relative;
			font-size: 17px;
			color: #333;
			padding: 5px 10px;
			overflow: hidden;
		}
		
		.describe{
			font-size: 14px;
			color: #666;
			margin-top: 15px;
		}
		.title .describe{
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.item-bottom{
			position: absolute;
			display: flex;
			width: calc(100% - 10px);		
			bottom: -2px;
			margin-top: 10px;
		}
	
		.price ,.count{
			flex: 1;
		}
		.price{
			color: coral;
		}
		.count{
			text-align: end;
		}
		
		
</style>
