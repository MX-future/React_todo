import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from './actionTypes'

//创建默认值
const defaultState = {
    inputValue: '',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
        'All data from React Redux'
    ]
}

export default (state = defaultState,action) => {

    if(action.type === INPUT_CHANGE){
        //对state做一次深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === ADD_ITEM){
        //对state做一次深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ''; //置空输入框
        return newState;
    }

    if(action.type === DELETE_ITEM){
        //对state做一次深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }

    return state
}