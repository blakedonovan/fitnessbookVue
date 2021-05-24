// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {

  test:{
    val:'67'
}

    ,selection: {
        memberSelection:null
      },


 
},

 getters: {

    memberSelection: state => state.selection.memberSelection

    
 },
 mutations: {

    selectMember (state, memberSelection) {
        state.selection.memberSelection = memberSelection
      },

     
     
        

 },
 actions: {

    selectMember (context, payload) {
        setTimeout(() => {
          context.commit("selectMember", payload);
        }, 100);
      }
 }
});