// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    selection: {
        selected:null
      },


 
},

 getters: {

    //selected: state => {return state.selection.selected}
 },
 mutations: {

    selectMember (state, payload) {
        state.selection.selected = payload
      }
 },
 actions: {

    selectMember (context, payload) {
        setTimeout(() => {
          context.commit("selectMember", payload);
        }, 100);
      }
 }
});