<template>
	<div id="detail-nav">
		<nav-bar class="">
			<div slot="left" >
				<img class="backup" src="@/assets/img/mark/back.jpg" @click="routeBack"/>
			</div>
			<div slot="center" class="detail-nav-center">
				<div 
				:class="['detail-nav-item',{'active':index==page||index==currentIndex}]"
				v-for="(item,index) in titles"
				@click="turnPage(index)"
				>{{item}}</div>
			</div>
			<div slot="right"></div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import BackupTop from '@/components/common/backuptop/BackupTop.vue'
	export default{
		name:'DetailNavBar',
		components:{
			NavBar,
			BackupTop,
		},
		props:{
			currentIndex:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		data(){
			return {
				titles:['商品','参数','评论','推荐'],
				page:"",
				pageStr:"",
				goodId:String,
			}
		},
		methods:{
			routeBack(){
				this.$router.go(-1)
			},
			turnPage(index){
				switch(index) {
					case 0:
						this.pageStr = 'one'
					  break
					case 1:
						this.pageStr = 'two'
					  break
					case 2:
						this.pageStr = 'three'
					  break
					case 3:
						this.pageStr = 'four'
					  break
				}	
				this.$router.push('/'+'detail'+this.pageStr+'/'+this.goodId)
			},
		}
	}
</script>

<style scoped="">
	.detail-nav-center{
		width: calc(100%-120px);
		display: flex;
	}	
	.detail-nav-item{
		flex: 1;
		line-height: 44px;
		font-size: 18px;
	}
	
	.backup{
		display: inline-flexbox;
		width: 100%;
		height: 44px;
		opacity:0.5;	
	}
	
	.active{
		color: #FF69B4;
	}
	
</style>
