<template>
	<div class="wrapper" ref="BScrollWrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'


	export default{
		name:'Scroll',
		props:{
			probeType:{
				type:Number,
				default:0
			}
		},
		data(){
			return {
				scroll:null,
				position:{
					x:0,
					y:0
				},
			}
		},
		methods:{
			scrollTo(x,y,time=300){
				this.scroll.scrollTo(x,x,time)
			},
			finishPullUp(){
				this.scroll.finishPullUp()
			},
			refresh(){
				this.scroll.refresh()
			}
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.BScrollWrapper,{
				probeType:this.probeType,
				mouseWheel: true,	
				click:true,
				pullUpLoad: true,
				pullDownRefresh:true,
			})
			this.scroll.on('scroll',(position)=>{
				let x = position
				this.position = x
				this.$emit('sendPosY',-this.position.y)		
			})
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullingUp')
			})
			
			
			
			this.scroll.on('pullingDown', (position) => {
				if(position&&position.y>80){
					this.scroll.refresh()
				}
			})
		},
	}
</script>

<style>

</style>
