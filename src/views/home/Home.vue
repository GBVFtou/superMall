<template >
  <div id="home" >
	  <home-nav-bar class="home-nav" ></home-nav-bar>
		
		<tab-control
			class='tab-control'
			v-show="tabControlPositionFixed"
			:titles="['流行','新款','精选']"  
		@tabClick='changeType'
		ref="tabControl"
		></tab-control>
		
		<scroll 
		class="wrapper" 
		ref="scroll" 
		:probe-type="3"
		@pullingUp="addHomeGoods"
		@sendPosY="fixedTabControl"
		>
			<swiper class="home-swiper" @swiperImageLoad="getSwiperOffset"></swiper>
			<recommend-view :recommends="recommends"></recommend-view>		
			<hr  style="height:2px;border:none;border-top:2px solid #185598;" />
			<feature-view></feature-view>
			<tab-control
			v-if="!tabControlPositionFixed"
			:titles="['流行','新款','精选']"  
			@tabClick='changeType'
			ref="tabControl"
			></tab-control>
			<goods-list :goods='getCurrentType' ></goods-list>
		</scroll>
		<backup-top class="backup-top"  v-if="scrollPosition<-400"  @click.native="backClick" ></backup-top>		
		
  </div>
 
</template>

<script>
	import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
	import {getHomeGoodsX} from '@/network/home.js'
	
	import Scroll from '@/components/common/scroll/Scroll.vue'
	import BackupTop from '@/components/common/backuptop/BackupTop.vue'
	import Swiper from '@/components/common/swiper/Swiper.vue'
  import TabControl from '@/components/common/tabcontrol/TabControl.vue'
	import GoodsList from '@/components/content/goods/GoodsList.vue'

	import HomeNavBar from '@/views/home/childcomponents/HomeNavBar.vue'
	import RecommendView from '@/views/home/childcomponents/RecommendView.vue'
	import FeatureView from '@/views/home/childcomponents/FeatureView.vue'
  
	export default {
    name:'Home',
		components:{
				HomeNavBar,
				Scroll,
				BackupTop,
				Swiper,
				RecommendView,
				FeatureView,
				TabControl,
				GoodsList,
		},
		data(){ 
			return {
				currentType:'pop',
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},
				},
				scrollPositionTimer:setInterval(()=>{
					if(this.$refs.scroll){
						this.scrollPosition = this.$refs.scroll.position.y
					}
				},500),
				scrollPosition:-1000,
				tabControlOffsetTop:Number,
				tabControlPositionFixed:false,
				
			}
		},
		computed:{
			getCurrentType(){
				switch(this.currentType) {
				     case 'pop':
				        return this.goods.pop.list
				     case 'new':
				        return this.goods.new.list
				     case 'sell':
							  return this.goods.sell.list
				} 
			}
		},
		created(){	
			this.getHomeMultidata()
			this.getHomeGoodsX(this.currentType)
		},
		mounted(){
			const refresh = this.debounce(this.$refs.scroll.refresh, 500)
			this.$bus.$on('itemImageLoad',()=>{
				refresh()
			})
		},
		methods:{
			changeType(index){
				switch(index) {
				     case 0:
				        this.currentType = 'pop'
				        break
				     case 1:
				        this.currentType = 'new'
				        break
				     case 2:
								this.currentType = 'sell'
								break
				}
			},
					
			getHomeMultidata(){
				getHomeMultidata()
				.then(res=>{
					console.log(res)
					this.banners = res.data.data.banner.list
					this.recommends = res.data.data.recommend.list
				})
				.catch(err=>{
					console.log(err)
				})
			},
			getHomeGoods(type){
				const page = this.goods[type].page + 1
				getHomeGoods(type,page)
				.then(res=>{
					/* <!-- 接口更改,无效操作 --> */
					console.log()
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page++
				})
				.catch(err=>{
					console.log('商品返回失败')
					console.log(err)
				})
			},
			getHomeGoodsX(type){
				getHomeGoodsX(type).then((data)=>{
					let page = this.goods[type].page 
					//  0   1   2  3 4 5 6 7 8 9 
				  // 0 1 2 3 4 5
					let former = page+1
					let latterOne = former*2 - 2
					let latterTwo = former*2 - 1
					if(data[type][latterTwo]){
						this.goods[type].list.push(data[type][latterOne])
						this.goods[type].list.push(data[type][latterTwo])
						this.goods[type].page++
					}
					
				})
			},
			addHomeGoods(){
				/* console.log(this.$refs.scroll.scroll.scrollerHeight) */
				this.getHomeGoodsX(this.currentType)
				this.$refs.scroll.finishPullUp()
				/* console.log(this.$refs.scroll.scroll.scrollerHeight) */
			},
			backClick(){
				this.$refs.scroll.scrollTo(0,0,300)
			},
			
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
			getSwiperOffset(){
				this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
			},
			fixedTabControl(scrollPositionY){	
				if(scrollPositionY<-949){
					this.tabControlPositionFixed = true		
				}else{
					this.tabControlPositionFixed = false
				}
			}
		},
		
  }
  
  
  
  
  
</script>

<style scoped="">
	#home{
		height: 100vh;
	}
	
	.home-nav{
		display: ;
		position: relative;
		/* z-index: 2; */
		background-color: hotpink;
		box-shadow: 0 1px 1px rgba(100,100,100,.1);
		color: white;
	}

	.tab-control{
	/* 	z-index: 3; */
	}

	
	.wrapper{
		position: absolute;
		height: calc(100% - 93px);
		overflow: hidden;
	}
	.backup-top{
		position: absolute;
		bottom: 52px;
		right: 0px;
		opacity:0.9;
	}

</style>

