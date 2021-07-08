<template>
	<nav-bar class="home-nav">
		 <div slot="left"></div>
		 <div slot="center" >购物街</div>
		 <div slot="right"></div>
	</nav-bar>
	
</template>
	
<script>
	 import NavBar from '@/components/common/navbar/NavBar.vue'
	 export default{
		 name:'HomeNavBar',
		 components:{
			 NavBar
		 }
	 }
</script>

<style>

</style>
