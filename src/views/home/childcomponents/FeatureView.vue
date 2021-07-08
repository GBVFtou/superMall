<template>
	<div class="feature">
		<div class="feature-title">
			<span>新特卖每日早10晚8上新</span>
		</div>
		
		<div v-for="(item,index) in config" :key=index  :class="['feature-item']" >
			<a :href=item.link >
				<img  :src=item.url />
				<span class="feature-item-title">{{ item.title }}</span>
				<br />
				<span class="feature-item-discount" >{{ item.discount }}</span>
			</a>			
		</div>
	</div>
</template>

<script>
	export default{
		name:'FeatureView',
		data(){
			return{
				config:this.$store.state.homeFeature.config,
			}
		},
		created(){
		}
	}
</script>

<style>
	.feature-item{
		width: 48%;
		display: inline-flex;
		padding: 1%;
		text-decoration: none;;
	}
	.feature-item img{
		width: 100%;
		height: 100px;
	}
	
	.feature-item-title {
		color: black;
		text-decoration: none;
	}
	.feature-item-discount{
		color: red;
	}
	
	.feature-title {
		text-align: center;
		font-size: 20px;
	}
	
</style>
