import * as types from './types'

const mutations = {
  [types.SET_FOO] (state, v) {
    state.foo = v
  },
  [types.SET_LOGIN] (state, v) {
    state.login = v
  }
}
export default mutations
