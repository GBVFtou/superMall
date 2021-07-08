<template>
	<div class="detail-two">
		<detail-nav-bar ref="detailNavBar"  class="detail-nav-bar"></detail-nav-bar>
		<scroll :probe-type="3"
						class="content"
						ref="scroll"
						>
			<detail-description-info></detail-description-info>
		</scroll>
		<detail-bottom-Bar @addToCart="addToCart" ></detail-bottom-Bar>
	</div>
</template>

<script>
	import DetailNavBar from '@/views/detail/childcomponents/DetailNavBar.vue'
	import DetailDescriptionInfo from '@/views/detail/childcomponents/DetailDescriptionInfo.vue'
	import DetailBottomBar from '@/views/detail/childcomponents/DetailBottomBar.vue'
 	
	import Scroll from '@/components/common/scroll/Scroll.vue'

	import {getDetail,Goods} from '@/network/detail.js'
	export default{
		name:'DetailTwo',
		props:{
			id:{
				type:String,
				default:'0'
			}
		},
		data(){
			return{
				page:'1',
				size:{},
				detalt:[],
				imageList:[],
				goodsInfo:{},
				goodsMoreInfo:[],
				goodsImgInfo:[],
				
			}
		},
		components:{
			DetailNavBar,
			DetailDescriptionInfo,
			DetailBottomBar,
			Scroll,
		},
		methods:{
			addToCart(){
				const product = {}
				product.image = this.imageList[0]
				product.title = this.goodsImgInfo[1].title
				product.describe = this.goodsImgInfo[0].describe
				product.price = this.goodsInfo.itemInfo.price
				product.id = this.$route.params.id
				/* this.$store.commit('addToCart',product) */
				this.$store.dispatch('addToCart',product)
			}
		},
		mounted() {
			
			if(this.$route.params.id){
				// this.id = this.$route.params.id
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
						
						//返回商品参数信息 -gooddescription  size detalt
						// this.size = res.goodTwoDescription.size
						// this.detalt = res.goodTwoDescription.detalt
						//返回商品局部数据
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
	}
</script>

<style>
	.content{
		position: absolute;
		width: 100vw;
		height: calc(100% - 95px);
		left: 1%;
		overflow: hidden;
		
		
	}
</style>
