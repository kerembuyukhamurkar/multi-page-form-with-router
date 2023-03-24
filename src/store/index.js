import { createStore } from 'vuex'

export default createStore({
  state: {
    person:{
      name:"",
      lastname:"",
      phonenumber:"",
      email:"",
      country:"",
      point:""
      
    }
  },
  getters: {
  },
  mutations: {
    stepone(state,data){
      
      state.person.name=data.name;
      state.person.lastname=data.surname;
     
    },
    steptwo(state,data){
      state.person.phonenumber=data.phonenumber;
      state.person.email=data.email;
      state.person.country=data.country;
      state.person.point=data.point;

    }
  },
  actions: {
  },
  modules: {
  }
})
