<template>
	<div class="recommend">
		<div v-for="item in recommends" 
		:class="['recommend-item','font-color-init',{'font-color-active':isActive}]" 
		@click="turnActive"
		>
			<a :href="item.link">
				<img :src="item.image" alt="" />
				<div >{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'RecommendView',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				isActive:false
			}
		},
		methods:{
			turnActive(){
				this.isActive = true
			}
		}
	}
</script>

<style>
	.recommend{
		margin: 0;
		margin-top: 10px;
		padding: 0;
		width: 100%;
	}
	.recommend-item{
		position: relative;
		display: inline-block;
		width: 25%;
		text-align: center;
	}
	.recommend-item a {
		position: relative;
		bottom: 0px;
	}
	.recommend-item a img{
		position: relative;
		height: 50px;
	}
	.recommend-item a div{
		height: 20px;
		font-size: 12px;
	}
	.font-color-init{
		color: blue;
	}
	.font-color-active{
		color:mediumpurple;
	}
	
</style>
