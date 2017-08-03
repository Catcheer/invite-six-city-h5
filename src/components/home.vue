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
      <input v-model="telNum" class="bg-color-fa outline-none height_70 width-b_100  border-ccc_1 border-radius_5 font-size_28 padding-x_30 border-box" type="number" placeholder="手机号">
      <section class="flex justify-between margin-top_20">
        <input v-model="phoneCode" class="bg-color-fa outline-none height_70 width_342  border-ccc_1 border-radius_5 font-size_28 padding-x_30 border-box" type="number" placeholder="验证码">
        <section @click="getCodeEvent" class="bg-color-fff0f2 height_70 width_248  border-ff4d6b_1 border-radius_5 font-size_28 text-center border-box color-ff4d6b line-height_70" :class="{'btn-disabled':btnDisabled}">{{getCode}}</section>
      </section>
      <section @click="receiveNow">
        <wid-btn btnTxt="立即领取"></wid-btn>
      </section>
  
      <section class="height_50"></section>
      <!-- 领取规则 start -->
      <line-title title='领取规则'></line-title>
      <ul>
        <li class="font-size_24 color_666 line-height_33">●&nbsp;&nbsp;一个手机号只能领取一次。</li>
        <li class="font-size_24 color_666 line-height_33">●&nbsp;&nbsp;仅限未使用过6City全球购的用户使用。</li>
        <li class="font-size_24 color_666 line-height_33">●&nbsp;&nbsp;活动解释权归6City全球购所有。</li>
      </ul>
      <!-- 领取规则 end -->
      <section class="height_50"></section>
      <!-- 领取记录 start -->
      <line-title title='领取记录'></line-title>
      <ul>
        <li v-for="item in recordList" :key="item.Phone" class="font-size_24 color_666 line-height_33 margin-bottom_10 flex">
          <section class="flex-1">手机尾号{{item.Phone}}领取了大礼包</section>
          <section class="width_135">{{item.CreateTime}}</section>
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
import LANG from '../lang'
import HOME from '../dao/Home'

import images from '../assets/images'

import bgTitle from './bgTitle'
import LineTitle from './lineTitle'
import WidBtn from './widBtn'

export default {
  data() {
    return {
      images,
      telNum: '',
      phoneCode: '',
      search: {},
      ShareType: 8,
      UserNo: ''
    }
  },
  name: 'home',
  components: {
    "bgTitle": bgTitle,
    LineTitle,
    WidBtn
  },
  methods: {
    //  关闭提示框
    hidePop() {
      return this.$store.dispatch("hidePopAction")
    },
    //  立即领取事件
    receiveNow() {
      const telNum = this.telNum
      const phoneCode = this.phoneCode
      // 手机号验证码未填写
      if (!HOME.verifyInput(this)) {
        return
      }
      // 手机号码格式不正确
      if (HOME.checkPhone(telNum, this)) {
        return
      }
      const obj = {
        "Phone": telNum
      }
      const model = {
        "Phone": telNum,
        "PhoneCode": phoneCode,
        "ShareType": this.ShareType,
        "UserNo": this.UserNo
      }
      this.$store.dispatch('activity', model).then(res => {
        console.log(res)
        // 手机号已经注册
        if (HOME.hadRegister(res, this)) {
          return
        }
        // 验证码错误
        if (HOME.codeErr(res, this)) {
          return
        }
        if (res.Message === LANG.Success) {
          this.$router.push({ path: '/success', query: { telEnd: telNum.substr(-4) } })
        }
      })



    },

    //  获取验证码事件
    getCodeEvent() {
      if (this.btnDisabled) return
      const telNum = this.telNum
      // 手机号码格式不正确
      if (HOME.checkPhone(telNum, this)) {
        return
      }
      const obj = {
        "Phone": telNum
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
      recordList: state => state.recordList
    })
  },
  created() {
    const locationSearch = HOME.processSearch()
    this.search = Object.assign({}, locationSearch)
    this.UserNo = this.search.UserNo
    HOME.qqBrowser(this)
    HOME.weixinBrowser(this)
    // 更新次数
    const clockObj = {
      "ShareType": this.ShareType,
      "UserNo": this.UserNo
    }
    this.$store.dispatch('clickCount', clockObj)
    // 领取记录
    this.$store.dispatch('recordList').then((list) => {
      console.log('create list')
      console.log(list)
    })
  }
}
</script>