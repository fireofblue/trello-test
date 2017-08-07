
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const state = {
        cardList: [
        ],
        selectedComponent: 'AddCard',
        key: ''
}

export default {
    state,
    actions,
    getters,
    mutations,
}