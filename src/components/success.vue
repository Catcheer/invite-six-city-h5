<template>
  <div>
    <!-- title start -->
    <bg-title ref="profile"></bg-title>
    <!-- title end -->
  
    <!-- RMB 15 cupon sratr  -->
    <img class="width_680 " :src="images.orderFee" alt="">
    <!-- RMB 15 cupon end  -->
    <!-- RMB 1500 cupon start  -->
    <img class="width_680 " :src="images.transportFee" alt="">
    <!-- RMB 1500 cupon end  -->
  
    <!-- center block start -->
  
    <div class="padding-x_70">
      <p class="text-right font-size_28">
        礼包已发放至手机尾号6666的账号中
      </p>
  
      <!-- 体验6city全球购 start -->
      <div class="bg-color-ff4d6b height_70 margin-top_20   border-radius_5 font-size_30 text-center border-box color-fff line-height_70">立即体验6City全球购</div>
      <!-- 体验6city全球购 end -->
    </div>
    <!-- center block end -->
  
  </div>
</template>

<script>


// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

import images from '../assets/images'

import bgTitle from './bgTitle'

export default {
  data() {
    return {
      images
    }
  },
  name: 'success',
  components: {
    "bgTitle": bgTitle
  },
  methods: {
    //  关闭提示框
    hidePop() {
      this.$store.dispatch("hidePopAction")
    },

  },
  computed: {

  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建

    next()
  },
  created() {
    let obj = {
      show: true,
      imgSrc: images["iconOk"],
      text: "领取成功"
    }
    this.$store.dispatch("showPopAction", obj)
    this.hidePop()
    // console.log("领取成功")
  }
}
</script>