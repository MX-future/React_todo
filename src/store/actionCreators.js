import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from './actionTypes'

export const getInputChange = (value) => ({
    type: INPUT_CHANGE,
    value
});

export const getAddItem = () => ({
    type: ADD_ITEM
});

export const getDeleteItem = (index) => ({
    type: DELETE_ITEM,
    index
});