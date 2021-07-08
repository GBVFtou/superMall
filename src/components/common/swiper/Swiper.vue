<template>
	<div class="slide">
		<div class="slide-view">
			<ul>
				<li  v-for="(img,index) in imgArray " v-show="index===mark"   >
					<img v-bind:src="img" @load="imageLoad" >					
				</li>
			</ul>
		</div>
		<div class="slide-bar">
			<swiper-bar-item v-for="(item,index) in imgArray" :key= "item" :class="[{'slide-bar-active':index===mark},'swiper-bar-item']" :imgIndex='index' @getIndex=changeImg ></swiper-bar-item>
		</div>
		<div class="slide-arrow">
			<swiper-arrow class="slide-arrow-left" :arrowNumber=-1 @getNum=moveImg></swiper-arrow>
			<swiper-arrow class="slide-arrow-right":arrowNumber=1  @getNum=moveImg></swiper-arrow>
		</div>
		
	</div>
 
	
</template>

<script>
	import {getHomeMultidata} from '@/network/home.js'
	import SwiperBarItem from '@/components/common/swiper/SwiperBarItem.vue'
	import SwiperArrow from '@/components/common/swiper/SwiperArrow.vue'
	export default {
		name:'Swiper',
		data(){
			return {
				mark:2,
				imgArray:[],
				imgList:null,
				isLoad:false,
			}
		},
		methods:{
	    autoPlay(){
	    	this.mark++
	    	if(this.mark > this.imgArray.length-1){
	    		this.mark = 0
	    	}
	    }, 
	    play(){
				setInterval(this.autoPlay,1000)
	    }, 
			changeImg(imgIndex){
				this.mark = imgIndex
			},
			moveImg(arrowNumber){
				if(arrowNumber>0 && this.mark<3){
					this.mark++
				}
				if(arrowNumber<0 && this.mark>0){
					this.mark--
				}
			},
			imageLoad(){
				
				if(!this.isLoad){	
					this.$emit('swiperImageLoad')
					this.isLoad = true 
				}
			}
		},
		components:{
			SwiperBarItem,
			SwiperArrow,
		},
		created(){
			this.play()
			getHomeMultidata().then(res=>{
				this.imgList = res.data.data.banner.list
				this.imgArray.push(this.imgList[0].image)
				this.imgArray.push(this.imgList[1].image)
				this.imgArray.push(this.imgList[2].image)
				this.imgArray.push(this.imgList[3].image)
			})
		},
	}
</script>

<style scoped>
	*{
		margin: 0px;
		padding: 0;
	}
	.slide{
		position: relative;
		width: 100%;
		height: 180px;
		margin: 0 auto;
	
		
		
	
		
	}
	.slide-view{
		position: absolute;
		width: 100%;
		height: 180px;
		z-index: 1;
	}
	.slide ul{
		position: relative;
		list-style: none;
	
	}
		
	.slide li{
		position: absolute;
		margin-top: 0;
		width: 100%;
		text-align: center;
		
	}
	.slide img{
		position: relative;
		width: 80%;
		height: 180px;
		
	}
	
	.slide-bar{
		position: absolute;
		width: 100%;
		height: 20px;
		text-align: center;
    bottom: 5px;
		z-index: 2;
		
	}
	
	.swiper-bar-item{
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: 1px solid;
		background-color: white;
		border-color: gray;
		display: inline-block;
		padding: 0px;
		margin-right: 10px;
		
	}
	.slide-bar .slide-bar-active{
		background-color: orange;
	} 
	
	.slide-arrow{
		position: relative;
		display: block;
		top: 45%;
	}
	.slide-arrow-left{
		position: absolute;
		left: 0px;
		z-index: 2;
		
		width: 0;
		height: 0;
		border: 15px solid #fff;
		border-right-color: #7FFF00;
	}
	.slide-arrow-right{
		position: absolute;
		right: 0px;
		z-index: 2;
		
		width: 0;
		height: 0;
		border: 15px solid #fff;
		border-left-color: #7FFF00;
		
	}
	
	
	

	
	
</style>
