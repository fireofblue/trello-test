import Vue from 'vue';
import Vuex from 'vuex';
import CardWrapper from './modules/CardWrapper/CardWrapper'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        CardWrapper
    }
});