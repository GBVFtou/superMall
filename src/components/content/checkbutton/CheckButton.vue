<template>
	<div class="check-button">
		<img  
		:class="[isChecked===true ? 'active' : 'not-active']"
		src="@/assets/img/mark/checkButton.png"/>
	</div>
</template>

<script>
	export default{
		name:'CheckButton',
		props:{
			isChecked:{
				type:Boolean,
				default(){
					return false
				}
			}
		},
		mounted() {
			console.log(this.isChecked)
		}
	}
</script>

<style>
	.check-button img{
		width: 70%;
		height: 30px;
		border-radius: 50%;	
	
	}
	.not-active{
		border: 2px solid silver;
		
	}
	
	.active{
		border: 2px solid salmon;
	}
</style>
