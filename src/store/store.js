import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export const store = new Vuex.Store({
  state: {
    expenses: [],
  },
  mutations: {
    addExpense(state, expense) {
      state.expenses = [expense, ...state.expenses]
    },
    deleteExpense(state, id) {
      state.expenses = state.expenses.filter(item => item.id != id)
    },
  },
  getters: {
    expenses: state => state.expenses
  },
  plugins: [vuexLocal.plugin],
})
