<template>
	<div v-swiper:mySwiper="swiperOptions" >
	  <div class="swiper-wrapper">
	    <div class="swiper-slide" :key="index" v-for="(image,index) in imageList">
	      <img :src="image" @load="refreshImg" data-swiper-parallax-scale="0.15">
	    </div>
	  </div>
	  <div class="swiper-pagination" slot="pagination"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</div>
</template>

<script>
	// 局部引入·
	// import 'swiper/swiper-bundle.css'
	// import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import img01 from '@/assets/img/carousel/aisi.jpg'
	import img02 from '@/assets/img/carousel/lufei.jpg'
	import img03 from '@/assets/img/carousel/qiaoba.jpg'
	import img04 from '@/assets/img/carousel/yingyan.jpg'
	
	export default{
		name:'Swiper3',
		props:{
			imageList:{
			  type:Array,
				default(){
					return []
				}
			},
		},
		data() {
		  return {
		    swiperOptions: {
		      pagination: {
						el:'.swiper-pagination',
						type:'bullets',
							clickable :true, 
		      },
					navigation: {
					  nextEl: '.swiper-button-next',
					  prevEl: '.swiper-button-prev',
						hideOnClick: false,
					},
					
					initialSlide :0,	//出事显示第1个
					direction : 'horizontal',  // 垂直vertical
					speed:500,  //速度
					autoplay : {  
					  delay:1000       //切换延迟
					},
					//grabCursor : true,  //抓手形状 5.4.3 失效
					//setWrapperSize :true, //设置display flex
					//网格
					slidesPerView: "auto",
					slidesPerView:1,   //分组显示 auto ==1  
					//反弹 free模式
					freeMode : false,  //惯性反弹
					freeModeMomentum : true, //鼠标移走
					freeModeMomentumVelocityRatio : 1,
					freeModeMomentumRatio:1,
					freeModeMomentumBounce : true,//动量反弹。false时禁用free模式下的动量反弹，slides通过惯性滑动到边缘时，无法反弹。注意与resistance（手动抵抗）区分。
					freeModeMomentumBounceRatio:5,//值越大产生的边界反弹效果越明显，反弹距离越大。
					freeModeSticky : true,//自动贴合
					//freeModeMinimumVelocity : 1,//触发FreeMode惯性的最小触摸速度（px/ms），低于这个值不会惯性滑动  容易边界停留
					//环路
					loop : false,
					loopPreventsSlide: false,//默认true，阻止
					//事件
					// on: {
					//   touchStart: function(swiper,event){
					//     console.log(swiper)
					//   },
					// },
					//centeredSlides : true, //分组多个生效
					// a11y : {
					//       prevSlideMessage: 'Previous slide',
					//       nextSlideMessage: 'Next slide',
					//       firstSlideMessage: 'This is the first slide',
					//       lastSlideMessage: 'This is the last slide',
					//       paginationBulletMessage: 'Go to slide {{index}}',
					//       notificationClass: 'swiper-notification',
					//     },
					
					// spaceBetween:30,    //页面间隙
					// centeredSlides:true, //页面居中
					// watchSlidesProgress : true,    //显示每个slid进度
					// watchSlidesVisibility : true,  // 进度可视化
					//loop: true, // 循环模式选项
			
				}
		  }
		},
		mounted() {
		  // console.log('Current Swiper instance object', this.mySwiper)
			
		},
		methods:{
			refreshImg(){
				this.$bus.$emit('refreshImg')
			}
		},
	}
	
</script>

<style >
	.swiper-container{
	    --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
	    --swiper-navigation-color: black;/* 单独设置按钮颜色 */
	    --swiper-navigation-size:30px;/* 设置按钮大小 */ 
	}
	
	.swiper-slide{
	
	} 
	.swiper-pagination{
		text-align: center;
	}
	.swiper-slide img{
		height: 400px;
	}
	.swiper-button-prev,.swiper-button-next{
		
	}	
	.swiper-button-next{
	}
</style>
