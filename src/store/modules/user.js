import { login } from '@/api/user'

const state = {}

const mutations = {}

const actions = {
  /**
   * 用户登录
   */
  login({ commit }, { username = '', password = '' }) {
    console.log(commit);
    console.log(username);
    console.log(password);
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password }).then(response => {
        console.log(response);
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}