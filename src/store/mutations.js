import  ADDINFOGBVF from './mutation-type.js'

const mutations = {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    addStu(state,stu){
      state.students.push(stu)
    },
    xiugaiStu(state){
      state.info[1] = "Beijing"
      // Vue.set(state.students[3],'id','wzu')
      // Vue.delete(state.students[3],'id')
    },
    updateInfo(state){
      Vue.set(state.students[3],'id','wzu')
    },
    ['ADDINFOGBVF'](state){
      state.counter++
    },
  }
export default mutations