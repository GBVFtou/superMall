<template>
	<div class="detail-four">
		<detail-nav-bar ref="detailNavBar"  class="detail-nav-bar"></detail-nav-bar>
		<scroll :probe-type="3"
						class="content"
						ref="scroll"
						>
			<div>评论</div>
		</scroll>
	</div>
</template>

<script>
	import DetailNavBar from '@/views/detail/childcomponents/DetailNavBar.vue'
	
	import Scroll from '@/components/common/scroll/Scroll.vue'

	import {getDetail,Goods} from '@/network/detail.js'
	export default{
		name:'DetailThree',
		props:{
			id:{
				type:String,
				default:'0'
			}
		},
		data(){
			return{
				page:'2'
			}
		},
		components:{
			DetailNavBar,
			Scroll,
		},
		mounted() {
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
		height: calc(100% - 46px);
		left: 2.5%;
		top: 46px;
		overflow: hidden;
	}
</style>
