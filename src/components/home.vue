<template>
  <section>
    <!-- title start -->
    <bg-title ref="profile"></bg-title>
    <!-- title end -->
  
    <!-- RMB 30 cupon sratr  -->
    <img class="width_750 " :src="images.hand" alt="">
    <!-- RMB 30 cupon end  -->
  
    <!-- center block start -->
    <section class="padding-x_70 margin-top_40">
      <input v-model="telNum" class="bg-color-fa height_70 width-b_100  border-ccc_1 border-radius_5 font-size_28 padding-x_30 border-box" type="number" placeholder="手机号">
      <section class="flex justify-between margin-top_20">
        <input v-model="verCode" class="bg-color-fa height_70 width_342  border-ccc_1 border-radius_5 font-size_28 padding-x_30 border-box" type="number" placeholder="验证码">
        <section @click="getCodeEvent" class="bg-color-fff0f2 height_70 width_248  border-ff4d6b_1 border-radius_5 font-size_28 text-center border-box color-ff4d6b line-height_70" :class="{'btn-disabled':btnDisabled}">{{getCode}}</section>
      </section>
      <section @click="receiveNow" class="bg-color-ff4d6b height_70 margin-top_20   border-radius_5 font-size_30 text-center border-box color-fff line-height_70">立即领取</section>
  
      <section class="height_50"></section>
      <!-- 领取规则 start -->
      <section class="flex align-items-center margin-bottom_15">
        <section class="flex-1 height_1 bg-color_666"></section>
        <h2 class="width_160 font-size_30 margin-x_20 text-center">领取规则</h2>
        <section class="flex-1 height_1 bg-color_666"></section>
      </section>
  
      <ul>
        <li class="font-size_24 color_666 line-height_33">●&nbsp;&nbsp;一个手机号只能领取一次。</li>
        <li class="font-size_24 color_666 line-height_33">●&nbsp;&nbsp;仅限未使用过6City全球购的用户使用。</li>
        <li class="font-size_24 color_666 line-height_33">●&nbsp;&nbsp;活动解释权归6City全球购所有。</li>
      </ul>
      <!-- 领取规则 end -->
      <section class="height_50"></section>
      <!-- 领取记录 start -->
      <section class="flex align-items-center margin-bottom_15">
        <section class="flex-1 height_1 bg-color_666"></section>
        <h2 class="width_160 font-size_30 margin-x_20 text-center">领取记录</h2>
        <section class="flex-1 height_1 bg-color_666"></section>
      </section>
      <ul>
        <li class="font-size_24 color_666 line-height_33 margin-bottom_10 flex">
          <section class="flex-1">手机尾号41564654领取了大礼包</section>
          <section class="width_135">07.13.13:13</section>
        </li>
        <li class="font-size_24 color_666 line-height_33 margin-bottom_10 flex">
          <section class="flex-1">手机尾号41564654领取了大礼包</section>
          <section class="width_135">07.13.13:13</section>
        </li>
        <li class="font-size_24 color_666 line-height_33 margin-bottom_10 flex">
          <section class="flex-1">手机尾号41564654领取了大礼包</section>
          <section class="width_135">07.13.13:13</section>
        </li>
        <li class="font-size_24 color_666 line-height_33 margin-bottom_10 flex">
          <section class="flex-1">手机尾号41564654领取了大礼包</section>
          <section class="width_135">07.13.13:13</section>
        </li>
        <li class="font-size_24 color_666 line-height_33 margin-bottom_10 flex">
          <section class="flex-1">手机尾号41564654领取了大礼包</section>
          <section class="width_135">07.13.13:13</section>
        </li>
        <li class="font-size_24 color_666 line-height_33 margin-bottom_10 flex">
          <section class="flex-1">手机尾号41564654领取了大礼包</section>
          <section class="width_135">07.13.13:13</section>
        </li>
        <li class="font-size_24 color_666 line-height_33 margin-bottom_10 flex">
          <section class="flex-1">手机尾号41564654领取了大礼包</section>
          <section class="width_135">07.13.13:13</section>
        </li>
        <li class="font-size_24 color_666 line-height_33 margin-bottom_10 flex">
          <section class="flex-1">手机尾号41564654领取了大礼包</section>
          <section class="width_135">07.13.13:13</section>
        </li>
        <li class="font-size_24 color_666 line-height_33 margin-bottom_10 flex">
          <section class="flex-1">手机尾号41564654领取了大礼包</section>
          <section class="width_135">07.13.13:13</section>
        </li>
      </ul>
      <section class="scroll"></section>
  
      <!-- 领取记录 end -->
    </section>
    <!-- center block end -->
  
  </section>
</template>

<script>

import Da from '../tools/da'
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import Home from '../api/Home.js'
import LANG from '../lang'
import HOME from '../tools/home'

import images from '../assets/images'

import bgTitle from './bgTitle'

export default {
  data() {
    return {
      images,
      telNum: '',
      verCode: '',
    }
  },
  name: 'home',
  components: {
    "bgTitle": bgTitle
  },
  methods: {
    //  关闭提示框
    hidePop() {
      this.$store.dispatch("hidePopAction")
    },
    //  立即领取事件
    receiveNow() {
      const telLen = this.telNum.toString().trim().length
      const codeLen = this.verCode.toString().trim().length
      if (telLen === 0 || codeLen === 0) {
        let obj = {
          show: true,
          imgSrc: images["iconX"],
          text: "请填写手机号及验证码"
        }
        this.$store.dispatch("showPopAction", obj)
        this.hidePop()
        return
      }
      this.$router.push({ name: 'Success' })
    },

    //  获取验证码事件
    getCodeEvent() {
      if (this.btnDisabled) return
      const tel = this.telNum
      // 手机号码格式不正确
      if (HOME.checkPhone(tel, this)) {
        return
      }
      const obj = {
        "Phone": tel
      }
      this.$store.dispatch("phoneCode", obj).then((res) => {
        console.log(res)
        // 手机号已经注册
        if (HOME.hadRegister(res, this)) {
          return
        }
        
        this.$store.dispatch("reSend")
      })
    }
    // ...mapMutations({
    //   add: "increment"  // 映射 this.add() 为 this.$store.commit('increment')
    // }),
    // ...mapActions({
    //   addAsy: "incrementAsy"
    // })

  },
  computed: {
    ...mapState({
      count: state => state.count,
      getCode: state => state.getCode,
      btnDisabled: state => state.btnDisabled,
    })
  },
  created() {
  }
}
</script>