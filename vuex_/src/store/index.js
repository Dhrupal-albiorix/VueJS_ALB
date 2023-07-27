import Vue from 'vue' //imported and used Vuex and Vue
import Vuex from 'vuex'

Vue.use(Vuex)
//created a new Vuex store 
export default new Vuex.Store({

  // our state object
  state: {
    ex1: "example 1",
    message: "Hello, I am coming from your Vuex state that is why you can see me here and in every other component without passing props",
    exAction: "example of action",
    exMaPGetters: "ex of map getters",
    exMapAction: 22
  },
  //added a getMessage getter
  getters: {
    getEx(state) {
      return state.ex1
    },
    getMessage(state) {
      return state.message
    },
    getExAction(state) {
      return state.exAction
    },
    exMaPGetters(state) {
      return state.exMaPGetters
    },
    exMapAction(state) {
      return state.exMapAction
    },
  },
  mutations: {
    // lol is this.updateState in this.$store.commit("changeMessageValue", this.updateState);
    //anything passed at secound perameter of commit will be taken as new value of state
    changeMessageValue(state, lol) {
      state.message = lol
    },
    changeExVal(state, val2) {
      state.ex1 = val2
    },
    changeExActionVal(state, ExActionVal) {
      state.exAction = ExActionVal
    },
    incrementfun(state) {
      state.exMapAction = state.exMapAction + 22
    }

  },
  actions: {
    changeExActionVal(context, ExActionVal) {
      console.log(context)
      context.commit('changeExActionVal', ExActionVal)
    },

    incrementfun(context) {
      context.commit('incrementfun');
    },

  },
  modules: {
  }
})
