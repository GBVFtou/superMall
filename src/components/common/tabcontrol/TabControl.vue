<template>
	<div class="tab-control">
		<div v-for="(item,index) in titles" :key=index class="tab-control-item">
			<tab-control-title  
			:index = index
			@getIndex="turnActive "
			:class="[{'tab-control-active':activeIndex===index},'tab-control-title']"
			> {{item}} </tab-control-title>
		</div>
	</div>
</template>

<script>
	import TabControlTitle from '@/components/common/tabcontrol/TabControlTitle.vue'
	
	export default{
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				},
			},
			
		},
		data(){
			return {
				activeIndex:null
			}
		},
		methods:{
			turnActive(index){
				this.activeIndex=index
				this.$emit('tabClick',index)
			},
			
		},
		components:{
			TabControlTitle
		}
	}
</script>

<style>
	.tab-control{
		display: flex;
		background-color: ;
	}
	.tab-control-item{
		flex: 1;
		text-align: center;
		
	  height: 40px;
		line-height: 40px;
		font-size: 18px;
		
		
	}
	
	.tab-control-active{
		/* text-decoration: underline; */
		color: #FF69B4;
		border-bottom: 1px solid #FF69B4;
		padding-bottom: 3px;
	}
	.tab-control-title{
		margin-left: 35%;
		width: 30%;
	
		
	}
</style>
<!-- <!-- 
:class="{'tab-control-active':index===activeIndex}" -->-->