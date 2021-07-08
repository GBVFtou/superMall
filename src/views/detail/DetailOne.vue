<template>
	<div id="detail">
		<detail-nav-bar 
			ref="detailNavBar"  
			:currentIndex="currentIndex" 
			class="detail-nav-bar"
		></detail-nav-bar>
		<scroll :probe-type="3" 
						class="content"
						ref="scroll"
						@sendPosY="turnNavBar"
						@pullingUp="pullingUpRefresh"
						>
			<swiper3 ref="swiper3" :imageList="imageList"  ></swiper3>
			<detail-base-info  
				ref="detailBaseInfo"
				:goods-info="goodsInfo">
			</detail-base-info>
			<hr />
			<detail-more-info 
				ref="detailMoreInfo"
				:goods-more-info="goodsMoreInfo"
				class="detail-more-info"
			></detail-more-info>
			<hr />
			<detail-img-info 
				ref="detailImgInfo"
				:goodsImgInfo="goodsImgInfo" 
				@refreshImg="refreshImg"
			></detail-img-info>
		</scroll>
		<backup-top class="backup-top"  v-if="scrollPosition<-400"  @click.native="backClick" ></backup-top>
	  <detail-bottom-Bar @addToCart="addToCart" ></detail-bottom-Bar>
	</div>
</template>

<script>
	import DetailNavBar from '@/views/detail/childcomponents/DetailNavBar.vue'
	import DetailBaseInfo from '@/views/detail/childcomponents/DetailBaseInfo.vue'
	import DetailMoreInfo from '@/views/detail/childcomponents/DetailMoreInfo.vue'
	import DetailImgInfo from '@/views/detail/childcomponents/DetailImgInfo.vue'
	import DetailBottomBar from '@/views/detail/childcomponents/DetailBottomBar.vue'
	
	import Scroll from '@/components/common/scroll/Scroll.vue'
	import Swiper3 from '@/components/common/swiper3/Swiper3.vue'
	import BackupTop from '@/components/common/backuptop/BackupTop.vue'
	
	import {getDetail,Goods} from '@/network/detail.js'
	
	import {mapActions} from 'vuex'

	export default{
		name:'Detail',
		data(){
			return {
				page:'0',
				id:String,
				imageList:[],    
				goodsInfo:{},
				goodsMoreInfo:[],
				goodsImgInfo:[],
				contentHeight:[],
				currentIndex:null,
				refreshImgFlag:true,
				scrollPosition:0,
			} 
		},
		mounted(){
			// let index = this 
			// setInterval(()=>{
			// 	console.log(index.$refs.scroll.scroll.scrollerHeight)
			// },1000)
			//  轮播图 图片 加载完，scroll 更新
			//  debounce 防抖函数
			const refresh = this.debounce(this.$refs.scroll.refresh, 500)
			this.$bus.$on('refreshImg',()=>{
				refresh()
			})
			
			if(this.$route.params.id){
				this.id = this.$route.params.id
				getDetail(this.id).then(res => {
						//原数组 内部 data  id为索引
						//返回 某种商品的全部数据
						console.log(res)
						//返回轮播图数据
						this.imageList = res.goodImg
						//返回商品信息  -info
						this.goodsInfo=new Goods(res.detail)
						// 返回店铺信息 -more
						this.goodsMoreInfo = res.goodsMoreInfo
						//返回图片详情信息 -goodsImginfo
						this.goodsImgInfo = res.goodOneImgInfo
						//返回商品局部数据
				
						console.log(res.goodOneImgInfo)
				})
			}
			
			this.$refs.detailNavBar.goodId = this.$route.params.id
		},
		activated() {
			this.$bus.$emit('closeTabBar')
			this.$refs.detailNavBar.page = this.page
		},
		deactivated() {
			this.$bus.$emit('openTabBar')
		},
		components:{
			DetailNavBar,
			DetailBaseInfo,
			DetailMoreInfo,
			DetailImgInfo,
			DetailBottomBar,
			Swiper3,
			Scroll,
			BackupTop,
		},
		methods:{
			...mapActions({addCart:'addToCart'}),
			addToCart(){
				const product = {}
				product.image = this.imageList[0]
				product.title = this.goodsImgInfo[1].title
				product.describe = this.goodsImgInfo[0].describe
				product.price = this.goodsInfo.itemInfo.price
				product.id = this.$route.params.id
				/* this.$store.commit('addToCart',product) */
				/* this.$store.dispatch('addToCart',product).then(res=>{
					console.log(res);
				}) */
				this.addCart(product).then(res=>{
					console.log(res);
					this.$toast.show(res,2000)
				})
			},
			
			turnNavBar(posY){
				this.scrollPosition = -posY
				let contentHeight = this.contentHeight
				for(let i=0;i<contentHeight.length;i++){
					if(  
						(this.currentIndex !== i) &&
						(
							(i===0&&posY>0&&posY<contentHeight[0]) ||
							(i!==0&&posY>contentHeight[i-1]&&posY<contentHeight[i])
						)	
					){
						this.currentIndex = i
						console.log(i)
					}
				}
	
			},
			pullingUpRefresh(){},
			debounce(func, wait) {
				let timer;
				return function(...args){
					let context = this; // 注意 this 指向
					/* let args = arguments; // arguments中存着e */
					if (timer) clearTimeout(timer);
					  timer = setTimeout(() => {
					    func.apply(context, args)
					  }, wait)
				}     
			},
			refreshImg(){
				if(this.refreshImgFlag===true){
					this.refreshImgFlag =false
					this.getLength=this.debounce(()=>{
						this.contentHeight.push(this.$refs.swiper3.$el.offsetHeight)
						this.contentHeight.push(this.$refs.detailBaseInfo.$el.offsetHeight+this.$refs.swiper3.$el.offsetHeight)
						this.contentHeight.push(this.$refs.detailMoreInfo.$el.offsetHeight+this.$refs.detailBaseInfo.$el.offsetHeight+this.$refs.swiper3.$el.offsetHeight)
						this.contentHeight.push(this.$refs.detailImgInfo.$el.offsetHeight+this.$refs.detailMoreInfo.$el.offsetHeight+this.$refs.detailBaseInfo.$el.offsetHeight+this.$refs.swiper3.$el.offsetHeight)
						this.$refs.scroll.refresh()
						this.$refs.scroll.finishPullUp()
						console.log(this.contentHeight)
					},500)()		
				}
			},
		
		},
		watch:{
			//底部资源增加作用,无图片
			data(val){
				this.$nextTick(()=>{
					this.$refs.scroll.refresh()
					this.$refs.scroll.finishPullUp()
				})
			}
		}
	}

</script>

<style scoped="">
	.detail{
		position: relative;    
		height: 100vh;
		z-index: 99;
		background-color: #FFFFFF;
	}
	.detail-nav-bar{
		position: relative;
	}
	.content{
		/*  BScroll  overflow 容器父代
				设置高宽度
				位置POSITION  可以滚动		
		父容器一定要有一个固定的高度并且溢出隐藏，
		子容器的高度要大于父元素的高度，才能滚动
		overflow: hidden;
		/* height: calc(100% - 44px); */
		position: absolute;
		width: 100vw;
		left: 2.5%;
		top: 46px;

		height: calc(100% - 46px);
		overflow: hidden;
	}
	.detail-more-info{
		height: ;
	}
	.backup-top{
		position: absolute;
		bottom: 52px;
		right: 0px;
		opacity:0.9;
	}
	

</style>
