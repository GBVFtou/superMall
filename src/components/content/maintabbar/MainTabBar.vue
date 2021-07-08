<template>
  <div id="maintabbar">
    <tab-bar>
      <tab-bar-item link='/home' active-color="red">
        <img slot="item-icon" src="@/assets/img/home1.png"/>
        <img slot="item-icon-active" src="@/assets/img/home2.png"/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link='/category' active-color="red">
        <img slot="item-icon" src="@/assets/img/category1.png"/>
        <img slot="item-icon-active" src="@/assets/img/category2.png"/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart" active-color="red">
        <img slot="item-icon" src="@/assets/img/cart1.png"/>
        <img slot="item-icon-active" src="@/assets/img/cart2.png"/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" active-color="red">
        <img slot="item-icon" src="@/assets/img/profile1.png"/>
        <img slot="item-icon-active" src="@/assets/img/profile2.png"/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'

export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}


</script>

<style>
</style>
