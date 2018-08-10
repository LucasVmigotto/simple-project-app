import Vue from 'vue'
import Vuex from 'vuex'
import { version } from '../api'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {

  },
  state: {
    error: null,
    showError: false,
    loading: false,
    apiVersion: '0.0.0'
  },
  getters: {
    loading (state) {
      return state.loading
    },
    errorMessage (state) {
      const { error } = state
      let message = null
      if (state.showError && error) {
        message = error.message
        if (error.response && error.response.data &&
          error.response.data.errors) {
          message = error.response.data.errors[0].message
        }
      }
      return message
    },
    showError (state) {
      return state.showError
    }
  },
  mutations: {
    LOADING_CHANGED (state, loading) {
      state.loading = loading
    },
    API_VERSION_CHANGED (state, version) {
      state.apiVersion = version
    },
    ERROR_CHANGED (state, error) {
      state.error = error
      state.showError = !!error
    },
    SHOWERROR_CHANGED (state, show) {
      state.showError = show
    }
  },
  actions: {
    setLoading ({ commit }, loading) {
      commit('LOADING_CHANGED', loading)
    },
    setError ({ commit, dispatch }, error) {
      commit('ERROR_CHANGED', error)
    },
    setShowError ({ commit }, show) {
      commit('SHOWERROR_CHANGED', show)
    },
    async getApiVersion ({ commit, dispatch }) {
      try {
        console.log('Ola')
        commit('LOADING_CHANGED', true)
        const api = await version()
        commit('API_VERSION_CHANGED', api)
        return api
      } catch (err) {
        dispatch('setError', err)
      } finally {
        commit('LOADING_CHANGED', false)
      }
    }
  }
})
