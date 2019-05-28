export default {
  test ({ commit }) {
    commit('SET_FOO', 'bar')
  },
  login ({ commit }) {
    commit('SET_LOGIN', true)
  }
}
