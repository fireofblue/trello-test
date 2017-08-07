
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const state = {
        cardList: [
            {task_name:"John", date: '1'},
            {task_name:"Joao", date: '2'},
            {task_name:"Jean", date: '3'}
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