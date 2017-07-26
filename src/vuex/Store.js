import Vue from 'vue'
import Vuex from 'vuex'
import images from '../assets/images'
import HTTP from '../fetch/http'
import CONFIG from '../base.config'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    getCode: "获取验证码",
    btnDisabled: false,
    popObj: {
      show: false,
      imgSrc: "",
      text: ""
    }
  },
  mutations: {
    showPop(state, Payload) {
      state.popObj = Payload
    },
    hidePop(state, Payload) {
      state.popObj = Payload
    },
  },
  actions: {
    country({ commit }) {
      const url = `${CONFIG.host}/catelog/country`
      const obj = {
        "host": "www.amazon.com",
        "CurrencyCode": "CNY"
      }
      return HTTP.post(url, obj)
    },

    /**
     * 显示提示框
     * 
     * @param {any} { commit } 
     * @param {any} Payload 
     */
    showPopAction({ commit }, Payload) {
      commit("showPop", Payload)
    },
    /**
     * 隐藏提示框
     * 
     * @param {any} { commit } 
     */
    hidePopAction({ commit }) {
      let obj = {
        show: false,
        imgSrc: '',
        text: ""
      }
      setTimeout(() => {
        commit("hidePop", obj)
      }, 1000)

    },
    /**
     * n秒后重新发送验证码
     * 
     * @param {any} { commit, state } 
     */
    reSend({ commit, state }) {
      state.btnDisabled = true
      let reSendTimes = 60
      function timeIncrease() {
        reSendTimes--;
        const timer = setTimeout(() => {
          if (reSendTimes > 1) {
            timeIncrease()
          } else {
            clearTimeout(timer)
            state.btnDisabled = false
            state.getCode = '获取验证码'
          }

        }, 1000)
        state.getCode = `${reSendTimes}秒后重发`
      }
      timeIncrease()
    }
  },
  getters: {
    getCode: state => state.getCode,
    btnDisabled: state => state.btnDisabled
  }
})