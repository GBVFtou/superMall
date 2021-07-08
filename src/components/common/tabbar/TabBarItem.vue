<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else name="item-icon-active"><slot name="item-icon-active"></slot></div>

    <div :style="activeStyle"  :class="{active:isActive}">
      <slot  name="item-text"></slot>
    </div>

  </div>
</template>

<script>

export default {
  name:'TabBarItem',
  props:{
    link:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {

    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.link);
    }
  }

}
</script>

<style>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }

</style>
