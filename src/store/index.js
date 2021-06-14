// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {

selection: {
        memberSelection:null
      },
static:{

  apiIP:'http://localhost:8000'
}
     
 
},

 getters: {

    memberSelection: state => state.selection.memberSelection,
    apiIP: state => state.static.apiIP,

    
 },
 mutations: {

     selectMember (state, memberSelection) {
       state.selection.memberSelection = memberSelection
      },
      

     
     
        

 },
 actions: {

    selectMember (context, memberSelection) {
        setTimeout(() => {
          context.commit("selectMember", memberSelection);
         
        }, 1);
      }
 }
});