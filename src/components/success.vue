<template>
  <section>
    <!-- title start -->
    <bg-title ref="profile"></bg-title>
    <!-- title end -->
  
    <!-- RMB 15 cupon sratr  -->
    <!-- <img class="width_680 " :src="images.orderFee" alt=""> -->
    <img class="width_680 " src='../assets/images/order_fee.png' alt="">
    <!-- RMB 15 cupon end  -->
    <!-- RMB 1500 cupon start  -->
    <!-- <img class="width_680 " :src="images.transportFee" alt=""> -->
    <img class="width_680 " src="../assets/images/transport_fee.png" alt="">
    <!-- RMB 1500 cupon end  -->
  
    <!-- center block start -->
  
    <section class="padding-x_70">
      <p class="text-center font-size_28">
        礼包已发放至手机尾号{{telEnd}}的账号中
      </p>
  
      <!-- 体验6city全球购 start -->
      <section @click="experienceApp">
        <wid-btn btnTxt="立即体验6City全球购"></wid-btn>
      </section>
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
import Da from '../tools/da'

import images from '../assets/images'

import bgTitle from './bgTitle'
import WidBtn from './widBtn'

export default {
  data() {
    return {
      images,
      telEnd: ''
    }
  },
  name: 'success',
  components: {
    "bgTitle": bgTitle,
    WidBtn
  },
  methods: {
    //  关闭提示框
    hidePop() {
      this.$store.dispatch("hidePopAction")
    },
    experienceApp() {
      let url = 'http://mp.weixin.qq.com/mp/redirect?url=https://itunes.apple.com/cn/app/6city%E5%85%A8%E7%90%83%E8%B4%AD-%E4%BB%A3%E4%BD%A0%E4%B9%B0%E9%81%8D%E5%85%A8%E7%90%83%E7%94%B5%E5%95%86/id1075802145?mt=8'
      if (Da.isAndroid) {
        url = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.panli.android.sixcity'
      }

      // setTimeout(function () {
      window.open(url)
      // }, 200);
    }

  },
  computed: {


  },

  created() {
    // const img=new Image()
    // img.src=CONFIG

    console.log(window.localStorage.telEnd)
    console.log(window.localStorage.recived)
    this.telEnd = window.localStorage.telEnd
    let obj = {
      show: true,
      imgSrc: images["iconOk"],
      text: "领取成功"
    }
    this.$store.dispatch("showPopAction", obj)
    this.hidePop()
    window.localStorage.recived = 2
    // console.log("领取成功")
  }
}
</script>