export default {
  /**
   * 验证手机号
   * 
   * @param {any} tel 
   * @returns 
   */
  checkPhone(tel) {
    const reg = /^(13\d|14[57]|15[^4\D]|17[0135-8]|18\d)\d{8}$/
    const phone = tel.toString().replace(/(^\s*)|(\s*$)/g, '')
    return reg.test(phone)
  },

  /**
   * 微信浏览器
   * 
   * @returns 
   */
  isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  },
  /**
   * qq浏览器
   * 
   * @returns 
   */
  isQQ() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/QQ/i) == "qq") {
      return true;
    } else {
      return false;
    }
  }

}

