import Da from '../tools/da'
import images from '../assets/images'
import LANG from '../lang'
export default {
  /**
   * 验证手机号
   * 
   * @param {any} tel 
   * @param {any} vm 
   * @returns 
   */
  checkPhone(tel, vm) {
    if (!Da.checkPhone(tel)) {
      console.log("手机号码格式不对")
      let obj = {
        show: true,
        imgSrc: images["iconX"],
        text: "手机号码格式不对"
      }
      vm.$store.dispatch("showPopAction", obj)
      vm.hidePop()
      return true
    }
  },

  /**
   * 手机号&验证码
   * 
   * @param {any} vm 
   * @returns 
   */
  verifyInput(vm) {
    const telNum = vm.telNum
    const phoneCode = vm.phoneCode
    const telLen = telNum.toString().trim().length
    const codeLen = phoneCode.toString().trim().length
    if (telLen === 0 || codeLen === 0) {
      let obj = {
        show: true,
        imgSrc: images["iconX"],
        text: "请填写手机号及验证码"
      }
      vm.$store.dispatch("showPopAction", obj)
      vm.hidePop()
      return false
    }
    return true
  },

  /**
   * 验证码错误
   * 
   * @param {any} res 
   * @param {any} vm 
   * @returns 
   */
  codeErr(res, vm) {
    if (res.Message === LANG.CodeErr) {
      let obj = {
        show: true,
        imgSrc: images["iconX"],
        text: "验证码错误"
      }
      vm.$store.dispatch("showPopAction", obj)
      vm.hidePop()
      return true
    }
    return false
  },

  /**
   * 手机号是否已经注册
   * 
   * @param {any} obj 
   * @param {any} vm 
   * @returns 
   */
  hadRegister(res, vm) {

    if (res.Message === LANG.Registed) {
      const obj = {
        show: true,
        imgSrc: images["iconX"],
        text: '仅限6City全球购的新用户领取哦'
      }
      vm.$store.dispatch('showPopAction', obj)
      vm.hidePop()
      return true
    }
  },
  /**
   * qq
   * 
   * @returns 
   */
  qqBrowser(vm) {
    if (Da.isQQ()) {
      vm.ShareType = 4
    }
  },
  /**
   * weixin
   * 
   * @returns 
   */
  weixinBrowser(vm) {
    if (Da.isWeiXin()) {
      const origin = vm.$route.query
      if (origin.type) {
        vm.ShareType = origin.type
      }
    }
  }

}