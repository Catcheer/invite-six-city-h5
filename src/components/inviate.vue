<template>
  <div>
    <!-- title start -->
    <bg-title ref="profile"></bg-title>
    <!-- title end -->
  
    <!-- RMB 15 cupon sratr  -->
    <img class="width_750 " :src="images.hand" alt="">
    <!-- RMB 15 cupon end  -->
  
    <!-- center block start -->
  
    <div class="padding-x_70 margin-top_50">
      <p class="text-center font-size_28">
        您已经是6Citty全球购的老朋友了
        <br/>每邀请新用户下首单，就能赚50元现金
      </p>
  
      <!-- 体验6city全球购 start -->
      <div class="bg-color-ff4d6b height_70 margin-top_20   border-radius_5 font-size_30 text-center border-box color-fff line-height_70">立即邀请好友</div>
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
  name: 'inviate',
  components: {
    "bgTitle": bgTitle
  },
  methods: {


  },
  computed: {

  },
  created() {

  }
}
</script>