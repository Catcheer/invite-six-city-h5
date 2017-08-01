import Vue from 'vue'
import Vuex from 'vuex'
import images from '../assets/images'
import HTTP from '../fetch/http'
import CONFIG from '../base.config'
import LANG from '../lang'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    getCode: "获取验证码",
    btnDisabled: false,
    recordList: [],
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
    setRecordList(state, Payload) {
      state.recordList = Payload.List
    },
  },
  actions: {
    /**
     * 获取验证码
     * 
     * @param {any} { commit } 
     * @param {any} Payload 
     * @returns 
     */
    phoneCode({ commit }, Payload) {
      const url = `${CONFIG.host}/user/send/phoneCode`
      return HTTP.post(url, Payload)
    },

    /**
     * 参与活动
     * 
     * @param {any} { commit } 
     * @param {any} Payload 
     * @returns 
     */
    activity({ commit }, Payload) {
      const url = `${CONFIG.host}/user/activity `
      return HTTP.post(url, Payload)
    },
    /**
     * 领取记录
     * 
     * @param {any} { commit } 
     * @param {any} Payload 
     * @returns 
     */
    recordList({ commit }, Payload = {}) {
      const url = `${CONFIG.host}/user/activity/list `
      return HTTP.post(url, Payload).then(res => {
        console.log('store recodList')
        if (res.Message === LANG.Success) {
          commit('setRecordList', res)
          return res
        }
      }).catch(err => {
        console.log(err)
      })
    },

    /**
     * 更新次数
     * 
     * @param {any} { commit } 
     * @param {any} Payload 
     * @returns 
     */
    clickCount({ commit }, Payload) {
      const url = `${CONFIG.host}/user/activity/clickCount  `
      return HTTP.post(url, Payload).then(res => {
        console.log('clickCount')
        console.log(res)
      })
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
      return new Promise((resolve, reject) => {
        let obj = {
          show: false,
          imgSrc: '',
          text: ""
        }
        setTimeout(() => {
          commit("hidePop", obj)
          resolve()
        }, 2000)
      })


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
    btnDisabled: state => state.btnDisabled,
    recordList: state => state.recordList
  }
})