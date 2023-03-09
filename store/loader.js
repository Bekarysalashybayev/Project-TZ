export const state = () => ({
  isLoading: false
})

export const mutations = {
  SET_LOADER(state, val) {
    state.isLoading = val
  },
}

export const actions = {
  setLoaderValue({commit}, value){
    commit('SET_LOADER', value)
  },
}
