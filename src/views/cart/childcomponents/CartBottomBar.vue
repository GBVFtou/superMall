<template>
	<div class="cart-bottom-bar">
		<div class="check-content">
			<check-button :is-checked="isSelectAll" @click.native="checkItem"></check-button>
			<span>全选</span>
		</div>
		<div class="price">合计:￥{{totalPrice}}</div>
		<div class="calculate"@click="calcClick">去计算{{checkLength}}</div>
	</div>
</template>

<script>
	import CheckButton from '@/components/content/checkbutton/CheckButton.vue'
	
	import {mapState} from 'vuex'
	export default{
		name:"CartBottomBar",
		components:{
			CheckButton,
		},
		data(){
			return {
				
			}
		},
		computed:{
			...mapState({
			  productList:state=>state.buyCart.productList
			}),
			totalPrice(){
				return this.productList.filter(item=>{
					return item.isChecked===true
				}).reduce((preValue,item)=>{
					return preValue+item.price*item.count
				},0)
			},
			checkLength(){
				return this.productList.filter(item=>{
					return item.isChecked===true
				}).length
			},
			isSelectAll(){
				return !(this.productList.filter(item=>!item.isChecked).length) && this.productList.length !==0
			},
		},
		methods:{
			checkItem(){
				if(this.isSelectAll){
					this.productList.forEach(item=>item.isChecked = false)
				}else{
					this.productList.forEach(item=>item.isChecked = true)
					/* this.$store.state.buyCart.productList
					.filter(item=>!item.isChecked)
					.map((item,index,ary)=>{
						return item.isChecked = true
					}) */
				}
			},
			calcClick(){
				if(this.productList.length === 0){
					this.$toast.show('请选择要购买的商品',2000)
				}
			}
		}
	}
</script>

<style scoped="">
	.cart-bottom-bar{
		position: absolute;
		left: 0px;
		right: 0px;
		top: calc(100vh - 44px - 49px);
		display: flex;
		height: 40px;
		background-color: #eee;
		font-size: 16px;
	}
	.price,.check-content,.calculate,.check-button{
		align-items: center;
		justify-content: center;
		display: flex;
	}
	.check-content{
		width: 90px;
	}
	.price{
		flex:1;
		text-align: center;
	}
	.calculate{
		width: 90px;
		font-size: 20px;
		color: #FF6600;
	}
	.check-button{
		width: 30px;
		margin-right: 5px;
	}	
	
	
</style>
