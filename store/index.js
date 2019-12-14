import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    formValues: {}
  },
  mutations: {
    updateFormValues (state, formValues) {
      state.formValues = formValues;
    }
  }
});

export default store
