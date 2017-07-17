import Vue from 'vue'
import Vuex from 'vuex'
import images from '../assets/images'
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
    increment(state, Payload) {
      state.count += Number(Payload.amount)
    },
    showPop(state, Payload) {
      state.popObj = Payload
    },
    hidePop(state, Payload) {
      state.popObj = Payload
    },
    reSendTime() {

    }
  },
  actions: {
    // incrementAsy({ commit }, Payload) {
    //   setTimeout(function () {
    //     commit("increment", ploy)
    //   }, 3000)
    // },
    showPopAction({ commit }, Payload) {
      commit("showPop", Payload)
    },
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