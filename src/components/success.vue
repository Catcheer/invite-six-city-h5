<template>
  <section>
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
  
    <section class="padding-x_70">
      <p class="text-right font-size_28">
        礼包已发放至手机尾号{{telEnd}}的账号中
      </p>
  
      <!-- 体验6city全球购 start -->
      <section class="bg-color-ff4d6b height_70 margin-top_20   border-radius_5 font-size_30 text-center border-box color-fff line-height_70" @click="experienceApp">立即体验6City全球购</section>
      <!-- 体验6city全球购 end -->
    </section>
    <!-- center block end -->
  
  </section>
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
      images,
      telEnd: ''
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
    experienceApp() {
      window.location = "https://itunes.apple.com/cn/app/6city%E5%85%A8%E7%90%83%E8%B4%AD-%E4%BB%A3%E4%BD%A0%E4%B9%B0%E9%81%8D%E5%85%A8%E7%90%83%E7%94%B5%E5%95%86/id1075802145?mt=8"
    }

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
    console.log(this.$route.query.telEnd)
    this.telEnd = this.$route.query.telEnd
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