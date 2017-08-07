/**
 * Created by nantawat on 8/5/2017 AD.
 */
export const updateCard = (context, payload) => {
    context.commit('updateCard', payload);
}

export const setSelectedComponent = (context, payload) => {
    context.commit('setSelectedComponent',payload);
}

export const addCard = (context, payload) => {
    context.commit('addCard',payload);
}

export const setKey = (context, payload) => {
    context.commit('setKey', payload);
}