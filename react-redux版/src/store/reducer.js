const defaultState = {
    inputValue: '123',
    list: []
}

export default (state = defaultState,action) => {

    if(action.type === 'change_input'){
        //深拷贝一份state
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }

    if(action.type === 'add_item'){
        //深拷贝一份state
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState
    }

    if(action.type === 'delete_item'){
        //深拷贝一份state
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState
    }

    return state
}