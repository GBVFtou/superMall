<template>
	<div class="backup-top">
		<div class="backup-top-arrow"></div>
		<div class="backup-top-arrow-bottom"></div>
	</div>
</template>

<script>
	export default{
		name:'BackupTop',
		
	}
</script>

<style>
	.backup-top{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: whitesmoke;
		

	}
	.backup-top-arrow{
		position: absolute;
		width: 0;
		height: 0;
		border: 10px solid transparent;
		border-bottom: 20px solid red;
		background-color: none;
		
		margin-left: 40px;
		margin-top: 20px;
	}
	.backup-top-arrow-bottom{
		position: ;
		width: 10px;
		height: 15px;
		background-color: red;
		margin-left: 45px;
		margin-top: 45px;
	}
</style>
