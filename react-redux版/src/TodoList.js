import React,{ Component } from 'react';
import { connect } from 'react-redux';

//无状态组件写法
const TodoList = (props) => {

    const { inputValue, list, handleInputChange, handleItemClick, handleItemDelete } = props;
    return (
        <div>
          <input
              value={inputValue}
              onChange={handleInputChange.bind(this)}
          />
          <button onClick={handleItemClick.bind(this)}>添加</button>
          <ul>
            {list.map((item,index) => {
                return <li key={index} onClick={handleItemDelete.bind(this,index)}>{item}</li>
            })}
          </ul>
        </div>
    );
}

//将state的数据映射给props
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
//同样，可以将里面方法映射给props
const mapDispatchToProps = (dispatch) =>{
    return {
        handleInputChange(e){
            const action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action);
        },

        handleItemClick(){
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },

        handleItemDelete(index){
            const action = {
                type: 'delete_item',
                index: index
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
