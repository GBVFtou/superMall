<template>
	<div class="detail-more-info" v-if="goodsMoreInfo.length!==0">
		<div class="top">
			<img :src="shopLogo"  />
			<div>{{goodsMoreInfo[0].name}}</div>
		</div>
		<div class="middle">
			<div class="left">
				<div class="left-top">
					<div>{{goodsMoreInfo[1].allCount | sellCountFilter}}</div>
					<div>总销量</div>
				</div>
				<div class="left-bottom">
					<div>{{goodsMoreInfo[1].num}}</div>
					<div>全部宝贝</div>
				</div>
			</div>
			<div class="right">
				<div class="right-top">
					<div>描述相符</div>
					<div :style="{color:(goodsMoreInfo[2].evaluation[0]<5?'green':'red')}"
							  class="evaluationNum"
					>{{goodsMoreInfo[2].evaluation[0]}}</div>
					<div :style="{backgroundColor:(goodsMoreInfo[2].evaluation[1]=='低'?'green':'red')}"
								class="evaluationFont"
					>{{goodsMoreInfo[2].evaluation[1]}}</div>
				</div>
				<div class="right-middle"> 
					<div>价格合理</div>
					<div :style="{color:(goodsMoreInfo[2].price[0]<5?'green':'red')}"
							  class="evaluationNum"
					>{{goodsMoreInfo[2].price[0]}}</div>
					<div :style="{backgroundColor:(goodsMoreInfo[2].price[1]=='低'?'green':'red')}"
								class="evaluationFont evaluationFontX"
					>{{goodsMoreInfo[2].price[1]}}</div>
				</div>
				<div class="right-bottom">
					<div>质量满意</div>
					<div :style="{color:(goodsMoreInfo[2].quality[0]<5?'green':'red')}"
							  class="evaluationNum"
					>{{goodsMoreInfo[2].quality[0]}}</div>
					<div :style="{backgroundColor:(goodsMoreInfo[2].quality[1]=='低'?'green':'red')}"
								class="evaluationFont"
					>{{goodsMoreInfo[2].quality[1]}}</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div @click="goToSee">进店逛逛</div>
			<!-- <a href="url">进店逛逛</a> -->  <!-- 外部路由 -->
			<!-- <button type="button" value="" :click="" >进店逛逛</button> -->
			<!-- <input type="button" value="提交" onClick="window.location.href=''"/> -->
		</div>
	</div>
</template>

<script>
	export default{
		name:"DetailMoreInfo",
		props:{
			goodsMoreInfo:{
				type:Array,
				default(){
					return []
				},
			},
		},
		data(){
			return {
				shopLogo:require('@/assets/img/mark/shopLogo.jpg')
			}
		},
		methods:{
			goToSee(){
				//window.open('https://www.baidu.com')     // 在新标签页打开
				window.location.href= this.goodsMoreInfo[3].url    //在原标签页打开
			},
		},
		mounted(){
		},
		watch:{
		},
		filters:{
			sellCountFilter(value){
				let res = value
				if (res>10000){
					res =  (res/10000).toFixed(1)+'万'
				}
				return res
			}
		},
	}
</script>

<style scoped="">
	.top{
		display: flex;
	}
	.top div{
		margin-top:10px;
		margin-left: 5px;
		font-size: 18px;
	}
	.top img{
		width: 10%;
		opacity: 0.5;
	}
	
	.middle{
		display: flex;
	}
	.middle .left ,.middle .right {
		/* width: 50%; */
		flex: 1;
		text-align: center;
		margin: auto;
	}
	.middle .left{
		display: flex;
	}
	.middle .left .left-top ,.middle .left .left-bottom{
		flex:1;
		
	}
	.middle .right .right-top,.middle .right .right-middle,.middle .right .right-bottom{
	/* 	flex-direction: row; */
		display: flex;
		justify-content:center;
	}
	.middle .right .right-top div,.middle .right .right-middle div,.middle .right .right-bottom div{
		
	}
	.evaluationNum{
		margin:0 5px;
	}
	.evaluationFont{
	  color: white;
	}
	.bottom{
		text-align: center;
		background-color: whitesmoke;
		width: 20%;
		margin: auto;
	}
	
	.evaluationFontX{
		margin-left: 23px;
	}
	
</style>
