<template>
  <div id="fingerprints">
    <transition-group name="fade">
      <div class='touch' v-for="touch, i in touches" :style="style(touch)" :key="touch.identifier || i"></div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'fingerprints',
    props: ['size', 'color', 'shadow'],
    data(){
      return {
        touches:[],
        events:{
          'touchstart':  this.touch, 
          'touchend':   this.touch, 
          'touchmove':  this.touch, 
          'mousedown':  this.tap, 
          'mouseup':    this.tap, 
          'mousemove':  this.tap,
        },
        down: false
      }
    },
    methods:{
      touch(e){
        this.touches = e.touches
      },
      tap(e){
        this.down = e.type==='mousedown' || this.down && e.type==='mousemove' ? true : false
        this.touches = this.down ? {0:e} : []
      },
      style(touch){
        var size = parseFloat(this.size) || 50
        var margin = Math.round(size/2)

        return Object.assign({
          transform: `translate3d(${touch.clientX}px, ${touch.clientY}px, 0)`
        }, {
          width: `${size}px`,
          height: `${size}px`,
          marginTop: `-${margin}px`,
          marginLeft: `-${margin}px`,
          borderRadius: `${margin}px`,
          background: this.color || 'rgba(255,255,255,0.8)',
          boxShadow: this.shadow=='false' ? `none` : `0 0 10px rgba(0,0,0,0.5)`
        })
      },
      bind(type){
        for(var i in this.events){
          window[type](i, this.events[i], true)
        }
      }
    },
    computed:{
      defaultStyle(){
       return this.point
      }
    },
    mounted(){
      this.bind('addEventListener')
    },
    destroy(){
      this.bind('removeEventListener')
    }
  }
</script>

<style lang="scss" scoped>
  #fingerprints{
    position: fixed;
    top:0;
    left:0;
    pointer-events:none;
    z-index: 2147483647;
    .touch{
      position: fixed;
      pointer-events:none;
    }
    .fade-leave-active {
      transition: opacity .3s;
    }
    .fade-enter-active{
      transition: none;
    }
    .fade-leave-to{
      opacity: 0
    }
  }
</style>