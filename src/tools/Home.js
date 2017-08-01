import Da from './da'
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
        text: res.Message
      }
      vm.$store.dispatch('showPopAction', obj)
      vm.hidePop()
      return true
    }
  }

}