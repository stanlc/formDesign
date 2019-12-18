<template>
  <div class="flex flex-center" :style="item.style">
    <div v-if="item.style.isImgBtn" :class="{'img-placeholder':!item.style.value}">
      <img v-if="item.style.value" :src="item.style.value" alt="图片按钮" width="100%" />
      <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示" />
    </div>
    <button class="wg-button"  :style="item.style.btnStyle" v-else>{{item.btnText}}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted(){
    this.item.btnText = this.$store.getters.getcmd.cmd_readme
    this.item.cmdInfo = this.$store.getters.getcmd
  },
  computed:{
    ...mapState({
      pageData: state => state.common.pageData,
      configTab: state => state.common.configTab,
    })
  }
}
</script>