/**
 * Created by nantawat on 8/5/2017 AD.
 */
import Vue from 'vue';

export const updateList = (state,payload) => {
    state.cardList = payload;
}

export const updateCard = (state, payload) => {
    Vue.set(state.cardList, payload.index, {
        task_name : (payload.name == '') ? state.cardList[payload.index].task_name : payload.name,
        date : (payload.date == '') ?  state.cardList[payload.index].date : payload.date
    })
}

export const addCard = (state, payload) => {
    console.log(payload);
    if(typeof payload === 'string' && payload != '')
    {
        state.cardList.push({
            task_name : payload
        })
    }
}

export const setKey = (state, payload) => {
    state.key = payload;
}

export const setSelectedComponent = (state, payload) => {
    if(typeof payload === 'string'){
        state.selectedComponent = payload;
    }else{
        throw 'Incomplete Parameters'
    }
}