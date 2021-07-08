<template>
	<div class="detail-img-info" v-if="goodsImgInfo.length!==0">
		<div class="describe">
			<div class="top"></div>
			<div class="middle">{{this.goodsImgInfo[0].describe}}</div>
			<div class="bottom"></div>
		</div>
		<div class="show">
			<div class="title">{{this.goodsImgInfo[1].title}}</div>
			<div class="img" v-for="(img,index) in imgList" :key=index >
				<img :src="img" @load="loadImg" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailImgInfo',
		props:{
			goodsImgInfo:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				imgList:[]
			}
		},
		methods:{
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
			loadImg(){
				this.$emit('refreshImg')
			}
		},
		mounted() {
			this.imgList.push(require('@/assets/img/detail/detailone/01.jpg'))
			this.imgList.push(require('@/assets/img/detail/detailone/02.jpg')) 
			this.imgList.push(require('@/assets/img/detail/detailone/03.jpg')) 
			this.imgList.push(require('@/assets/img/detail/detailone/04.jpg')) 
		},
		activated() {
			
		}
	}
</script>

<style scoped="">
	.detail-img-info{
		padding: 20px 0;
		border-bottom: spx solid #f2f5f8;
	}
	.describe{
		padding: 0px 15px;
	}
	.describe .top,.describe .bottom{
		width: 90px;
		height: 1px;
		background-color: #a3a3a5;
		position: relative;
	} 
	.describe .top{
		float: left;
	}
	.describe .bottom{
		float: right;
	}
	.describe .top::after,.describe .bottom::before{
		width: 5px;
		height: 5px;
		background-color: #333;
		position: absolute;
		bottom: 0;
	}
	.show .title{
		font-size: 18px;
		color: #000000;
	}
	.show img{
		width: 100%;
	}
</style>
