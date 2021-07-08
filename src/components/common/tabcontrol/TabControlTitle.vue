<template>
	<div @click=sendIndex>
		<slot></slot>
	</div>

</template>

<script>
	export default{
		name:'TabControlTitle',
		props:{
			index:{
				type:Number,
				default(){
					return null
				}
			}
		},
		methods:{
			sendIndex(){
				this.$emit('getIndex',this.index)
			}
		}
	}
</script>

<style>
</style>
